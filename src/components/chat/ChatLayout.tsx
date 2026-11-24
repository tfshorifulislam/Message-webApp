"use client";

import { useState } from "react";
import ChatRightPannel from "./ChatRightPannel";
import ChatInitPage from "./ChatInitPage";
import ChatSarchModal from "./ChatSarchModal";
import type { dummyChats } from "@/data/dummy-chats";
import ChatConversationView from "./ChatConversationView";

type Chat = (typeof dummyChats)[number];

const ChatLayout = () => {
  const [open, setOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  return (
    <div className="mx-auto flex h-screen max-w-7xl border">
      <ChatRightPannel
        onNewChat={() => setOpen(true)}
        onSelectChat={setSelectedChat}
        selectedChatId={selectedChat?.id ?? null}
      />

      <div className="flex min-w-0 flex-1 items-center justify-center">
        {selectedChat ? (
          <ChatConversationView chat={selectedChat} />
        ) : (
          <ChatInitPage onNewChat={() => setOpen(true)} />
        )}
      </div>

      <ChatSarchModal
        open={open}
        onOpenChange={setOpen}
      />
    </div>
  );
};

export default ChatLayout;