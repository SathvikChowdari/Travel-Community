const ChatBox=  (props) => {

    return (
        <div className="chatbox">
            <div className="chatbox__header">

                <div className="chatbox__header__title">
                    <h5>Chat</h5>
                </div>
                    <button className="chatbox__header__button">
                        close
                    </button>
                
            </div>

            <div className="chatbox__body">
                <div className="chatbox__body__message">

                    <div className="chatbox__body__message__sender">
                        <img src="https://i.pravatar.cc/150?img=3" alt="avatar" />
                    </div>
                    <div className="chatbox__body__message__content">
                        <h3>
                            John Doe
                        </h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sunt illo, corporis aut fuga possimus dolores? Deserunt tempore modi numquam.</p>
                    </div>
                </div>
            </div>

            <div className="chatbox__footer">
                <input type="text" placeholder="Type a message" />
                <button className="chatbox__footer__button">
                    send
                </button>
            </div>
        </div>
    )
}

export default ChatBox;