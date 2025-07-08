// app/error.tsx
"use client";

import { AlertTriangle, RefreshCcw } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("❌ Błąd komponentu:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="text-error">
          <AlertTriangle className="w-16 h-16 mx-auto" />
        </div>
        <h1 className="text-4xl font-bold">Coś poszło nie tak</h1>
        <p className="text-base-content text-opacity-80">
          Wystąpił nieoczekiwany błąd. Spróbuj ponownie za chwilę.
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={() => reset()} className="btn btn-warning">
            <RefreshCcw className="w-4 h-4 mr-2" />
            Spróbuj ponownie
          </button>
          <a href="/" className="btn btn-outline">
            Wróć do strony głównej
          </a>
        </div>
      </div>
    </div>
  );
}
