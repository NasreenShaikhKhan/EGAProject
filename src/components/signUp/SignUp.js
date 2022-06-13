import React, { useState, useEffect } from "react";

import "./styles.css";

import * as endpointContants from '../../utils/bankingEndpoints';
import { postHttp,getHttp } from "../../lib/common/HttpService";
import Typography from '@material-ui/core/Typography';




function SignUp() {

 
  const [message, setMessage] = useState("");
  const [errmessage, setErrMessage] = useState("");

  const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

  
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }

  const accountNo = useFormInput('');
  const password = useFormInput('');
  const name = useFormInput('');
  const email = useFormInput('');

 
    // Find user login info
    const userData =false;

    const handleSubmit = (event) => {

      event.preventDefault();
      setMessage("");
      setErrMessage("");
     
      let remoteUrl = `${endpointContants.createUser}`;
      let obj = { url: remoteUrl,body:{name:name.value,email:email.value,accountNo:accountNo.value,pin:password.value}};

    return postHttp(obj, false).then((response) => {
      console.log(response);
     
      if(response.status=== 'error')
      {
        setErrMessage(response.message);
      }
      else
      {
        setMessage("User Registered successfully");
      }
    })
      .catch(() => {
        console.log("error");
        setMessage("There was an error");
      })
 
 
    
  }
     

  

  // Generate JSX code for error message
 
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Account Number </label>
          <input type="text" {...accountNo}  required />
        
        </div>
        <div className="input-container">
          <label>Name </label>
          <input type="text" {...name}  required />
        
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="text" {...email}  required />
        
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" {...password} required />
       
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>

      <br/><br/>
      <Typography variant="body2">{message}</Typography>
        <Typography variant="h4">{errmessage}</Typography>
      </form>
    </div>
  );



  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {renderForm}
      </div>
    </div>
  );
}
   
     

 export default SignUp;