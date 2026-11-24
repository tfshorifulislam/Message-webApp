
import { MessageCirclePlus } from "lucide-react";
import { ChatSearch } from "./ChatSearch";
import { Button } from "@/components/ui/button";

const ChatRightPannel = () => {
  return (
    <aside className="flex h-full w-sm flex-col border-r bg-background px-5">
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between py-4">
        <h3 className="text-xl font-semibold">
          Chat
        </h3>

        <Button
          variant="ghost"
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

      
    </aside>
  );
};

export default ChatRightPannel;
