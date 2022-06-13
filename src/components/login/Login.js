import React, { useState, useEffect } from "react";

import "./styles.css";
import { useSelector, useDispatch ,connect} from 'react-redux';
import { loginUser } from '../../lib/redux';
import { useNavigate  } from "react-router-dom";
import Link from "@material-ui/core/Link";





function Login(props) {

  const {login}=props;
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginState,setLoginState]=useState({})

 
   
  const [accountNo, setAccountNo] = useState('');
     
  const [password, setPassword] = useState('');


  // const useFormInput = initialValue => {
  //   const [value, setValue] = useState(initialValue);

  
  //   // const handleChange = e => {
  //   //   setValue(e.target.value);
    
  //   // }
  //   // return {
  //   //   value,
  //   //   onChange: handleChange
  //   // }
  // }

  // const accountNo = useFormInput('');
  // const password = useFormInput('');

 
    // Find user login info
    const userData =false;

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("loginState is",loginState);
   
    
     
      dispatch(loginUser(loginState,navigate));
  
      
      
      }

  


 
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
          <div className="input-container">
          <label>Account Number </label>
          <input type="text" name="accountNo" value={accountNo} onChange={(e)=>{
            setAccountNo(e.target.value)
             setLoginState({ ...loginState, accountNo: e.target.value });
          }}></input>
        </div> 
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" value={password} onChange={(e)=>{
              setPassword(e.target.value)
            setLoginState({ ...loginState, password: e.target.value });
          }}></input>
        </div> 
        <div className="button-container">
          <input type="submit" />
        </div>
        <br/>
       
        <Link style={{ color: "#1360D2", textAlign:"center" ,margin: '30%',textDecoration: "underline", fontSize: "16px", fontFamily: "Dubai Light", fontWeight: 600 }}
                        href="/signUp"
                        onClick={() => {}}>Create Account</Link>
                      

     
      </form>
    </div>
  );

  // const GoToHomePage=()=>
  // {
  //   console.log("going to account Summary");
  //   navigate('/accountSummary');
  // }

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {renderForm}
      </div>
    </div>
  );
}
const mapStateToProps=(state)=>
{
 return{
  user:state
 }
}
const mapDispatchToProps= (dispatch) =>
{
  return{
    login: (loginState,navigate) =>{
      dispatch(loginUser(loginState,navigate));
    }
  }
}
   
     

 export default connect(mapStateToProps,mapDispatchToProps)(Login);