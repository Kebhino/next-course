// app/not-found.tsx
"use client";

import Link from "next/link";
import { Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 text-center px-4">
      <div className="max-w-md space-y-6">
        <div className="text-primary">
          <Ghost className="w-16 h-16 mx-auto" />
        </div>
        <h1 className="text-4xl font-bold">404 – Nie znaleziono strony</h1>
        <p className="text-base-content text-opacity-80">
          Ups! Wygląda na to, że ta strona nie istnieje albo została
          przeniesiona.
        </p>
        <Link href="/">
          <button className="btn btn-primary btn-wide">
            Wróć do strony głównej
          </button>
        </Link>
      </div>
    </div>
  );
}
