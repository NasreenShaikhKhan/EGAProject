import { LOGIN_USER_SUCCESS, REFRESH_USER_SUCCESS, CONFIRM_USER_DETAILS, SESSION_EXPIRED } from "./loginUserType"

const initialState = {
    user: {
        access_token: '',
     
        expires_in_seconds: 900000,
        created_Time: new Date(),
       
        
        userDetails: {
           
            name:'',
          
        }
    },
    login: false
}

const loginUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {
                user: {
                    access_token: action.payload.access_token,
                  
                    created_time: new Date(),
                    expires_in_seconds: 900000,
                    userDetails: action.payload.user? action.payload.user: {
                        name:'',
                      
                        
                    },
                   
                },
                login: true
                
            }
      
            case SESSION_EXPIRED:
                return {
                    user: {
                        access_token: '',

                        
                    },
                    login: false
                   
                }

        default:
            return state;

    }
}

export default loginUserReducer;