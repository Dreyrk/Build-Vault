import { InputProps } from "@/components/ui/input";

export type NavItemProps = {
  text: string;
  href: string;
  logo?: React.ReactNode;
};

export interface FormFieldProps extends InputProps {
  label: string;
}

export type AuthFormProps = {
  title: string;
  desc: string;
  fields: FormFieldProps[];
  handleSubmit: () => void;
};
