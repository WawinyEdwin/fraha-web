import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function Booking() {
  // Dummy booking data
  const bookings = [
    {
      id: 1,
      service: "Haircut",
      date: "2023-09-30",
      phone_number: "123-456-7890",
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
      phone_number: "987-654-3210",
      frequency: "Weekly",
      staff: "Nail Technician B",
      time: "3:00 PM",
      status: "Pending",
      notes: "Client prefers red nail polish.",
    },
    // Add more dummy data as needed
  ];

  return (
    <div className="container">
      <div className="flex items-center justify-between space-y-2 pb-2">
        <h2 className="text-3xl font-bold tracking-tight">appoitments</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Link href={"/dashboard/bookings/newbooking"}>
              record customer booking
            </Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {bookings.map((booking) => (
          <Card
            key={booking.id}
            className="border rounded-md overflow-hidden shadow-lg"
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold">{booking.service}</h3>
              <p className="text-gray-600">{booking.date}</p>
              <p className="mt-2">Phone Number: {booking.phone_number}</p>
              <p>Frequency: {booking.frequency}</p>
              <p>Staff: {booking.staff}</p>
              <p>Time: {booking.time}</p>
              <p>Booking Status: {booking.status}</p>
              <p>Notes: {booking.notes}</p>
              <div className="mt-4">
                <Link href={`/dashboard/bookings/${booking.id}`}>
                  <Button >View Details</Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
