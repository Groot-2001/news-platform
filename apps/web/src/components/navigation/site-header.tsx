import {Container} from "@/components/layout";
import {DesktopNav} from "./desktop-nav";
import {MobileNav} from "./mobile-nav";
import {SiteLogo} from "./site-logo";
import Link from "next/link";
import { getCategories } from "@/features/categories/services/category-queries";

export async function SiteHeader() {
  const categories =
    await getCategories();
  return (
    <header className="border-b">
      <Container>
        <div
          className="
            flex
            h-16
            items-center
            justify-between
          "
        >
          <MobileNav categories={categories}/>

          <SiteLogo />

          <Link href="/search" aria-label="Search"> 🔍 </Link>
        </div>

        <div className="hidden md:block pb-4">
          <DesktopNav categories={categories} />
        </div>
      </Container>
    </header>
  );
}
