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

export default function Bills() {
  const bills = [
    {
      id: 1,
      phone_number: "0712-345-678",
      service: "Haircut",
      staff: "John",
      quantity: 1,
      price: 1000.0,
      discount: 100.0,
      total: 900.0,
      date: "2023-09-25",
    },
    {
      id: 2,
      phone_number: "0721-987-654",
      service: "Manicure",
      staff: "Jane",
      quantity: 2,
      price: 800.0,
      discount: 0.0,
      total: 1600.0,
      date: "2023-09-26",
    },
    {
      id: 3,
      phone_number: "0733-555-555",
      service: "Massage",
      staff: "Grace",
      quantity: 1,
      price: 1500.0,
      discount: 200.0,
      total: 1300.0,
      date: "2023-09-27",
    },
    // Add more entries as needed
  ];

  return (
    <div className="container">
      <div className="flex items-center justify-between space-y-2 pb-2">
        <h2 className="text-3xl font-bold tracking-tight">cash register</h2>
        <div className="flex items-center space-x-2">
          <Link href={"/dashboard/cashregister/newbill"}>
            <Button>add bill</Button>
          </Link>
        </div>
      </div>

      <div className="">
        <div className="rounded-md border">
          <Table>
            <TableCaption>a list of your recent bills.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>phone number</TableHead>
                <TableHead>service</TableHead>
                <TableHead>staff</TableHead>
                <TableHead>quantity</TableHead>
                <TableHead>price</TableHead>
                <TableHead>discount</TableHead>
                <TableHead>total</TableHead>
                <TableHead>date</TableHead>
                <TableHead className="text-right">action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bills.map((bill) => (
                <TableRow key={bill.id}>
                  <TableCell className="font-medium">
                    {bill.phone_number}
                  </TableCell>
                  <TableCell>{bill.service}</TableCell>
                  <TableCell>{bill.staff}</TableCell>
                  <TableCell>{bill.quantity}</TableCell>
                  <TableCell>{bill.price}</TableCell>
                  <TableCell>{bill.discount}</TableCell>
                  <TableCell>{bill.total}</TableCell>
                  <TableCell>{bill.date}</TableCell>
                  <TableCell className="text-right">view</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
