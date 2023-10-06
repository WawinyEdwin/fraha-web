"use client";
import { useEffect, useState } from "react";
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
import { IService, IStaff } from "@/lib/types";
import { getServices, getStaff } from "@/lib/axios";
import { toast } from "@/components/ui/use-toast";

export default function NewBill() {
  const router = useRouter();
  const [services, setServices] = useState<IService[]>([]);
  const [staff, setStaff] = useState<IStaff[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getStaff();
        const data: IStaff[] = res?.data;
        setStaff(data);
      } catch (error) {
        toast({
          description: "error getting staff",
          variant: "destructive",
        });
      }
      try {
        const res = await getServices();
        const data: IService[] = res?.data;
        setServices(data);
      } catch (error) {
        toast({
          description: "error getting services",
          variant: "destructive",
        });
      }
    }
    fetchData();
  }, []);
  const [formData, setFormData] = useState({
    customer: "",
    date: "",
    service: "",
    staff: "",
    quantity: 0,
    price: 0.0,
    discount: 0,
    cash: 0,
    card: 0,
  });
  const today_date = new Date().toDateString();
  const subTotal = formData.quantity * formData.price;
  const total = subTotal;
  const grandTotal = subTotal - formData.discount / 100;
  const payable = formData.card + formData.cash;
  const change = payable - grandTotal;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">quick sale</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <form
            className="grid grid-cols-2 items-center gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="customer">customer</Label>
              <Input
                id="customer"
                type="tel"
                list="customer-list"
                value={formData.customer}
                onChange={handleChange}
              />
              <datalist id="customer-list">
                <option value="+254759701314" />
              </datalist>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="date">date</Label>
              <p className="font-bold">{today_date}</p>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="service">service</Label>
              <Select>
                <SelectTrigger id="service">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                {services ? (
                  <SelectContent position="popper">
                    {services.map((sv) => (
                      <SelectItem key={sv.id} value={sv.id}>
                        {sv.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                ) : (
                  <></>
                )}
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="staff">staff</Label>
              <Select>
                <SelectTrigger id="staff">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                {staff.length > 0 ? (
                  <SelectContent position="popper">
                    {staff.map((stf) => (
                      <SelectItem value={stf.id} key={stf.id}>
                        {stf.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                ) : (
                  <>
                    <SelectContent position="popper">
                      <Link href={"/staff/new"}>
                        <Button>add staff</Button>
                      </Link>
                    </SelectContent>
                  </>
                )}
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="quantity">quantity </Label>
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
              <Label htmlFor="discount">
                discount <span>%</span>
              </Label>
              <Input
                id="discount"
                type="number"
                value={formData.discount}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="total">total</Label>
              <p className="font-bold">{total}</p>
            </div>
          </form>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-center">Receipt</h2>
          <div className="mb-4">
            <p>
              <strong>Customer:</strong> {formData.customer}
            </p>
            <p>
              <strong>Service:</strong> {formData.service}
            </p>
          </div>
          <div className="border-t border-b border-gray-300 py-2">
            <div className="flex justify-between pb-2">
              <p>
                <strong>Sub Total:</strong>
              </p>
              <p>KES {subTotal}</p>
            </div>
            <div className="flex justify-between pb-2">
              <p>
                <strong>Grand Total:</strong>
              </p>
              <p>KES {grandTotal}</p>
            </div>
            <div className="flex justify-between pb-2">
              <p>
                <strong>Change:</strong>
              </p>
              <p>KES {change}</p>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Payment Method</h2>
            <div className="flex justify-between pb-2">
              <p>
                <strong>Cash:</strong>
              </p>
              <Input
                type="number"
                id="cash"
                className="px-2 py-1 rounded w-1/2"
                placeholder="enter cash amount"
                onChange={handleChange}
                value={formData.cash}
              />
            </div>
            <div className="flex justify-between">
              <p>
                <strong>Card:</strong>
              </p>
              <Input
                type="number"
                id="card"
                className="px-2 py-1 rounded w-1/2"
                placeholder="enter card amount"
                onChange={handleChange}
                value={formData.card}
              />
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <Button variant={"outline"} className=" px-4 py-2  rounded mr-4">
              Reset
            </Button>
            <Button
              className=" px-4 py-2 rounded"
              type="submit"
              onClick={() => router.push("/checkout")}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
