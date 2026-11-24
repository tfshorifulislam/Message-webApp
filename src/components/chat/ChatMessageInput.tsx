"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ChatMessageInputProps } from "@/types/chat";


const ChatMessageInput = ({ onSend }: ChatMessageInputProps) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const content = message.trim();

    if (!content) return;

    onSend(content);
    setMessage("");
  };

  return (
    <div className="flex shrink-0 items-end gap-3 border-t p-4">
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        placeholder="Write a message..."
        className="max-h-32 min-h-11 resize-none"
        rows={1}
      />

      <Button
        size="icon"
        className="size-11 shrink-0 rounded-full"
        disabled={!message.trim()}
        onClick={handleSend}
        aria-label="Send message"
      >
        <Send className="size-4" />
      </Button>
    </div>
  );
};

export default ChatMessageInput;