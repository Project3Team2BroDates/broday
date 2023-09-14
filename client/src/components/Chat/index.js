import { StreamChat, User } from 'stream-chat';
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window, 
} from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';

const userId = 'green-queen-5';
const userName = 'green-queen-5';

const user = {
  id: userId,
  name: userName,
}

    const user2 = new User(user);

const apiKey = 'axhdxsgj6uq8';
const userToken = '26espd3xt9zdupv8p9nfg66djgpyffd3k94unt7kyjjnq9gyx7rjhcdbavv3s84m';

const chatClient = new StreamChat(apiKey);
chatClient.connectUser(user2, userToken);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  name: 'Talk with Boys',
  members: [userId],
});

const ChatRoom = () => (
  <Chat client = {chatClient}>
    <Channel channel = {channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default ChatRoom;