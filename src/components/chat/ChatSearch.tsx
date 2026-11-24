"use client";

import { SearchIcon } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ChatSearchProps } from "@/types/chat";



export function ChatSearch({
  value,
  onChange,
  placeholder = "Search...",
}: ChatSearchProps) {
  return (
    <InputGroup className="max-w-sm rounded-full">
      <InputGroupInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />

      <InputGroupAddon>
        <SearchIcon className="text-muted-foreground" />
      </InputGroupAddon>
    </InputGroup>
  );
}