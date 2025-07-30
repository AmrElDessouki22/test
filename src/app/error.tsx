"use client";

import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <h1 className="text-2xl font-bold">Something went wrong!</h1>
        <p>{error.message}</p>
        <button onClick={reset} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Try again
        </button>
      </div>
    </div>
  );
}
