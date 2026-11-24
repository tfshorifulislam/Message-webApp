import type { Message } from "@/types/chat";
import { dummyChats } from "./dummy-chats";

const createMessage = (
  id: string,
  conversationId: string,
  senderId: string,
  content: string,
  createdAt: string,
  status: Message["status"],
): Message => ({
  id,
  conversationId,
  senderId,
  content,
  createdAt,
  status,
});

export const dummyMessages: Record<string, Message[]> = Object.fromEntries(
  dummyChats.map((chat) => {
    const lastMessageIsMine = chat.lastMessage.startsWith("You: ");

    const lastMessage = lastMessageIsMine
      ? chat.lastMessage.replace("You: ", "")
      : chat.lastMessage;

    return [
      chat.id,
      [
        createMessage(
          `${chat.id}-1`,
          chat.id,
          chat.id,
          "Hey! How are you doing?",
          "2026-11-25T09:00:00+06:00",
          "read",
        ),
        createMessage(
          `${chat.id}-2`,
          chat.id,
          lastMessageIsMine ? "me" : chat.id,
          lastMessage,
          "2026-11-25T09:05:00+06:00",
          lastMessageIsMine ? "read" : "delivered",
        ),
      ],
    ];
  }),
);