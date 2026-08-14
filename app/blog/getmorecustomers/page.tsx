import type { Metadata } from "next";
import Header from "@/components/Header";
import GetMoreCustomers from "@/components/blogs/getmorecustomers";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Customer Retention for Startups | BigBeans Digital",
  description:
    "Learn how London startups can improve customer retention, build loyalty and keep customers coming back. Read the practical guide today.",
};

export default function GetMoreCustomersPage() {
  return (
    <>
      <Header />
      <GetMoreCustomers />
      <Footer />
    </>
  );
}