import { NavItemProps } from "@/types/props";
import Link from "next/link";

export default function NavItem({ href, text, logo }: NavItemProps) {
  return (
    <Link className="text-lg font-medium hover:underline underline-offset-4" href={href}>
      {logo}
      {text}
    </Link>
  );
}
