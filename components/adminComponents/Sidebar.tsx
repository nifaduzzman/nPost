import Link from 'next/link';
import React from 'react'

function Sidebar() {
  return (
      <div className="h-screen w-64 bg-gray-800 text-white fixed flex flex-col">
      {/* Logo Section */}
      <div className="py-8 flex justify-center">
        <Link href="/admin" className="text-3xl font-bold text-white">
          nifad
        </Link>
      </div>

      {/* Links Section */}
      <nav className="flex flex-col space-y-4 mt-8 px-6">
        <p className="text-gray-400 uppercase text-xs">Admin</p>
        {/* Nested Links */}
        <Link href="/admin/addProduct" className="text-lg text-white hover:bg-gray-700 py-2 px-4 rounded transition">
          Add Product
        </Link>
        <Link href="/admin/blogList" className="text-lg text-white hover:bg-gray-700 py-2 px-4 rounded transition">
          Blog List
        </Link>
        <Link href="/admin/subscription" className="text-lg text-white hover:bg-gray-700 py-2 px-4 rounded transition">
          Subscription
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar
