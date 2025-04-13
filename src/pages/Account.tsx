import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import gsap from "gsap";
import {
  ArrowRight,
  User,
  Package,
  Settings,
  LogOut,
  CreditCard,
} from "lucide-react";

const Account: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(headerRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
    });
  }, []);

  // Sample order history data
  const orders = [
    {
      id: "#8743",
      date: "Feb 12, 2025",
      status: "Delivered",
      total: 83.99,
      items: ["Hydrating Face Serum", "Radiance Eye Cream"],
    },
    {
      id: "#7659",
      date: "Jan 28, 2025",
      status: "Processing",
      total: 45.0,
      items: ["Vitamin C Moisturizer"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="py-20 md:py-24 px-6 md:px-16">
        <div ref={headerRef} className="text-center relative mb-16">
          <div className="flex flex-col items-center relative">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl uppercase tracking-wide">
              ACCOUNT
            </h1>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl italic mt-2">
              personal
            </h2>
            <div className="absolute -right-4 md:right-0 top-1/2 transform -translate-y-1/2 hidden md:block">
              <ArrowRight className="h-6 w-6" />
            </div>
          </div>

          <p className="max-w-xl mx-auto text-gray-600 mt-8">
            Manage your profile, track orders, and update preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <ScrollReveal>
              <nav className="bg-truekind-cream/20 p-4">
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setActiveTab("profile")}
                      className={`flex items-center gap-3 w-full p-3 text-left ${
                        activeTab === "profile"
                          ? "bg-truekind-cream/50"
                          : "hover:bg-truekind-cream/30"
                      }`}
                    >
                      <User className="h-5 w-5" />
                      <span>Profile</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab("orders")}
                      className={`flex items-center gap-3 w-full p-3 text-left ${
                        activeTab === "orders"
                          ? "bg-truekind-cream/50"
                          : "hover:bg-truekind-cream/30"
                      }`}
                    >
                      <Package className="h-5 w-5" />
                      <span>Orders</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab("payment")}
                      className={`flex items-center gap-3 w-full p-3 text-left ${
                        activeTab === "payment"
                          ? "bg-truekind-cream/50"
                          : "hover:bg-truekind-cream/30"
                      }`}
                    >
                      <CreditCard className="h-5 w-5" />
                      <span>Payment Methods</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab("settings")}
                      className={`flex items-center gap-3 w-full p-3 text-left ${
                        activeTab === "settings"
                          ? "bg-truekind-cream/50"
                          : "hover:bg-truekind-cream/30"
                      }`}
                    >
                      <Settings className="h-5 w-5" />
                      <span>Settings</span>
                    </button>
                  </li>
                  <li className="border-t pt-2 mt-4">
                    <button className="flex items-center gap-3 w-full p-3 text-left text-gray-600 hover:bg-truekind-cream/30">
                      <LogOut className="h-5 w-5" />
                      <span>Sign Out</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </ScrollReveal>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-3">
            <ScrollReveal>
              {activeTab === "profile" && (
                <div className="bg-white p-6 border border-gray-200">
                  <h3 className="font-serif text-2xl mb-6 pb-4 border-b">
                    Profile Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        value="Emma"
                        className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value="Johnson"
                        className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value="emma.johnson@example.com"
                        className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Phone
                      </label>
                      <input
                        type="text"
                        value="(555) 123-4567"
                        className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>
                  </div>

                  <button className="px-6 py-3 bg-truekind-dark text-white hover:opacity-90 transition-opacity">
                    SAVE CHANGES
                  </button>
                </div>
              )}

              {activeTab === "orders" && (
                <div className="bg-white p-6 border border-gray-200">
                  <h3 className="font-serif text-2xl mb-6 pb-4 border-b">
                    Order History
                  </h3>

                  {orders.length > 0 ? (
                    <div className="space-y-6">
                      {orders.map((order) => (
                        <div key={order.id} className="border p-4">
                          <div className="flex justify-between mb-4">
                            <div>
                              <p className="font-medium">Order {order.id}</p>
                              <p className="text-sm text-gray-600">
                                {order.date}
                              </p>
                            </div>
                            <div>
                              <span
                                className={`px-3 py-1 text-xs rounded-full ${
                                  order.status === "Delivered"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-blue-100 text-blue-800"
                                }`}
                              >
                                {order.status}
                              </span>
                            </div>
                          </div>
                          <div className="mb-3 text-sm text-gray-600">
                            {order.items.join(", ")}
                          </div>
                          <div className="flex justify-between">
                            <p>Total</p>
                            <p className="font-medium">
                              ${order.total.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center py-10 text-gray-500">
                      You haven't placed any orders yet.
                    </p>
                  )}
                </div>
              )}

              {activeTab === "payment" && (
                <div className="bg-white p-6 border border-gray-200">
                  <h3 className="font-serif text-2xl mb-6 pb-4 border-b">
                    Payment Methods
                  </h3>

                  <div className="border p-4 mb-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <CreditCard className="h-6 w-6 mr-4" />
                      <div>
                        <p className="font-medium">•••• •••• •••• 4123</p>
                        <p className="text-sm text-gray-600">Expires 03/26</p>
                      </div>
                    </div>
                    <span className="bg-gray-100 text-xs px-2 py-1 rounded">
                      Default
                    </span>
                  </div>

                  <button className="px-6 py-3 border border-truekind-dark hover:bg-truekind-dark hover:text-white transition-colors">
                    ADD NEW PAYMENT METHOD
                  </button>
                </div>
              )}

              {activeTab === "settings" && (
                <div className="bg-white p-6 border border-gray-200">
                  <h3 className="font-serif text-2xl mb-6 pb-4 border-b">
                    Account Settings
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Email Preferences</h4>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-3 h-4 w-4"
                            defaultChecked
                          />
                          Order confirmations and updates
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-3 h-4 w-4"
                            defaultChecked
                          />
                          Special offers and promotions
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3 h-4 w-4" />
                          Product recommendations
                        </label>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-medium mb-4">Password</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-600 mb-2">
                            Current Password
                          </label>
                          <input
                            type="password"
                            className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                          />
                        </div>
                        <div></div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-2">
                            New Password
                          </label>
                          <input
                            type="password"
                            className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-2">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                          />
                        </div>
                      </div>
                      <button className="mt-6 px-6 py-2 bg-truekind-dark text-white hover:opacity-90 transition-opacity">
                        UPDATE PASSWORD
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Account;
