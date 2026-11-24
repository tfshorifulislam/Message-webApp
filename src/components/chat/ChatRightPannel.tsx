import { MessageCirclePlus } from "lucide-react";
import { ChatSearch } from "./ChatSearch";
import { Button } from "@/components/ui/button";
import { SearchModal } from "./ChatType";
import ChatConversationList from "./ChatConversationList";
import type { dummyChats } from "@/data/dummy-chats";

type Props = SearchModal & {
  onSelectChat: (chat: (typeof dummyChats)[number]) => void;
  selectedChatId: string | null;
};

const ChatRightPannel = ({
  onNewChat,
  onSelectChat,
  selectedChatId,
}: Props) => {
  return (
    <aside className="flex h-full w-sm flex-col overflow-hidden border-r bg-background px-5">
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
      <div>
        <ChatSearch />
      </div>

      {/* Chat Conversation List */}
      <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto">
        <ChatConversationList
          onSelectChat={onSelectChat}
          selectedChatId={selectedChatId}
        />
      </div>
    </aside>
  );
};

export default ChatRightPannel;