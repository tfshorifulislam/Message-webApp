import { MessageCircle, LockKeyhole } from "lucide-react";
import { Button } from "../ui/button";

const ChatInitPage = () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center bg-background px-6 text-center">
      <div className="flex size-20 items-center justify-center rounded-3xl bg-primary/10">
        <MessageCircle className="size-10 text-primary" />
      </div>

      <h2 className="mt-6 text-2xl font-semibold tracking-tight">
        Start Conversation
      </h2>

      <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
        Choose from your existing conversations, or start a new one.
      </p>

      <Button className='mt-3 rounded-full px-5 py-5 cursor-pointer'>New Chat</Button>

      <div className="mt-8 flex items-center gap-2 rounded-full border bg-muted/40 px-4 py-2 text-xs text-muted-foreground">
        <LockKeyhole className="size-3.5" />
        <span>Private and secure messaging</span>
      </div>
    </main>
  );
};

export default ChatInitPage;
