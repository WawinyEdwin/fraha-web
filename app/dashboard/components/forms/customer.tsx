"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Customer() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    mobileNumber: "",
    customerId: "",
    dateOfBirth: "",
    address: "",
    firstName: "",
    lastName: "",
    email: "",
    source: "",
    gender: "",
    location: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", formData); // Use Axios for POST request

      if (response.status === 200) {
        // Authentication successful, redirect to the dashboard
        router.push("/dashboard");
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
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        customer details
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="mobileNumber">Mobile Number</Label>
              <Input
                type="text"
                id="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
              <Label htmlFor="customerId">customer id</Label>
              <Input
                type="text"
                id="customerId"
                value={formData.customerId}
                onChange={handleChange}
                required
              />
              <Label htmlFor="dateOfBirth">d.o.b</Label>
              <Input
                type="date"
                id="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
              <Label htmlFor="address">address</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="firstName">first name</Label>
              <Input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <Label htmlFor="email">email</Label>
              <Input
                type="text"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Label htmlFor="source">source</Label>
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
              <Label htmlFor="notes">customer notes</Label>
              <Textarea
                value={formData.notes}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="lastName">last name</Label>
              <Input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <Label htmlFor="gender">gender</Label>
              <RadioGroup defaultValue="male" id="gender">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">male</Label>
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">female</Label>
                </div>
              </RadioGroup>
              <Label htmlFor="location">location</Label>
              <Input
                type="text"
                id="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <Button className=" mr-4" variant={"outline"}>
            cancel
          </Button>
          <Button>save</Button>
        </div>
      </form>
    </div>
  );
}
