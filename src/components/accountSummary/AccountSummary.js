import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import * as endpointContants from '../../utils/bankingEndpoints';
import { postHttp,getHttp } from "../../lib/common/HttpService";
import { InputLabel } from '@mui/material';
import { Typography } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Table from "./table";
import "./styles.css";



function AccountSummary() {
 

const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [items, setItems] = useState([]);
const [totalRows, setTotalRows] = useState(0);
const [perPage, setPerPage] = useState(10);
const [balance, setBalance] = useState(0);
const [accountNo, setAccountNo] = useState("");

const columns = [
    {
        name: 'TransactionId',
        selector: (row) => row.transactionId,
     
        id:1
    },
    {
        name: 'Date',
        id:2,
        selector: (row) => row.date,
      
    },
    {
        name: 'Debit/Credit',
        id:3,
        selector: (row) => row.type,
       
    },
    {
        name: 'Amount(AED)',
        id:4, selector: (row) => row.amount,

   
      
    },
   
  ];


  useEffect(() => {
    let remoteUrl = `${endpointContants.fetchAccountSummary}`;
        let obj = { url: remoteUrl,};

        return getHttp(obj, false).then((response) => {
          console.log(response)
          setBalance(response.balance);
          setAccountNo(response.accountNumber);
        })
          .catch(() => {
            console.log("error");
          });;
    
  }, []);
  


  return (
    <div className="App">
        <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"

     >
    
      <Typography variant="h1" component="div" > Account Number: {accountNo}</Typography>
      <br></br>
      <Typography variant="h1" style={{fontWeight:'600'}} component="div"> Balance : { balance} {" "} AED</Typography>
      <br></br>
      <Typography variant="h1" component="div" > Transaction Details</Typography>
    
     </Grid>
      <br></br>
      {/* <DataTable
      options={{
        rowStyle: {
          fontSize: 50,
        }
      }}
        columns={columns}
        data={items}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        onChangePage={handlePageChange}
       
      /> */}
       <div className="App">
      <Table></Table>
      </div>
    </div>
  );
}


export default AccountSummary;