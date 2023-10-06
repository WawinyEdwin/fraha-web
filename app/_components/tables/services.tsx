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
import { toast } from "@/components/ui/use-toast";
import { getServices } from "@/lib/axios";
import { IService } from "@/lib/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Services() {
  const [services, setServices] = useState<IService[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getServices();
        const data: IService[] = res?.data;
        setServices(data);
      } catch (error) {
        toast({
          description: "error getting services",
        });
      }
    }
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="flex items-center justify-between space-y-2 p-3">
        <h2 className="text-3xl font-bold tracking-tight">staff</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Link href={"/inventory/services/new"}>add a service</Link>
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>service</TableHead>
              <TableHead>rate</TableHead>
              <TableHead>action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((stf) => (
              <TableRow key={stf.id}>
                <TableCell>{stf.name}</TableCell>
                <TableCell>{stf.rate}</TableCell>
                <TableCell className="font-bold">
                  <Link href={""}></Link>edit
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
