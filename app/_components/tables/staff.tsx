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

export default function Staff() {
  return (
    <div className="container">
      <div className="flex items-center justify-between space-y-2 p-3">
        <h2 className="text-3xl font-bold tracking-tight">staff</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Link href={"/staff/newstaff"}>onboard new staff</Link>
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>name</TableHead>
              <TableHead>phone number</TableHead>
              <TableHead>status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {staff.map((stf) => (
              <TableRow key={stf.id}>
                <TableCell>{stf.name}</TableCell>
                <TableCell>{stf.phone}</TableCell>
                <TableCell className="font-bold">active</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
