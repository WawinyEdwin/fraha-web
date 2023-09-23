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

export default function Customers() {
  const customers = [];
  return (
    <div className="container">
      <div className="flex items-center justify-between space-y-2 pb-2">
        <h2 className="text-3xl font-bold tracking-tight">customers</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Link href={"/dashboard/customers/newcustomer"}>
              register new customer
            </Link>
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableCaption>a list of your recent customers.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>phone number</TableHead>
              <TableHead>name</TableHead>
              <TableHead>id_number</TableHead>
              <TableHead>email</TableHead>
              <TableHead>birthday</TableHead>
              <TableHead>anniversary</TableHead>
              <TableHead>location</TableHead>
              <TableHead>gender</TableHead>
              <TableHead>source</TableHead>
              <TableHead className="text-right">action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">
                  {booking.phone_number}
                </TableCell>
                <TableCell>{booking.name}</TableCell>
                <TableCell>{booking.id_number}</TableCell>
                <TableCell>{booking.email}</TableCell>
                <TableCell>{booking.birthday}</TableCell>
                <TableCell>{booking.anniversary}</TableCell>
                <TableCell>{booking.location}</TableCell>
                <TableCell>{booking.gender}</TableCell>
                <TableHead>{booking.source}</TableHead>
                <TableCell className="text-right">view</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
