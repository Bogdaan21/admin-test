"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where, Timestamp } from "firebase/firestore";

export interface Item {
  id?: string;
  name: string;
  slug: string;
  imageUrl?: string;
  gallery?: string[];
  description?: string;
  createdAt?: Timestamp;
}

export default function ItemDetails() {
  const params = useParams();
  const slug = params.slug as string;

  const [item, setItem] = useState<Item | null>(null);

  // ⭐ LIGHTBOX STATE
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

  // ⭐ KEYBOARD NAVIGATION ZA LIGHTBOX
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex]);

  if (!item) return <div className="p-10">Loading...</div>;

  const gallery = item.gallery || [];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % gallery.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 pb-20">
      <h1 className="text-3xl font-semibold mb-4">{item.name}</h1>

      <p className="text-gray-500 mb-4">
        Created: {item.createdAt instanceof Timestamp ? item.createdAt.toDate().toLocaleString() : "—"}
      </p>

      {/* ⭐ Glavna slika */}
      {item.imageUrl && (
        <img src={item.imageUrl} alt={item.name} className="w-full max-h-[500px] object-cover rounded mb-6 shadow" />
      )}

      <p className="text-gray-600 mb-8">Slug: {item.slug}</p>

      {/* ⭐ GALLERY GRID */}
      {gallery.length > 0 && (
        <div className="grid grid-cols-5 gap-3 mb-10">
          {gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-full h-24 object-cover rounded shadow cursor-pointer hover:opacity-80 transition"
              onClick={() => openLightbox(i)}
            />
          ))}
        </div>
      )}

      {/* ⭐ DESCRIPTION */}
      {item.description && (
        <div className="mt-10 p-5 bg-gray-50 rounded-lg border border-gray-200 shadow-sm leading-relaxed text-gray-800 whitespace-pre-line">
          {item.description}
        </div>
      )}

      {/* ⭐ FULLSCREEN LIGHTBOX */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <img src={gallery[lightboxIndex]} className="max-w-[90%] max-h-[90%] rounded shadow-xl" alt="Fullscreen" />

          {/* PREV */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-10 text-white text-5xl font-bold hover:opacity-70"
          >
            ‹
          </button>

          {/* NEXT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-10 text-white text-5xl font-bold hover:opacity-70"
          >
            ›
          </button>

          {/* CLOSE BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-10 right-10 text-white text-4xl hover:opacity-70"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
