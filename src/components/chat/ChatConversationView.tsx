import { LockKeyhole } from "lucide-react";
import ChatMessageList from "./ChatMessageList";
import ChatMessageInput from "./ChatMessageInput";
import { ChatConversationViewProps } from "@/types/chat";

const ChatConversationView = ({
  chat,
  messages,
  onSendMessage,
}: ChatConversationViewProps) => {
  return (
    <section className="flex h-full min-w-0 flex-1 flex-col">
      {/* Header */}
      <header className="flex h-16 shrink-0 items-center justify-between border-b px-5">
        <div>
          <h3 className="font-semibold">{chat.name}</h3>

          <div className="flex items-center gap-1.5">
            <span className="text-xs text-muted-foreground">
              {chat.username}
            </span>

            <span className="flex items-center gap-1 text-xs text-emerald-600">
              <LockKeyhole className="size-3" />
              Encrypted
            </span>
          </div>
        </div>
      </header>

      {/* Messages */}
      <ChatMessageList messages={messages} />

      {/* Input */}
      <ChatMessageInput onSend={onSendMessage} />
    </section>
  );
};

export default ChatConversationView;