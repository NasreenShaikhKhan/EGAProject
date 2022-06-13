import React, { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import * as endpointContants from '../../utils/bankingEndpoints';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import Button from '@mui/material/Button';
import { postHttp,getHttp } from "../../lib/common/HttpService";
import Typography from '@material-ui/core/Typography';



function WithDraw() {
 
  const [message, setMessage] = useState("");
  const [errmessage, setErrMessage] = useState("");
  const [amount, setAmount] = useState("");



  const handleSubmit= (e) => {
    e.preventDefault();
    setMessage("");
    setErrMessage("");
    console.log("submit called with",amount);
    let remoteUrl = `${endpointContants.withDrawAmount}`;
    let obj = { url: remoteUrl,body:{amount:amount}};

    return postHttp(obj, false).then((response) => {
     
      if(response.status=== 'error')
      {
        setErrMessage("There was an error in transfer");
      }
      else
      {
        setMessage("TRANSFER SUCCESS");
      }
    })
      .catch(() => {
        console.log("error");
        setMessage("There was an error in transfer");
      })
 


    
    
  }
    return (

      <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '50vh' }}
     >
    
      <Grid item xs={6}>
      <Card >
        <CardContent>
         
        <form onSubmit={e => { handleSubmit(e) }}>
        <Grid container  alignItems="center"  justifyContent="center">
        <Grid item md={4}>
        <label>Amount in AED</label>
        <input 
          name='amount' 
          type='text'
          placeholder="Enter amount"
          value={amount}
          onChange={e => setAmount(e.target.value.replace(/[^0-9_.]/g, ""))}
         
        />
       
       
        <Button variant="contained" style={{marginTop:'15px'}} type="submit">WithDraw</Button>
        <br></br>
        <Typography variant="body2">{message}</Typography>
        <Typography variant="h4">{errmessage}</Typography>
     
        </Grid>
        </Grid>
       
        </form>

         
        </CardContent>
       
      </Card>
      </Grid>      
     </Grid>
    )
    }
     
     

 export default WithDraw;