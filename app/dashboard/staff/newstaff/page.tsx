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
import React from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="container ">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>looks like your team is growing</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">staff name</Label>
                <Input id="email" placeholder="janet doe" type="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">phone number</Label>
                <Input id="phone" placeholder="+2547.." type="text" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="role">job role</Label>
                <Input id="role" type="text" placeholder="barber" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="start_date">start date</Label>
                <Input id="start_date" type="date" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="shift_hours">shift hours</Label>
                <Input id="shift_hours" type="text" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant={"outline"}>
            <Link href={"/register"}>cancel</Link>
          </Button>
          <Button onClick={() => router.push("/dashboard")}>add</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
