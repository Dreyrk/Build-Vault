import { navitems } from "@/constants";
import NavItem from "./NavItem";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import UserBadge from "./UserBadge";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800">
      <NavItem text="Build Vault" href="/" />
      <div className="hidden md:flex gap-4">
        {navitems.map((item) => (
          <NavItem {...item} key={item.text} />
        ))}
        <UserBadge />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid w-[200px] p-4">
            <div className="place-self-end">
              <UserBadge />
            </div>
            {navitems.map((item) => (
              <NavItem {...item} key={item.text} />
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
