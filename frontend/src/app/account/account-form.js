"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Dashboard from "@/_components/Dashboard";

export default function AccountForm({ user }) {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState(null);
  const [username, setUsername] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`full_name, username, avatar_url`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setFullname(data.full_name);
        setUsername(data.username);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile({ username, avatar_url }) {
    try {
      setLoading(true);

      const { error } = await supabase.from("profiles").upsert({
        // supabase update-Funktion
        id: user?.id,
        full_name: fullname,
        username,
        avatar_url,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[80vh] flex justify-start">
      {/* Sidebar */}
      <div className="w-80 p-6 bg-lime-100 flex flex-col justify-start gap-2 rounded-r-2xl shadow-lg">
        {/* Avatar mittig */}
        <div className="flex justify-center mb-2">
          <div className="w-24 h-24 rounded-full border-4 border-green-600 overflow-hidden shadow-xl">
            <img
              // src={`/${plantImage}`}
              src={avatar_url}
              alt="avatar"
              className="w-full h-full  first-line:object-cover"
            />
          </div>
        </div>

        {/* Restliche Elemente linksbündig */}
        <div>
          <label htmlFor="email" className="font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="text"
            value={user?.email}
            disabled
            className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="fullName" className="font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            value={fullname || ""}
            onChange={(e) => setFullname(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="username" className="font-medium text-gray-700">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <button
            className="w-full px-6 py-2 font-bold text-black bg-amber-200 border border-gray-800 rounded-full hover:bg-amber-300 mt-4"
            onClick={() => updateProfile({ username, avatar_url })}
            disabled={loading}
          >
            {loading ? "Loading ..." : "Update"}
          </button>
          <form action="/auth/signout" method="post" className="mt-4">
            <button className="w-full px-6 py-2 font-bold text-red bg-green-400 border border-gray-800 rounded-full hover:bg-green-500">
              Sign out
            </button>
          </form>
        </div>
      </div>

      {/* Dashboard Content */}
      <div>
        <Dashboard />
      </div>
    </div>
  );
}
