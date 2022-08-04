import MessageForm from "./MessageForm"; //import the 3 components for the Chat feed we created
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
    const {chats,activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat]; //if chat exists find that specific chat
    //to fix the read recipts, who all read the message is shown
    const renderReadReceipts = (message , isMyMessage) =>  chat.people.map((person , index) => person.last_read === message.id &&( 
        //only if equal the person read the message
        <div
            key = {`read_${index}`}
            className="read-receipt"
            style={{
            float: isMyMessage ? 'right' : 'left', //styling the read part
            backgroundImage: person.person.avatar && `url(${person?.person?.avatar})` //bg image is set to the avatar
            }}
            />
        ));//render receipts function is called at last so we can see who all saw the message bottom right side small emoji 

    const renderMessages = () => {
        const keys = Object.keys(messages) //take keys from our messages and put in here

        return keys.map((key,index) =>{
            const message = messages[key]; //message with its key will be taken
            const lastMessageKey = index === 0 ? null : keys[index - 1]; //if there is message find the last message
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`msg_${index}`} style={{width: '100%'}}>
                    <div className="message-block">
                        {
                            isMyMessage //if my message goes to next line else go to the line after that
                            ? <MyMessage message={message} />
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>
                    <div className="read-receipts" style={{marginRight: isMyMessage ? '18px':'0px' , marginLeft: isMyMessage? '0px' : '68px' }}>
                        {renderReadReceipts(message, isMyMessage)} 
                    </div>

                </div>
            );
        });
    };

   //calling the function to be implemented


    if(!chat) return 'Loading...'; //if there is no chat to render below

    return (
            <div className ='chat-feed'>
                <div className="caht-title-container">
                    <div className="chat-title">{chat?.title}</div>
                    <div className="chat-subtitle">
                        {
                            chat.people.map((person)=> `${person.person.username}`)
                        }
                    </div>
                </div>
                {renderMessages()}
                <div style = {{ height : '100px '}}/>
                <div className="message-form-container">
                    <MessageForm {...props} chatId = {activeChat} />
                </div>
            </div>
    )
}

export default ChatFeed; //we want to export everything - we are changing the chat components at the moment