import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function Booking() {
  return (
    <div className="container">
      <h1 className="text-center font-semibold">new booking</h1>
      <form action="">
        <div className="grid grid-cols-2 gap-4 p-2">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="customer">customer</Label>
            <Input type="text" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="date">date</Label>
            <Input type="date" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="">service</Label>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="staff">staff</Label>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="time">start time</Label>
            <Input type="time" id="time" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="status">booking status</Label>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>new appointment</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="noted">notes</Label>
            <Textarea placeholder="Write appointment notes" />
          </div>
        </div>
        <div className="text-center">
          <div className="flex justify-between">
            <Button variant={"outline"}>
              <Link href={"/register"}>cancel</Link>
            </Button>
            <Button>save</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
