import {pusher} from "./Pusher";
import {store} from "../redux/store";

export const Events = {
    onMessageReceived: () => {
        pusher.bind('message_received',function(data){
            const [sender, data] = data;
            store.dispatch(messageReceived(data.sender,data.message))
        })

    },
    onContactRequestReceived: () => {
        pusher.bind('contact_request_received',function(){

        })
    },
    onConnectionRequestReceived: () => {
        pusher.bind('connection_request_received',function(){

        })
    },
    onContactLogin: () => {
        pusher.bind('contact_login',function(){

        })
    }

};