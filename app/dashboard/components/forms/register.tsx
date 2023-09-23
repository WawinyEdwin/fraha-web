"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[450px]">
        <CardHeader className="text-center">
          <CardTitle>signup to continue</CardTitle>
          <CardDescription>manage your beauty spa with ease</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">email</Label>
                <Input
                  id="email"
                  placeholder="spa@mail.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            {" "}
            <Link href={"/login"}>back to login</Link>
          </Button>
          <Button>signup</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
