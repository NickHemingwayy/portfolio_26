"use client";

import { useState } from "react";
import { Check, Clipboard, LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

interface ContactCardProps {
  label: string;
  value: string;
  href: string;
  Icon?: LucideIcon;
}

export const ContactCard = ({ label, value, href, Icon }: ContactCardProps) => {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="border rounded-lg p-10 flex flex-col justify-center relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 cursor-pointer text-muted-foreground"
        onClick={onCopy}
      >
        {copied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Clipboard className="h-4 w-4" />
        )}
      </Button>
      <span className="text-muted-foreground mb-2">{label}</span>
      <Link href={href} className="font-bold text-accent break-words">
        {value}
      </Link>
    </div>
  );
};
