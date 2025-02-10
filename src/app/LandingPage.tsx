import {
  LineChart,
  Leaf,
  BarChart3,
  Award,
  ArrowRight,
  Sun,
  Wind,
  Battery,
  DollarSign,
} from "lucide-react";
import { Navigation } from "./components/Navigation";
import Link from "next/link";
export default function LandingPage() {
  const features = [
    {
      title: "Energy Consumption Dashboard",
      description:
        "Track your energy usage in real-time and monitor your bills with our intuitive dashboard.",
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
    },
    {
      title: "Carbon Footprint Tracker",
      description:
        "Visualize your environmental impact and get personalized recommendations for reduction.",
      icon: <Leaf className="w-12 h-12 text-green-600" />,
    },
    {
      title: "Savings & Incentives",
      description:
        "Earn rewards and incentives for reducing your energy consumption and going green.",
      icon: <DollarSign className="w-12 h-12 text-green-600" />,
    },
    {
      title: "Renewable Integration",
      description:
        "Connect with local renewable energy providers and transition to sustainable power sources.",
      icon: <Sun className="w-12 h-12 text-green-600" />,
    },
  ];

  const steps = [
    {
      title: "Track Energy Usage",
      description: "Monitor your daily consumption patterns",
      icon: <LineChart className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Calculate Footprint",
      description: "Understand your environmental impact",
      icon: <Leaf className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Switch to Renewable",
      description: "Transition to clean energy sources",
      icon: <Wind className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Earn Rewards",
      description: "Get incentives for saving energy",
      icon: <Award className="w-8 h-8 text-green-600" />,
    },
  ];

  const testimonials = [
    {
      quote: "Reduced my energy bill by 30% in just three months!",
      author: "Sarah Johnson",
      role: "Homeowner",
    },
    {
      quote:
        "The real-time tracking helped us optimize our energy usage effectively.",
      author: "Mike Chen",
      role: "Business Owner",
    },
    {
      quote:
        "Finally, a simple way to monitor and reduce our carbon footprint.",
      author: "Emma Williams",
      role: "Environmental Advocate",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* <AnimatedTestimonials testimonials={[]} /> */}

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-24 bg-gradient-to-tl from-green-200 via-blue-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Track Your Energy Consumption, Reduce Your Carbon Footprint
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Monitor real-time energy usage, discover ways to save, and
                switch to renewable energy sources.
              </p>
              {/* right there EnergyMonitoringForm.tsx redirect */}
              <Link href="/calculate">
                {" "}
                {/* Changed to /calculate */}
                <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors inline-flex items-center">
                  Start Saving Energy Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
            </div>
            {/*  */}
            <div className="relative">
              <img
                src="hero-ems.jpg"
                alt="Solar panels on a modern house"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Features
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Battery className="h-8 w-8 text-green-400" />
                <span className="ml-2 text-xl font-bold">
                  Green Energy Monitor
                </span>
              </div>
              <p className="mt-4 text-gray-400">
                Making energy monitoring simple and sustainable.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-gray-400 hover:text-white"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-white"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  support@greenenergymonitor.com
                </li>
                <li className="text-gray-400">1-800-GREEN-ENERGY</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Green Energy Monitor. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
