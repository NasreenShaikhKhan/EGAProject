import axios from "axios"
import { getLoginUserAccessToken } from "./storeAccess";



// axios.interceptors.response.use(res => {
//     return res;
// }, (error) => {
//         switch (error.response.status) {
       
//         case 408:
//              console.log('Session Expired');
//              break;
       
//         default:
            
//    }
// //return Promise.reject(error);
//         return error;
// });

export const postHttp = (obj, showLoading = true) => {
    let accessToken = getLoginUserAccessToken();

    let config = {
        headers: {
            access_token: accessToken,
        },
        params: {
            locale: 'en'
          }
    }

 
return axios.post(obj.url, obj.body, config)
    .then(response => {
        console.log("response success",response.data)
       
        return response.data;
    })
    .catch(error => {
       
       console.log("Error on post resquest " ,error?.response?.data);
        return error?.response?.data;
    })
   

}

export const getHttp = (obj, showLoading = true) => {

    let accessToken = getLoginUserAccessToken();

    let config = {
        headers: {
            access_token: accessToken,
        },
        params: {
           ...obj.paramValues,
            locale: 'en'
          }
    }
   
     

    return axios.get(obj.url, config)
        .then(response => {
        
            console.log("response is ")
            return response?.data;
        })
        // .then(response => {
        //     endLoading();
        //     return response;
        // })
        .catch(error => {
          
            console.log("Error on get resquest ***" );

            return error?.response?.statusText;

        })

}



