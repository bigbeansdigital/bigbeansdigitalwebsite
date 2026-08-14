import type { Metadata } from "next";
import Header from "@/components/Header";
import RealTimeWeatherMarketing from "@/components/blogs/real-time-weather-marketing";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Real-Time Marketing: Turn Weather Data Into Revenue",
  description:
    "Learn how agile brands use weather data, AI, and real-time signals to create contextual marketing campaigns that drive revenue.",
};

export default function RealTimeWeatherMarketingPage() {
  return (
    <>
      <Header />
      <RealTimeWeatherMarketing />
      <Footer />
    </>
  );
}