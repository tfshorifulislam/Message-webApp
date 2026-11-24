import type { dummyChats } from "@/data/dummy-chats";

type Props = {
  chat: (typeof dummyChats)[number];
};

const ChatConversationView = ({ chat }: Props) => {
  return (
    <div className="flex h-full w-full flex-col">
      <header className="flex h-16 items-center gap-3 border-b px-5">
        <div>
          <h3 className="font-semibold">{chat.name}</h3>
          <p className="text-xs text-muted-foreground">
            {chat.username}
          </p>
        </div>
      </header>

      <div className="flex flex-1 items-center justify-center">
        <p className="text-sm text-muted-foreground">
          Start conversation with {chat.name}
        </p>
      </div>
    </div>
  );
};

export default ChatConversationView;