import React,{ ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export function Card({
  children,
}: CardProps) {
  return (
    <div className="rounded-lg border p-4">
      {children}
    </div>
  );
}