"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";

function Dashboard() {
  const [isAdmin, setIsAdmin] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    const checkIfAdmin = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        const { user } = session;

        // Prüfen, ob der Benutzer die Rolle 'admin' hat
        if (user?.role === "admin") {
          setIsAdmin(true);
        }
      }
    };

    checkIfAdmin();

    // Optional: Hörer für Auth-Statusänderung
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session) {
          const { user } = session;
          setIsAdmin(user?.role === "admin");
        } else {
          setIsAdmin(false); // Wenn der Benutzer abgemeldet ist
        }
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [supabase]);

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