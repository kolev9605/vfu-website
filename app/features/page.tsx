import React from "react";
import { ServerIcon, ShieldCheckIcon, CodeIcon, DatabaseIcon, ChartBarIcon, RocketIcon } from "lucide-react";
import Link from "next/link";

const FeaturesPage = () => {
  const featureCategories = [
    {
      title: "Performance",
      icon: RocketIcon,
      color: "text-blue-600",
      features: [
        {
          name: "High-Speed Rendering",
          description: "Lightning-fast page loads with server-side rendering and static site generation.",
          icon: ServerIcon,
        },
        {
          name: "Optimized Caching",
          description: "Intelligent caching strategies to minimize load times and improve user experience.",
          icon: DatabaseIcon,
        },
        {
          name: "Performance Metrics",
          description: "Built-in analytics to track and improve your application's performance.",
          icon: ChartBarIcon,
        },
      ],
    },
    {
      title: "Security",
      icon: ShieldCheckIcon,
      color: "text-green-600",
      features: [
        {
          name: "Advanced Authentication",
          description: "Robust authentication and authorization mechanisms out of the box.",
          icon: ShieldCheckIcon,
        },
        {
          name: "Data Protection",
          description: "End-to-end encryption and secure data handling for sensitive information.",
          icon: CodeIcon,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Powerful Features, Seamless Experience</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the cutting-edge capabilities that make our platform the ultimate solution for modern web
            development.
          </p>
        </div>
      </header>

      {/* Features Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {featureCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`mb-16 ${categoryIndex % 2 === 1 ? "bg-gray-50" : "bg-white"} rounded-xl p-8`}
            >
              <div className="flex items-center mb-8">
                <category.icon className={`w-12 h-12 mr-4 ${category.color}`} />
                <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {category.features.map((feature) => (
                  <div
                    key={feature.name}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <feature.icon className="w-10 h-10 text-blue-600 mr-4" />
                      <h3 className="text-xl font-semibold text-gray-900">{feature.name}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Deep Dive into Our Technology</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore the advanced technologies and frameworks that power our platform, designed to meet the most
            demanding development requirements.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition">
              Technical Documentation
            </button>
            <Link href="/architecture"className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Architecture Overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
