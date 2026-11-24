import { ChatConversationListProps } from "@/types/chat";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

const ChatConversationList = ({
  chats,
  onSelectChat,
  selectedChatId,
}: ChatConversationListProps) => {
  const sortedChats = [...chats].sort((a, b) => Number(b.pinned) - Number(a.pinned),);

  if (sortedChats.length === 0) {
    return (
      <p className="px-3 py-8 text-center text-sm text-muted-foreground">
        No conversations found.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-1 py-3">
      {sortedChats.map((chat) => (
        <button
          key={chat.id}
          onClick={() => onSelectChat(chat)}
          className={`flex w-full cursor-pointer items-center gap-3 rounded-xl p-3 text-left transition-colors ${
            selectedChatId === chat.id ? "bg-muted" : "hover:bg-muted"
          }`}
        >
          <div className="relative shrink-0">
            <Avatar className="size-12">
              <AvatarImage src={chat.avatar} alt={chat.name} />
              <AvatarFallback>
                {chat.name.slice(0, 2)}
              </AvatarFallback>
            </Avatar>

            {chat.online && (
              <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-background bg-green-500" />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <span className="truncate text-sm font-semibold">
                {chat.name}
              </span>

              <span className="shrink-0 text-xs text-muted-foreground">
                {chat.time}
              </span>
            </div>

            <div className="mt-1 flex items-center justify-between gap-2">
              <p className="truncate text-xs text-muted-foreground">
                {chat.lastMessage}
              </p>

              {chat.unreadCount > 0 && (
                <Badge className="size-5 shrink-0 justify-center rounded-full p-0 text-[10px]">
                  {chat.unreadCount}
                </Badge>
              )}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ChatConversationList;