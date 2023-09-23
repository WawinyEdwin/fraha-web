import Sidebar from "./components/sidebar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
     <Sidebar/>
      {children}
    </section>
  );
}
