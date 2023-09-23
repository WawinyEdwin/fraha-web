import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import React from "react";

const staff = [
  {
    id: 1,
    name: "John Dow",
    phone: "94949949",
    role: "barber",
    start_date: "23-11-2002",
    shift_hours: "7hrs",
  },
  {
    id: 2,
    name: "John Dow",
    phone: "94949949",
    role: "barber",
    start_date: "23-11-2002",
    shift_hours: "7hrs",
  },
];

export default function Page() {
  return (
    <div className="container">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">staff</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Link href={"/dashboard/staff/newstaff"}>new staff</Link>
          </Button>
        </div>
      </div>

      <Table>
        <TableCaption>staff members</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">name</TableHead>
            <TableHead>phone number</TableHead>
            <TableHead>role</TableHead>
            <TableHead className="text-right">shift hours</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {staff.map((stf) => (
            <TableRow key={stf.id}>
              <TableCell className="font-medium">{stf.name}</TableCell>
              <TableCell>{stf.phone}</TableCell>
              <TableCell>{stf.role}</TableCell>
              <TableCell className="text-right">{stf.shift_hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
