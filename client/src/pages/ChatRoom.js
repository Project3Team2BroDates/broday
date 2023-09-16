import { useState, useEffect } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, Window, ChannelHeader, MessageInput, MessageList } from 'stream-chat-react';

const apiKey = 'kuv6yxtd3dju';

const USER1 = {
    id: 'user1',
    name: 'User 1',
};


const users = [USER1];

const getRandomUser = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    return users[randomIndex];
};

function ChatRoom() {
    const [chatClient, setChatClient] = useState(null);
    const [channel, setChannel] = useState(null);

    useEffect(() => {
       async function init() {
        const client = StreamChat.getInstance(apiKey);

        const user = getRandomUser();

        client.connectUser(user, client.devToken(user.id));

        const channel = client.channel("team", "general", { name: "General" });

        await channel.create()
        channel.addMembers([user.id])


        setChannel(channel);
        setChatClient(chatClient);
        }

        init();

        return () => {
            if(chatClient) chatClient.disconnectUser();
        }
    }, [])

    if (!chatClient || !channel) return <>  </>;

    return (
        <div>
            <Chat client={chatClient} theme={'messaging light'}>
                <Channel channel={channel}>
                    <Window>
                        <ChannelHeader />
                        <MessageList />
                        <MessageInput />
                    </Window>
                </Channel>
            </Chat>
        </div>
    );
}

export default ChatRoom;
