export const REMOTE_URL = "http://connect-backend.test/api/";
export const LOGIN = REMOTE_URL+"login/";
export const FETCH_USER = () => REMOTE_URL+"user";
export const REGISTER = REMOTE_URL+"register/";
export const USER_UPDATE = REMOTE_URL+"user/update/";
export const USER_DELETE = id => REMOTE_URL+"user/delete/"+id;
