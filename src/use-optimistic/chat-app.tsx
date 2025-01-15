import ChatFooter from "./chat-footer";
import ChatHeader from "./chat-header";

function ChatApp() {\

  return (
    <div className="p:2 mx-auto flex h-screen max-w-screen-lg flex-1 flex-col justify-between sm:p-6">
      <ChatHeader />

      {/* messages */}
      <div
        id="messages"
        className="scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch flex flex-col space-y-4 overflow-y-auto p-3"
      >
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="order-1 mx-2 flex max-w-xs flex-col items-end space-y-2 text-xs">
              <div>
                <span className="inline-block rounded-lg rounded-br-none bg-blue-600 px-4 py-2 text-white">
                  yes, I have a mac. I never had issues with root permission as
                  well, but this helped me to solve the problem
                </span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="order-2 h-6 w-6 rounded-full"
            />
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-xs">
              <div>
                <span className="inline-block rounded-lg bg-gray-300 px-4 py-2 text-gray-600">
                  I get the same error on Arch Linux (also with sudo)
                </span>
              </div>
              <div>
                <span className="inline-block rounded-lg bg-gray-300 px-4 py-2 text-gray-600">
                  I also have this issue, Here is what I was doing until now:
                  #1076
                </span>
              </div>
              <div>
                <span className="inline-block rounded-lg rounded-bl-none bg-gray-300 px-4 py-2 text-gray-600">
                  even i am facing
                </span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="order-1 h-6 w-6 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* sender */}
      <ChatFooter />
    </div>
  );
}

export default ChatApp;
