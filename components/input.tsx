"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function InputForm({
  placeholder,
  label,
  name,
}: {
  placeholder: string;
  label: string;
  name: string;
  onChange?: (value: string) => void;
}) {
  const [value, setValue] = useState("");
  return (
    <div className="space-y-2 p-2">
      <Label className="text-gray-300">{label}:</Label>
      <Input
        placeholder={placeholder}
        name={name}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
