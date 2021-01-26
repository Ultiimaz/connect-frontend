export function messageReceived(sender, message) {
    return dispatch => {
        dispatch({
            type: "MESSAGE_RECEIVED",
            payload: {sender, message}
        })
    }
}