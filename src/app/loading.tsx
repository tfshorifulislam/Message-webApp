
import { MessageCircle } from "lucide-react";

const Loading = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="flex flex-col items-center text-center">
        {/* Animated Logo */}
        <div className="relative mb-7 flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-3xl bg-primary/10 [animation-duration:2s]" />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-primary/10 bg-primary/5">
            <MessageCircle
              className="h-9 w-9 text-primary"
              strokeWidth={1.7}
            />
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-base font-semibold tracking-tight text-foreground">
          Getting things ready
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Please wait while we prepare your conversations.
        </p>

        {/* Loading Indicator */}
        <div className="mt-7 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:0ms]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:150ms]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:300ms]" />
        </div>
      </div>
    </main>
  );
};

export default Loading;
