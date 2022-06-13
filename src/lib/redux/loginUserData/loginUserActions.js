import { LOGIN_USER_SUCCESS, REFRESH_USER_SUCCESS ,LOGIN_USER_FAIL} from "./loginUserType";
import { postHttp } from "../../common/HttpService";


export const loginUserSuccess = (user) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
};

export const loginUserFail = (user) => {
  return {
    type: LOGIN_USER_FAIL,
    payload: {},
  };
};

export const refreshUserSuccess = (user) => {
  return {
    type: REFRESH_USER_SUCCESS,
    payload: user,
  };
};



export const loginUser = (loginState,navigate) => {
    return (dispatch) => {
      console.log("dispathing called")
      
        const remoteUrl = `/api/login`;
        postHttp({ url: remoteUrl,body:{accountNo:loginState.accountNo,password:loginState.password}}, false)
            .then(response => {
                let user = { access_token: response.token, refresh_token: response.validity,user:response.user};
               dispatch(loginUserSuccess(user));
               navigate("/accountSummary")
              
                
            })
            .catch(error => {
              console.error(error);
              dispatch(loginUserFail());
            })
    }
}

export const loginWithAuthData = (obj) => {
  return (dispatch) => {
    let user = {
      access_token: obj.access_token,
      refresh_token: obj.refresh_token,
    };
    dispatch(loginUserSuccess(user));
  };
};
