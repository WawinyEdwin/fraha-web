import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl text-green-500 font-semibold mb-6">
        explore fraha
      </h1>
      <p className="text-lg text-gray-800 text-center mb-8">
        streamline your salon and spa management with our powerful software.
        effortlessly manage appointments, clients, and more.
      </p>
      <div className="flex flex-col space-y-3">
        <Button>
          <Link href="/register" className="btn-lg">
            get started
          </Link>
        </Button>

        <Button>
          <Link href="/login" className="btn-lg">
            continue to login
          </Link>
        </Button>
      </div>
    </div>
  );
}
