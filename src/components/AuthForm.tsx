import { AuthFormProps, FormFieldProps } from "@/types/props";
import FormField from "./FormField";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function AuthForm({ title, desc, fields, handleSubmit }: AuthFormProps) {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {fields.map((field: FormFieldProps) => (
            <FormField key={field.id} {...field} />
          ))}
          <Button className="w-full" type="submit">
            Login
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
