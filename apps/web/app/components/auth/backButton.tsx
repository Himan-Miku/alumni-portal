"use client";

import { Button } from "shadcn/ui/button";
import Link from "next/link";

interface backButtonProps {
  label: string;
  href: string;
}
export const BackButton = ({ href, label }: backButtonProps) => {
  return (
    <Button variant="link" className="w-full font-normal" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
