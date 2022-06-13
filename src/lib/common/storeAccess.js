import store from "../redux/store"



const getStoreState = () => {
    return store.getState();
}

const invokeStoreMethod = (method) => {
    store.dispatch(method);
}



export const loginUser = () => {

}

export const getLoginUserAccessToken = () => {
    return getStoreState().loginUser.user.access_token;

}

export const getUserDetails = () => {
    return getStoreState().loginUser.user.userDetails;

}

export const  getLoginUserType = () => {
    return getStoreState().loginUser.user.user_type;

}


export const refreshUser = () => {

}