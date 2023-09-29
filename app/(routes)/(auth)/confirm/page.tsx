import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
    
          <div className="p-3 items-center">
            <p>
              We just sent an email to verify your email address. Check your
              inbox for instructions
            </p>
            <Link href="/login">try to login</Link>
          </div>
    </div>
  );
}
