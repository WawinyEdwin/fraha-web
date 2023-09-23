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
     id_number: "12345678",
     email: "johndoe@example.com",
     birthday: "1990-05-15",
     anniversary: "2023-08-25",
     location: "Nairobi",
     gender: "Male",
     source: "Referral",
   },
   {
     id: 2,
     phone_number: "0721-987-654",
     name: "Jane Smith",
     id_number: "87654321",
     email: "janesmith@example.com",
     birthday: "1985-11-10",
     anniversary: "2023-09-30",
     location: "Mombasa",
     gender: "Female",
     source: "Online Booking",
   },
   {
     id: 3,
     phone_number: "0733-555-555",
     name: "Grace Williams",
     id_number: "98765432",
     email: "grace@example.com",
     birthday: "1992-03-25",
     anniversary: "2023-07-12",
     location: "Kisumu",
     gender: "Female",
     source: "Walk-in",
   },
   // Add more entries as needed
 ];

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
