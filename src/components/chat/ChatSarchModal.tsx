
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { ChatSearch } from "./ChatSearch";

interface ChatSarchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ChatSarchModal = ({
  open,
  onOpenChange,
}: ChatSarchModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Chat</DialogTitle>
          <DialogDescription>
            Start a new conversation.
          </DialogDescription>
        </DialogHeader>

        <ChatSearch />
      </DialogContent>
    </Dialog>
  );
};

export default ChatSarchModal;
