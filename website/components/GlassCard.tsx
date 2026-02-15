import { ReactNode } from "react";

export default function GlassCard({
  children,
  className = "",
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`glass-card ${hover ? "glass-card-hover" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
