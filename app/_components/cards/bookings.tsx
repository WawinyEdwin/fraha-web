"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React, { useState } from "react";

export default function Booking() {
  const bookings = [
    {
      id: 1,
      service: "Haircut",
      date: "2023-09-30",
      phone_number: "123-456-7890",
      customer_name: "Avril",
      frequency: "One-time",
      staff: "Stylist A",
      time: "10:00 AM",
      status: "Confirmed",
      notes: "Special request: Layered cut",
    },
    {
      id: 2,
      service: "Manicure",
      date: "2023-10-05",
      customer_name: "Audrey",
      phone_number: "987-654-3210",
      frequency: "Weekly",
      staff: "Nail Technician B",
      time: "3:00 PM",
      status: "Pending",
      notes: "Client prefers red nail polish.",
    },
    {
      id: 3,
      service: "Haircut",
      date: "2023-09-30",
      phone_number: "123-456-7890",
      customer_name: "Avril",
      frequency: "One-time",
      staff: "Stylist A",
      time: "10:00 AM",
      status: "Confirmed",
      notes: "Special request: Layered cut",
    },
    {
      id: 4,
      service: "Manicure",
      date: "2023-10-05",
      customer_name: "Audrey",
      phone_number: "987-654-3210",
      frequency: "Weekly",
      staff: "Nail Technician B",
      time: "3:00 PM",
      status: "Pending",
      notes: "Client prefers red nail polish.",
    },
  ];

  const bookingConditions = [
    {
      id: 1,
      name: "completed",
    },
    {
      id: 2,
      name: "arrived",
    },
    {
      id: 3,
      name: "started",
    },
    {
      id: 4,
      name: "no show",
    },
    {
      id: 5,
      name: "new",
    },
  ];
  const [dropdownStatus, setDropdownStatus] = useState("Completed");

  return (
    <div className="container">
      <div className="flex items-center justify-between space-y-2 pb-2">
        <div className="flex items-center space-x-2">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            appointments list
          </h2>
        </div>
      </div>
      <div className="flex justify-between pb-4">
        <Button>recent bookings</Button>
        <Button>
          <Link href={"/bookings/newbooking"}>new appointment + </Link>
        </Button>
      </div>
      <div className="space-y-4">
        {bookings.map((booking) => (
          <Card
            key={booking.id}
            className="border rounded overflow-hidden shadow md:w-auto"
          >
            <div className="p-4 space-y-2">
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-semibold">{booking.service}</h3>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-calendar-days"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
                <p className="text-gray-600">{booking.date}</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <p className="text-gray-600">{booking.phone_number}</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-user"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <p className="text-gray-600">
                  Customer: {booking.customer_name}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-clock-3"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16.5 12" />
                </svg>
                <p className="text-gray-600">{booking.time}</p>
              </div>
              <Separator />
              <div className="mt-4 flex justify-end ">
                <Link href={`/bookings/${booking.id}`}>
                  <Button className="mr-2" variant={"outline"}>
                    view details
                  </Button>
                </Link>
                <Button className="mr-2">{booking.status}</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
