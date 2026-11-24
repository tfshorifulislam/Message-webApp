import { MessageCirclePlus } from "lucide-react";
import { ChatSearch } from "./ChatSearch";
import { Button } from "@/components/ui/button";
import { SearchModal } from "./ChatType";
import ChatConversationList from "./ChatConversationList";

const ChatRightPannel = ({ onNewChat }: SearchModal) => {
  return (
    <aside className="flex h-full w-sm flex-col border-r bg-background px-5 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between py-3">
        <h3 className="text-md font-semibold">Chat</h3>

        <Button
          variant="ghost"
          onClick={onNewChat}
          size="icon"
          className="size-9 rounded-full text-muted-foreground hover:text-foreground cursor-pointer"
          aria-label="New chat"
        >
          <MessageCirclePlus className="size-5" />
        </Button>
      </div>

      {/* Search */}
      <div>
        <ChatSearch />
      </div>

      {/* chat conversation List */}
      <div className="min-h-0 flex-1 overflow-y-auto custom-scrollbar">
        <ChatConversationList />
      </div>
    </aside>
  );
};

export default ChatRightPannel;
