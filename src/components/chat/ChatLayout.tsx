
"use client";

import { useState } from "react";
import ChatRightPannel from "./ChatRightPannel";
import ChatInitPage from "./ChatInitPage";
import ChatSarchModal from "./ChatSarchModal";

const ChatLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto flex h-screen max-w-7xl border">
      <ChatRightPannel
        onNewChat={() => setOpen(true)}
      />

      <div className="flex min-w-0 flex-1 items-center justify-center">
        <ChatInitPage
          onNewChat={() => setOpen(true)}
        />
      </div>

      <ChatSarchModal
        open={open}
        onOpenChange={setOpen}
      />
    </div>
  );
};

export default ChatLayout;
