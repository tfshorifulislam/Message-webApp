import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChatSearch } from "./ChatSearch";

const ChatSarchModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="rounded-full px-6 py-2 cursor-pointer bg-foreground text-background">
        New Chat
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Chat</DialogTitle>
          <DialogDescription>Start a new conversation.</DialogDescription>
        </DialogHeader>

        {/* Modal content */}
        <ChatSearch />
      </DialogContent>
    </Dialog>
  );
};

export default ChatSarchModal;
