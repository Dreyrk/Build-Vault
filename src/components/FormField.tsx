import { FormFieldProps } from "@/types/props";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function FormField({ label, id, placeholder, required, type, disabled }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} placeholder={placeholder} required={required} disabled={disabled} type={type} />
    </div>
  );
}
