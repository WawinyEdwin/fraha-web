"use client";
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
import React, { useEffect, useState } from "react";
import NewStaff from "../forms/newstaff";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import router from "next/router";
import services from "./services";
import { Label } from "@/components/ui/label";
import { IService, IStaff } from "@/lib/types";
import { getServices, getStaff } from "@/lib/axios";
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Staff() {
  const [services, setServices] = useState<IService[]>([]);
  const [staff, setStaff] = useState<IStaff[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getStaff();
        const data: IStaff[] = res?.data;
        setStaff(data);
      } catch (error) {
        toast({
          description: "error getting staff",
          variant: "destructive",
        });
      }
      try {
        const res = await getServices();
        setServices(res?.data);
      } catch (error) {
        toast({
          description: "error getting services",
          variant: "destructive",
        });
      }
    }
    fetchData();
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="relative">
        <div className="">
          <div className="flex items-center justify-between space-y-2 p-3">
            <h2 className="text-3xl font-bold tracking-tight">staff</h2>
            <div className="flex items-center space-x-2">
              <Button onClick={openModal}>onboard new staff</Button>
            </div>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>name</TableHead>
                  <TableHead>appointment</TableHead>
                  <TableHead>status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {staff.map((stf) => (
                  <TableRow key={stf.id}>
                    <TableCell>{stf.name}</TableCell>
                    <TableCell>enabled</TableCell>
                    <TableCell className="font-bold">active</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal absolute bg-white p-4 rounded">
              <Card className="w-[450px]">
                <CardContent>
                  <form>
                    <div className="grid items-center gap-4 pt-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">staff name</Label>
                        <Input
                          id="email"
                          placeholder="janet doe"
                          type="email"
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="phone">phone number</Label>
                        <Input id="phone" placeholder="+2547.." type="text" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="service">select service</Label>
                        <Select>
                          <SelectTrigger className="" id="service">
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectGroup key={service.id}>
                                <SelectItem value={service.name}>
                                  {service.name}
                                </SelectItem>
                              </SelectGroup>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="start_date">start date</Label>
                        <Input id="start_date" type="date" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="work_schedule">work schedule</Label>
                        <Select>
                          <SelectTrigger className="" id="work_schedule">
                            <SelectValue placeholder="work schedule" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="Mon-Fri">Mon-Fri</SelectItem>
                              <SelectItem value="Sat-Sun">Sat-Sun</SelectItem>
                              <SelectItem value="All-Days">All-Days</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant={"outline"} onClick={closeModal}>
                    <Link href={"/staff"}>cancel</Link>
                  </Button>
                  <Button onClick={() => router.push("/dashboard")}>
                    save
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
