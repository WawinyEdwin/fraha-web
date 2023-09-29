"use client";
import React, { useState } from "react";
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
import axios from "axios";

export default function Booking() {
  const [formData, setFormData] = useState({
    customer: "",
    date: "",
    status: "",
    notes: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", formData); // Use Axios for POST request

      if (response.status === 200) {
        // Authentication successful, redirect to the dashboard
      } else {
        // Authentication failed, handle error (e.g., display error message)
        console.error("Login failed");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("An error occurred:", error);
    }
  };
  return (
    <div className="container">
      <div className="p-3">
        <h1 className="text-3xl font-bold text-center">new booking</h1>
        <form action="">
          <div className="grid grid-cols-2 gap-4 p-2">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="customer">customer</Label>
              <Input
                type="text"
                value={formData.customer}
                onChange={handleChange}
                required

              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="date">date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="service">service</Label>
              <Select>
                <SelectTrigger className="" id="service">
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
                <SelectTrigger className="" id="staff">
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
              <Input
                type="time"
                id="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="status">booking status</Label>
              <Select>
                <SelectTrigger className="" id="status">
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
              <Label htmlFor="notes">notes</Label>
              <Textarea placeholder="Write appointment notes" id="notes" />
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
    </div>
  );
}
