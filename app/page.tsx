import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl text-green-500 font-semibold mb-6">
        Welcome to Fraha Salon & Spa Software
      </h1>
      <p className="text-lg text-gray-800 text-center mb-8">
        Streamline your salon and spa management with our powerful software.
        Effortlessly manage appointments, clients, and more.
      </p>
      <Button>
        <Link href="/register">Get Started</Link>
      </Button>
    </div>
  );
}
