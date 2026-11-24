import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessageListProps } from "@/types/chat";


const ChatMessageList = ({ messages }: ChatMessageListProps) => {
  return (
    <ScrollArea className="min-h-0 flex-1">
      <div className="flex flex-col gap-4 p-5">
        {messages.map((message) => {
          const isMine = message.senderId === "me";

          return (
            <div
              key={message.id}
              className={`flex ${
                isMine ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                  isMine
                    ? "rounded-tr-sm bg-primary text-primary-foreground"
                    : "rounded-tl-sm bg-muted"
                }`}
              >
                <p className="break-words text-sm">
                  {message.content}
                </p>

                <div
                  className={`mt-1 flex items-center justify-end gap-1 text-[10px] ${
                    isMine ? "opacity-70" : "text-muted-foreground"
                  }`}
                >
                  <span>
                    {new Date(message.createdAt).toLocaleTimeString(
                      "en-US",
                      {
                        hour: "numeric",
                        minute: "2-digit",
                      },
                    )}
                  </span>

                  {isMine && (
                    <span>
                      {message.status === "read"
                        ? "✓✓"
                        : message.status === "delivered"
                          ? "✓✓"
                          : "✓"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
};

export default ChatMessageList;