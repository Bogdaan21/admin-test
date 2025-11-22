"use client";

import { useState } from "react";
import { db, storage } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function AddPage() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };

  const handleNameChange = (value: string) => {
    setName(value);
    setSlug(generateSlug(value));
  };

  const handleImageChange = (file: File) => {
    setImageFile(file); // 🔥 BEZ KOMPRESIJE
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = "";

      if (imageFile) {
        // 🔥 Upload u tvoj storage bucket
        const storageRef = ref(storage, `items/${slug}-${Date.now()}.jpg`);
        await uploadBytes(storageRef, imageFile);

        // 🔥 Dobij URL iz Storage-a
        imageUrl = await getDownloadURL(storageRef);
      }

      // 🔥 Snimanje u Firestore
      await addDoc(collection(db, "items"), {
        name,
        slug,
        imageUrl,
        createdAt: serverTimestamp(),
      });

      alert("Item added successfully!");

      setName("");
      setSlug("");
      setImageFile(null);

    } catch (error) {
      console.error("Error adding document:", error);
      alert("Failed to add.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-6">Add New Item</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            className="w-full border px-4 py-2 rounded"
            placeholder="Enter name…"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleImageChange(e.target.files[0]);
              }
            }}
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
}