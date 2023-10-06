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
import { loginUser } from "@/lib/axios";
import { useToast } from "@/components/ui/use-toast";

export default function Login() {
  const { toast } = useToast();
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
      const res = await loginUser(formData);
      console.log(res.status);
      
      if (res?.status === 200) {
        localStorage.setItem("access_token", res?.data.session.access_token);
        router.push("/dashboard");
      }
    } catch (error) {
      toast({
        title: "login failed",
        description: "could not log you in",
        variant: 'destructive'
      });
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[450px]">
        <form onSubmit={handleSubmit}>
          <CardHeader className="text-center">
            <CardTitle>login to continue</CardTitle>
            <CardDescription>manage your beauty spa with ease</CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={"/register"}>back to signup</Link>
            <Button type="submit">login</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
