"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const cryptocurrencies = [
  { value: "bitcoin", label: "Bitcoin" },
  { value: "ethereum", label: "Ethereum" },
  { value: "tether", label: "Tether" },
  { value: "solana", label: "Solana" },
  { value: "ripple", label: "Ripple" },
  { value: "cardano", label: "Cardano" },
  { value: "litecoin", label: "Litecoin" },
];

export function SelectCoin({
  defaultCoin,
  onSelect,
}: {
  defaultCoin: string;
  onSelect: (value: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultCoin);

  React.useEffect(() => {
    onSelect(defaultCoin);
  }, [defaultCoin, onSelect]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {cryptocurrencies.find((coin) => coin.value === value)?.label}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search coin..." />
            <CommandEmpty>No coin found.</CommandEmpty>
            <CommandGroup>
              {cryptocurrencies.map((coin) => (
                <CommandItem
                  key={coin.value}
                  value={coin.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    onSelect(currentValue);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === coin.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {coin.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
