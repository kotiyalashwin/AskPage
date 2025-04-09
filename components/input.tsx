"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function InputForm({
  placeholder,
  label,
  name,
  required,
  onChange,
}: {
  placeholder: string;
  label: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="space-y-2 p-2">
      <Label className="text-gray-300">{label}:</Label>
      <Input placeholder={placeholder} name={name} onChange={onChange} />
    </div>
  );
}
