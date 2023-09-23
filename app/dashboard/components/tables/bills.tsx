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
  const bills = [];
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
