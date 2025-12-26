"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex h-[4.5rem] items-center justify-between border-b border-[#E0E0E5] bg-transparent px-6 md:px-12 lg:px-20">
      <Link
        href="/"
        className="flex items-center gap-2 text-2xl font-bold text-[#2D1B4E]"
      >
        <div className="h-5 w-5 rounded bg-[#4A7CFF]" />
        Operate
      </Link>

      <div className="hidden items-center gap-8 md:flex">
        <Link
          href="/solutions"
          className="text-[0.9375rem] font-medium text-[#5A5A6B] transition-colors hover:text-[#2D1B4E]"
        >
          Solutions
        </Link>
        <Link
          href="/case-studies"
          className="text-[0.9375rem] font-medium text-[#5A5A6B] transition-colors hover:text-[#2D1B4E]"
        >
          Success Stories
        </Link>
        <Link
          href="/resources"
          className="text-[0.9375rem] font-medium text-[#5A5A6B] transition-colors hover:text-[#2D1B4E]"
        >
          Resources
        </Link>
        <Link
          href="/pricing"
          className="text-[0.9375rem] font-medium text-[#5A5A6B] transition-colors hover:text-[#2D1B4E]"
        >
          Pricing
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Button
          className="hidden bg-[#4A7CFF] text-white hover:bg-[#3D6BFF] md:flex"
          size="default"
        >
          Schedule Demo <ArrowRight className="ml-1 h-4 w-4" />
        </Button>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 text-xl font-bold text-[#2D1B4E]">
                <div className="h-5 w-5 rounded bg-[#4A7CFF]" />
                Operate
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-4">
              <Link
                href="/solutions"
                className="text-base font-medium text-[#5A5A6B] transition-colors hover:text-[#2D1B4E]"
                onClick={() => setOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/case-studies"
                className="text-base font-medium text-[#5A5A6B] transition-colors hover:text-[#2D1B4E]"
                onClick={() => setOpen(false)}
              >
                Success Stories
              </Link>
              <Link
                href="/resources"
                className="text-base font-medium text-[#5A5A6B] transition-colors hover:text-[#2D1B4E]"
                onClick={() => setOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/pricing"
                className="text-base font-medium text-[#5A5A6B] transition-colors hover:text-[#2D1B4E]"
                onClick={() => setOpen(false)}
              >
                Pricing
              </Link>
              <Button
                className="mt-4 w-full bg-[#4A7CFF] text-white hover:bg-[#3D6BFF]"
                onClick={() => setOpen(false)}
              >
                Schedule Demo <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

