"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, Timestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";

interface Item {
  id: string;
  name: string;
  slug: string;
  createdAt?: Timestamp;
}

export default function TablePage() {
  const [items, setItems] = useState<Item[]>([]);
  const router = useRouter();

  useEffect(() => {
    const loadData = async () => {
      const q = query(collection(db, "items"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);

      const data: Item[] = snapshot.docs.map((doc) => {
        const d = doc.data() as Omit<Item, "id">;
        return {
          id: doc.id,
          ...d,
        };
      });

      setItems(data);
    };

    loadData();
  }, []);

  const openDetails = (slug: string) => {
    router.push(`/items/${slug}`);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-6">All Items</h1>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Created</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id} onClick={() => openDetails(item.slug)} className="cursor-pointer hover:bg-gray-50">
              <td className="border px-4 py-2">
                {item.createdAt?.toDate ? item.createdAt.toDate().toLocaleString() : "—"}
              </td>
              <td className="border px-4 py-2">{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {items.length === 0 && <p className="text-center text-gray-500 mt-6">No items found.</p>}
    </div>
  );
}
