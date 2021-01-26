const preloadedState = {
    chats: {
        1010214124: {
            participants: {
                123141:
                    {
                        first_name: 'Sven',
                        last_name: 'Sven'
                    }
                ,
                590158125:
                    {
                        first_name: 'Peter',
                        last_name: 'Pettigrew'
                    },
            },
            messages: {
                20210101000001: {
                    message_id: '123419038159018',
                    sender_id: 123141,
                    receiver_id: 590158125,
                    send_at: 20210101000001, // 2021-01-01 00:01:01
                    message: 'this is the first message',
                    message_type: 'text',
                }
            }
        }
    }
};

export default function general(state = preloadedState, action) {
    switch (action.type) {
        case "MESSAGE_RECEIVED":
            return {...state};
        default:
            return state;
    }
}