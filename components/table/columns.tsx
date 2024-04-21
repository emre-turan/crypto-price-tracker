"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import { ArrowUpDown } from "lucide-react";

import { Button } from "../ui/button";
import TrackCoin from "./track-coin";

export type CryptoCurrencyPrice = {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
};

export const columns: ColumnDef<CryptoCurrencyPrice>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex items-center space-x-3">
        <Image
          src={row.original.image}
          alt={row.original.name}
          width="20"
          height="20"
        />
        <span>{row.original.name}</span>
      </div>
    ),
  },
  {
    accessorKey: "symbol",
    header: "Symbol",
    cell: ({ row }) => <span>{row.original.symbol.toUpperCase()}</span>,
  },
  {
    accessorKey: "current_price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="size-3.5 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <span>
        {row.original.current_price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </span>
    ),
  },
  {
    header: "",
    id: "actions",
    cell: ({ row }) => {
      return <TrackCoin coinId={row.original.id} />;
    },
  },
];
