import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex flex-1 justify-end gap-3">
      <nav className="hidden md:flex gap-1">
        <ModeToggle />
        <Button asChild variant="ghost" className="btn btn-hover flexBtn">
          <Link href="/cart" className="link-dark">
            <ShoppingCart />
            &nbsp;Cart
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className="btn bg-dark btn-signin flexBtn"
        >
          <Link href="/sign-in" className="link-dark">
            <UserIcon />
            &nbsp;Sign&nbsp;In
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent side="right" className="sheet-content-custom">
            <SheetTitle className="mb-5 text-lg font-bold">Menu</SheetTitle>

            <ModeToggle />

            <Button
              asChild
              variant="ghost"
              className="btn btn-hover flexBtn mt-4 "
            >
              <Link href="/cart" className=" link-dark cart-link">
                <ShoppingCart />
                &nbsp;Cart
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="btn btn-hover flexBtn mt-4 "
            >
              <Link href="/sign-in" className=" link-dark sign-link">
                <UserIcon />
                &nbsp;Sign&nbsp;In
              </Link>
            </Button>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
