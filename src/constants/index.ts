import { NavItem } from "@/types";
import { FormFieldProps } from "@/types/props";

export const navitems: NavItem[] = [
  {
    href: "/test",
    text: "test",
  },
  {
    href: "/test",
    text: "test",
  },
  {
    href: "/test",
    text: "test",
  },
  {
    href: "/test",
    text: "test",
  },
  {
    href: "/test",
    text: "test",
  },
];

export const loginFields: FormFieldProps[] = [
  {
    label: "E-mail",
    type: "email",
    id: "login-email",
    placeholder: "exemple@email.com",
    required: true,
  },
  {
    label: "Password",
    type: "password",
    id: "login-password",
    placeholder: "********",
    required: true,
  },
];
