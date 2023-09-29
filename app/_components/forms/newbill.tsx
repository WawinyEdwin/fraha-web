"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function NewBill() {
  const [formData, setFormData] = useState({
    customer: "",
    date: "",
    service: "",
    staff: "",
    quantity: "",
    price: "",
    discount: "",
    total: "",
  });

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSelectChange = (name: string, selectedValue: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: selectedValue,
    }));
  };

  const router = useRouter();

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">quick sale</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <form className="grid grid-cols-2 items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="customer">customer</Label>
              <Input
                id="customer"
                type="tel"
                value={formData.customer}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="date">date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="service">service</Label>
              <Select>
                <SelectTrigger id="service">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem
                    value="Cut"
                    onClick={() => handleSelectChange("service", "Cut")}
                  >
                    Cut
                  </SelectItem>
                  <SelectItem
                    value="braids"
                    onClick={() => handleSelectChange("service", "Braids")}
                  >
                    Braids
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="staff">staff</Label>
              <Select>
                <SelectTrigger id="staff">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="John">John</SelectItem>
                  <SelectItem value="Doe">Doe</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="quantity">quantity</Label>
              <Input
                id="quantity"
                type="number"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price">price</Label>
              <Input
                id="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="discount">discount</Label>
              <Input
                id="discount"
                type="number"
                value={formData.discount}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="total">total</Label>
              <Input
                id="total"
                type="text"
                value={formData.total}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className="col-span-1 p-4 border border-gray-300">
          <h2 className="text-lg font-semibold mb-4 text-center">billing summary</h2>
          <div>
            <p>
              <strong>Customer:</strong> {formData.customer}
            </p>
            <p>
              <strong>Date:</strong> {formData.date}
            </p>
            <p>
              <strong>Service:</strong> {formData.service}
            </p>
            <p>
              <strong>Staff:</strong> {formData.staff}
            </p>
            <p>
              <strong>Quantity:</strong> {formData.quantity}
            </p>
            <p>
              <strong>Price:</strong> {formData.price}
            </p>
            <p>
              <strong>Discount:</strong> {formData.discount}
            </p>
            <p>
              <strong>Total:</strong> {formData.total}
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <Button variant={'outline'} className="mr-4">reset</Button>
            <Button onClick={() => router.push("/checkout")}>checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
