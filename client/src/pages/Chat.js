import React from "react";
import {
    useSubscription,
    useMutation,
  } from "@apollo/client";
  import { GET_MESSAGES } from "../utils/queries";
  import { POST_MESSAGE } from "../utils/mutations";


  const Messages = ({ user }) => {
    const { data } = useSubscription(GET_MESSAGES);
    if (!data) {
        return null;
    }

    return (
        <>
        {data.messages.map(({ id, user: messageUser, content }) => (
          <div >
            {user !== messageUser && (
              <div>
                {messageUser.slice(0, 2).toUpperCase()}
              </div>
            )}
            <div>
              {content}
            </div>
          </div>
        ))}
      </>
    );
  };
  
  const Chat = () => {
    const [state, stateSet] = React.useState({
      user: "Jack",
      content: "",
    });
    const [postMessage] = useMutation(POST_MESSAGE);
  
    const onSend = () => {
      if (state.content.length > 0) {
        postMessage({
          variables: state,
        });
      }
      stateSet({
        ...state,
        content: "",
      });
    };
    return (
      <div>
        <Messages user={state.user} />
        <div className="chat-container row-12 row-lg-9">
          <div  className="user-name col">
            <textarea
              label="User"
              value={state.user}
              onChange={(evt) =>
                stateSet({
                  ...state,
                  user: evt.target.value,
                })
              }
            />
          </div>
          <div className="user-text" >
            <textarea
              label="Content"
              value={state.content}
              onChange={(evt) =>
                stateSet({
                  ...state,
                  content: evt.target.value,
                })
              }
              onKeyUp={(evt) => {
                if (evt.keyCode === 13) {
                  onSend();
                }
              }}
            />
          </div>
          <div className="col" >
            <button className="send-button">
              Send
            </button>
          </div>
        </div>
      </div>
    );
  };
  
export default Chat;
  