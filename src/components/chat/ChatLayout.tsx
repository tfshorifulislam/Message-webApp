"use client";

import { useState } from "react";

import ChatRightPannel from "./ChatRightPannel";
import ChatInitPage from "./ChatInitPage";
import ChatSarchModal from "./ChatSarchModal";
import ChatConversationView from "./ChatConversationView";

import { dummyChats } from "@/data/dummy-chats";
import { dummyMessages } from "@/data/dummy-messages";

import type { Chat, Message } from "@/types/chat";

const ChatLayout = () => {
  const [open, setOpen] = useState(false);

  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  const [chats, setChats] = useState<Chat[]>(dummyChats);

  const [messages, setMessages] = useState<Record<string, Message[]>>(dummyMessages, );

  const [searchQuery, setSearchQuery] = useState("");

  // Filter conversations
  const filteredChats = chats.filter((chat) => {
    const query = searchQuery.toLowerCase().trim();

    return (
      chat.name.toLowerCase().includes(query) ||
      chat.username.toLowerCase().includes(query)
    );
  });

  // Select conversation
  const handleSelectChat = (chat: Chat) => {
    setSelectedChat(chat);

    setChats((prev) =>
      prev.map((item) =>
        item.id === chat.id
          ? { ...item, unreadCount: 0 }
          : item,
      ),
    );
  };

  // Send message
  const handleSendMessage = (content: string) => {
    if (!selectedChat || !content.trim()) return;

    const conversationId = selectedChat.id;
    const createdAt = new Date().toISOString();

    const newMessage: Message = {
      id: crypto.randomUUID(),
      conversationId,
      senderId: "me",
      content: content.trim(),
      createdAt,
      status: "sent",
    };

    // Update message history
    setMessages((prev) => ({
      ...prev,
      [conversationId]: [
        ...(prev[conversationId] ?? []),
        newMessage,
      ],
    }));

    // Update conversation preview
    const updatedChat = {
      ...selectedChat,
      lastMessage: content.trim(),
      time: new Date(createdAt).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),
      unreadCount: 0,
    };

    setChats((prev) =>
      prev.map((chat) =>
        chat.id === conversationId ? updatedChat : chat,
      ),
    );

    setSelectedChat(updatedChat);
  };

  return (
    <div className="mx-auto flex h-screen max-w-7xl overflow-hidden border">
      {/* Conversation Sidebar */}
      <ChatRightPannel
        onNewChat={() => setOpen(true)}
        onSelectChat={handleSelectChat}
        selectedChatId={selectedChat?.id ?? null}
        chats={filteredChats}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Conversation View */}
      <div className="flex min-w-0 flex-1">
        {selectedChat ? (
          <ChatConversationView
            chat={selectedChat}
            messages={messages[selectedChat.id] ?? []}
            onSendMessage={handleSendMessage}
          />
        ) : (
          <ChatInitPage onNewChat={() => setOpen(true)} />
        )}
      </div>

      {/* New Chat Modal */}
      <ChatSarchModal
        open={open}
        onOpenChange={setOpen}
        chats={chats}
        onSelectChat={handleSelectChat}
      />
    </div>
  );
};

export default ChatLayout;