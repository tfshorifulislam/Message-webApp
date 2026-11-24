export type Chat = {
  id: string;
  name: string;
  username: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  online: boolean;
  pinned: boolean;
};

export type Message = {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  createdAt: string;
  status: "sending" | "sent" | "delivered" | "read";
};

export type SendMessageInput = {
  conversationId: string;
  content: string;
};

export type RightPannelProps = {
  onNewChat: () => void;
  onSelectChat: (chat: Chat) => void;
  selectedChatId: string | null;
  chats: Chat[];
  searchQuery: string;
  onSearchChange: (value: string) => void;
};


export type ChatConversationListProps = {
  chats: Chat[];
  onSelectChat: (chat: Chat) => void;
  selectedChatId: string | null;
};

export type ChatConversationViewProps = {
  chat: Chat;
  messages: Message[];
  onSendMessage: (content: string) => void;
};

export type ChatMessageInputProps = {
  onSend: (message: string) => void;
};

export type ChatMessageListProps = {
  messages: Message[];
};

export type ChatSarchModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  chats: Chat[];
  onSelectChat: (chat: Chat) => void;
}

export type ChatSearchProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export type SearchModal = {
  onNewChat: () => void;
}