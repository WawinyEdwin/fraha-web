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
 const customers = [
   {
     id: 1,
     phone_number: "0712-345-678",
     name: "John Doe",
     location: "Nairobi",
     gender: "Male",
     source: "Referral",
   },
   {
     id: 2,
     phone_number: "0721-987-654",
     name: "Jane Smith",
     location: "Mombasa",
     gender: "Female",
     source: "Online Booking",
   },
   {
     id: 3,
     phone_number: "0733-555-555",
     name: "Grace Williams",
     location: "Kisumu",
     gender: "Female",
     source: "Walk-in",
   },
 ];

  return (
    <div className="container">
      <div className="flex items-center justify-between space-y-2 p-3">
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
              <TableHead>location</TableHead>
              <TableHead>gender</TableHead>
              <TableHead>source</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">
                  {booking.phone_number}
                </TableCell>
                <TableCell>{booking.name}</TableCell>
                <TableCell>{booking.location}</TableCell>
                <TableCell>{booking.gender}</TableCell>
                <TableHead>{booking.source}</TableHead>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
