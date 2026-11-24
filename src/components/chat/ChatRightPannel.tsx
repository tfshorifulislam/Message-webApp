import { MessageCirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatConversationList from "./ChatConversationList";
import { ChatSearch } from "./ChatSearch";
import { RightPannelProps } from "@/types/chat";

const ChatRightPannel = ({
  onNewChat,
  onSelectChat,
  selectedChatId,
  chats,
  searchQuery,
  onSearchChange,
}: RightPannelProps) => {
  return (
    <aside className="flex h-full w-sm shrink-0 flex-col overflow-hidden border-r bg-background px-5">
      {/* Header */}
      <div className="flex items-center justify-between py-3">
        <h3 className="text-md font-semibold">Chat</h3>

        <Button
          variant="ghost"
          onClick={onNewChat}
          size="icon"
          className="size-9 cursor-pointer rounded-full text-muted-foreground hover:text-foreground"
          aria-label="New chat"
        >
          <MessageCirclePlus className="size-5" />
        </Button>
      </div>

      {/* Search */}
      <div className="shrink-0">
        <ChatSearch
          value={searchQuery}
          onChange={onSearchChange}
        />
      </div>

      {/* Conversation List */}
      <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto">
        <ChatConversationList
          chats={chats}
          onSelectChat={onSelectChat}
          selectedChatId={selectedChatId}
        />
      </div>
    </aside>
  );
};

export default ChatRightPannel;