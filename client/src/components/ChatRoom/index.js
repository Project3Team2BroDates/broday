import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import {
  Chat,
  Channel,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  LoadingIndicator 
} from 'stream-chat-react';


// import 'stream-chat-react/dist/css/v2/index.css';

const apiKey = 'kuv6yxtd3dju';
// const apiSecret = 'ce78aebjbdhrsgty7nx4ubpp897nagbqqjvab8efn37ffzrzmgbcduqcdkz8tstt';

const user = {
  id: 'john',
  name: 'John',
}

export default function ChatRoom() {
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    async function init() {
      const chatClient = StreamChat.getInstance(apiKey);
      console.log(chatClient);
      console.log(chatClient.devToken(user.id));
      await chatClient.connectUser(
        {
          id: 'john',
          name: 'John Doe',
      },
      chatClient.devToken('john'),
      );

      const chatChannel = chatClient.channel('messaging', 'custom_channel_id', {
        name: 'Talk with Boys',
        members: [user.id],
      })
      console.log(chatChannel);

      await chatChannel.watch();
      setChannel(channel)
      setClient(chatClient)
      console.log(channel);
    }

    init();

    if (client)  return () => client.disconnectUser();
  }, [client, channel]);
 console.log(client);
 console.log(channel);
  if (!client || !channel) return <LoadingIndicator />

  return (
    <div className="chat-container">
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList/>
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
    </div>
  )
}
