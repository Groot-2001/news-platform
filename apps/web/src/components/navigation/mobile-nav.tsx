"use client";

import {useState} from "react";

import {MobileNavDrawer} from "./mobile-nav-drawer";
import {Category} from "@news/types";

interface Props {
  categories: Category[];
}

export function MobileNav({categories}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden"
        aria-label="Open Menu"
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>

      <MobileNavDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        categories={categories}
      />
    </>
  );
}
