import React, { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import { useNavigate  } from "react-router-dom";
import "./styles.css";





function Home() {



  let navigate = useNavigate ();


    return (
      <>
     
  
      <Grid container  spacing={2}>

      <Grid item md={12}>
      <div>
      <header className="Navbar">
        <div className="Toolbar">
        
          <div className="Title"> FIRST BANK OF DUBAI </div>
          <div>
            <button> Logout </button>
          </div>
        </div>
      </header>
    
    </div>
    <br></br><br></br>
    </Grid>

      <Grid item md={4}>
      <div onClick={() => { navigate("/accountSummary");}}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
         
          <Typography variant="h1" component="div" style={{textDecoration: 'underline',marginTop:'15px',textAlign:'center'}}>
            Account Summary
          </Typography>
          <br></br>
         
          <Typography variant="h2" style={{textAlign:'center'}}>
          View Account Summary and Transaction
        
          </Typography>
        </CardContent>
       
      </Card>
      </div>
        </Grid>
        <Grid item md={4}>
        <div onClick={() => { navigate("/withdraw");}}>
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          
         
          <Typography variant="h1" component="div" style={{textDecoration: 'underline',marginTop:'15px',textAlign:'center'}}>
            Withdraw Money
          </Typography>
          <br></br>
         
          <Typography variant="h2" style={{textAlign:'center'}}>
           Withdraw Money from your account
        
          </Typography>
        </CardContent>
       
      </Card>
      </div>
        </Grid>
        <Grid item md={4}>
        <div onClick={() => { navigate("/deposit");}}>
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
         
          <Typography variant="h1" component="div" style={{textDecoration: 'underline',marginTop:'15px',textAlign:'center'}}>
            Deposit Money
          </Typography>
          <br></br>
         
          <Typography variant="h2" style={{textAlign:'center'}}>
            Deposit money to your account
        
          </Typography>
        </CardContent>
       
      </Card>
      </div>
        </Grid>
        </Grid>
        <br></br><br/>
       

</>
       
    )
 }

 export default Home;