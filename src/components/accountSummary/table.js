import React from "react";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import * as endpointContants from '../../utils/bankingEndpoints';
import { postHttp,getHttp } from "../../lib/common/HttpService";



const tableHead = {
  transactionId: "Transaction Id",
  date: "Date",
  type: "Debit/Credit",
  amount: "Amount",
  
};

const Table = () => {
  const countPerPage = 3;
  const [value, setValue] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [collection, setCollection] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);

  

  React.useEffect(() => {
    if (!value) {
      updatePage(1);
    } 
  }, [value]);

  const updatePage = p => {
    setCurrentPage(p);
    let remoteUrl = `${endpointContants.fetchTransactionDetails}`;
            let obj = { url: remoteUrl,paramValues:{pageNo:p-1}};
    
    
            return getHttp(obj, false).then((response) => {
                console.log("response.totalCount",response.totalCount)
                console.log("response.transactionList",response.transactionList);
                setTotalCount(response.totalCount);           
                setCollection(response.transactionList);
            })
              .catch(() => {
                console.log("error");
              });;
  };

  const tableRows = rowData => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHead);
    const columnData = tableCell.map((keyD, i) => {
      return <td key={i}>{key[keyD]}</td>;
    });

    return <tr key={index}>{columnData}</tr>;
  };

  const tableData = () => {
    return collection?.map((key, index) => tableRows({ key, index }));
  };

  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <td key={index}>{title}</td>
    ));
  };

  return (
    <>
    
      <table>
        <thead>
          <tr>{headRow()}</tr>
        </thead>
        <tbody className="trhover">{tableData()}</tbody>
      </table>
     {collection?.length !==0  && <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={totalCount}
      />}
    </>
  );
};
export default Table;
