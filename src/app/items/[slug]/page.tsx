"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where, Timestamp } from "firebase/firestore";

export interface Item {
  id?: string;
  name: string;
  slug: string;
  imageUrl?: string; // 👈 DODANO
  createdAt?: Timestamp;
}

export default function ItemDetails() {
  const params = useParams(); // ✔ OVO JE KLJUČ
  const slug = params.slug as string; // tipizirano

  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    if (!slug) return;

    const loadItem = async () => {
      const q = query(collection(db, "items"), where("slug", "==", slug));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        setItem(snapshot.docs[0].data() as Item);
      }
    };

    loadItem();
  }, [slug]);

  if (!item) return <div className="p-10">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-4">{item.name}</h1>

      {/* ⭐ PRIKAZ SLIKE AKO POSTOJI */}
      {item.imageUrl && (
        <img src={item.imageUrl} alt={item.name} className="w-full max-h-[500px] object-cover rounded mb-6 shadow" />
      )}

      <p className="text-gray-600">Slug: {item.slug}</p>

      <p className="mt-4">
        Created: {item.createdAt instanceof Timestamp ? item.createdAt.toDate().toLocaleString() : "—"}
      </p>
    </div>
  );
}
