"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getServices } from "@/lib/axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IService } from "../../../lib/types";
import { toast } from "@/components/ui/use-toast";

export default function NewStaff() {
  const [services, setServices] = useState<IService[]>([]);
  const router = useRouter();
  useEffect(() => {
    async function fetchData() {
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
  return (
    <div className=" flex  justify-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>looks like your team is growing</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">staff name</Label>
                <Input id="email" placeholder="janet doe" type="email" />
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
          <Button variant={"outline"}>
            <Link href={"/staff"}>cancel</Link>
          </Button>
          <Button onClick={() => router.push("/dashboard")}>save</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
