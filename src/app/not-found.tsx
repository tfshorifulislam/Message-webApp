
import Link from "next/link";
import { ArrowLeft, MessageCircle, Search } from "lucide-react";

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-5 py-16">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-lg flex-col items-center text-center">
        {/* Illustration */}
        <div className="relative mb-8 flex h-44 w-44 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-border/70" />
          <div className="absolute inset-4 rounded-full border border-dashed border-primary/20" />

          <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-border bg-card shadow-xl shadow-primary/5">
            <MessageCircle
              className="h-11 w-11 text-primary"
              strokeWidth={1.5}
            />

            <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-primary text-xs font-bold text-primary-foreground">
              ?
            </span>
          </div>

          <div className="absolute right-2 top-5 flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card shadow-sm">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>

          <div className="absolute bottom-5 left-1 flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
            <span className="h-2 w-2 rounded-full bg-primary" />
          </div>
        </div>

        {/* Error Code */}
        <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-primary">
          ERROR 404
        </p>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Page not found
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground sm:text-base">
          Oops! The page you're looking for doesn't exist or may have been
          moved. Let's get you back to your conversations.
        </p>

        {/* Actions */}
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
          >
            <MessageCircle className="h-4 w-4" />
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>

        {/* Footer */}
        <p className="mt-12 text-xs text-muted-foreground">
          Lost in the conversation? It happens.
        </p>
      </div>
    </main>
  );
};

export default NotFound;
