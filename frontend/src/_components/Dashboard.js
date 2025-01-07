"use client";

import { useGlobalState } from "@/context/GlobalState";
import Link from "next/link";

function Dashboard() {
  const { isAdmin } = useGlobalState(); // Den Admin-Status aus dem Context verwenden

  return (
    <div>
      {/* Wenn der User Admin ist, wird der Link angezeigt */}
      {isAdmin && (
        <Link
          href="/admin/add-product"
          className="px-6 py-2 text-white bg-blue-500 border border-gray-800 rounded-full hover:bg-blue-600"
        >
          Add Product (Admin)
        </Link>
      )}
    </div>
  );
}

export default Dashboard;
