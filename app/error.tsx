"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">משהו השתבש!</h2>
        <p className="text-muted-foreground">אירעה שגיאה בטעינת הדף</p>
        <Button onClick={() => reset()}>נסה שוב</Button>
      </div>
    </div>
  );
}
