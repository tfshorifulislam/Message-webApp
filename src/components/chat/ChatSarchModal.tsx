"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { ChatSearch } from "./ChatSearch";
import type { Chat, ChatSarchModalProps } from "@/types/chat";
import { useState } from "react";



const ChatSarchModal = ({
  open,
  onOpenChange,
  chats,
  onSelectChat,
}: ChatSarchModalProps) => {
  const [search, setSearch] = useState("");

  const filteredChats = chats.filter((chat) => {
    const query = search.toLowerCase().trim();

    return (
      chat.name.toLowerCase().includes(query) ||
      chat.username.toLowerCase().includes(query)
    );
  });

  const handleSelect = (chat: Chat) => {
    onSelectChat(chat);
    setSearch("");
    onOpenChange(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        onOpenChange(value);

        if (!value) {
          setSearch("");
        }
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Chat</DialogTitle>

          <DialogDescription>
            Search for a user to start a conversation.
          </DialogDescription>
        </DialogHeader>

        <ChatSearch
          value={search}
          onChange={setSearch}
          placeholder="Search by name or username..."
        />

        <div className="flex max-h-80 flex-col gap-1 overflow-y-auto">
          {filteredChats.length > 0 ? (
            filteredChats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => handleSelect(chat)}
                className="flex items-center gap-3 rounded-lg p-3 text-left transition-colors hover:bg-muted"
              >
                <Avatar className="size-10">
                  <AvatarImage src={chat.avatar} alt={chat.name} />
                  <AvatarFallback>
                    {chat.name.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">
                    {chat.name}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {chat.username}
                  </p>
                </div>
              </button>
            ))
          ) : (
            <p className="py-8 text-center text-sm text-muted-foreground">
              No users found.
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatSarchModal;