import {API} from "../../utils/API";

export function login(email, password) {
    return dispatch => {
        dispatch({type: 'LOGIN_LOADING'});
        API.login(email, password)
            .then(request => {
                if (request.status === 403) {
                    dispatch({
                        type: "LOGIN_FAILED",
                        payload: request.data
                    })
                }
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: request.data
                })
            })
            .catch(error => {
                dispatch( {
                    type: "LOGIN_FAILED"
                })
            })
    }
}

export function fetchUserByToken(token) {
    return dispatch => {
        API.fetchUser(token)
            .then(data => {
                    dispatch({
                        type: "USER_AUTH_SUCCESS",
                        payload: data.data
                    })
                }
            )
            .catch(error => {
                dispatch({
                    type: 'USER_AUTH_FAILED'
                })
            });
    }
}