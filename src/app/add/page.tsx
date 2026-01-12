"use client";

import { useState } from "react";
import { db, storage } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import imageCompression from "browser-image-compression";

export default function AddPage() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState(""); // ⭐ NOVO

  const [loading, setLoading] = useState(false);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);

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

  const optimizeImage = async (file: File) => {
    const options = {
      maxSizeMB: 0.4, // maksimalno ~400KB
      maxWidthOrHeight: 1920, // max rezolucija
      useWebWorker: true,
      fileType: "image/jpeg", // konverzija u JPEG zbog najboljeg kompresovanja
      initialQuality: 0.7, // startna kvalitet kompresije
    };

    let compressed = await imageCompression(file, options);

    // ⚠️ DODATNA OPTIMIZACIJA AKO JE I DALJE PREKO 400KB
    if (compressed.size > 400 * 1024) {
      const secondPassOptions = {
        ...options,
        maxSizeMB: 0.35,
        initialQuality: 0.6,
      };
      compressed = await imageCompression(compressed, secondPassOptions);
    }

    return compressed;
  };

  const handleImageChange = async (file: File) => {
    const compressed = await optimizeImage(file);
    setImageFile(compressed);
  };

  const handleGalleryChange = async (files: FileList) => {
    const optimizedFiles: File[] = [];

    for (const file of Array.from(files)) {
      const optimized = await optimizeImage(file);
      optimizedFiles.push(optimized);
    }

    setGalleryFiles(optimizedFiles);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = "";
      let galleryUrls: string[] = [];

      if (imageFile) {
        const storageRef = ref(storage, `items/${slug}-${Date.now()}.jpg`);
        await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(storageRef);
      }

      if (galleryFiles.length > 0) {
        const uploads = galleryFiles.map(async (file, index) => {
          const storageRef = ref(storage, `items/gallery/${slug}-${index}-${Date.now()}.jpg`);
          await uploadBytes(storageRef, file);
          return await getDownloadURL(storageRef);
        });

        galleryUrls = await Promise.all(uploads);
      }

      await addDoc(collection(db, "items"), {
        name,
        slug,
        description, // ⭐ SNIMA SE U BAZU
        imageUrl,
        gallery: galleryUrls,
        createdAt: serverTimestamp(),
      });

      alert("Item added successfully!");

      setName("");
      setSlug("");
      setDescription(""); // reset
      setImageFile(null);
      setGalleryFiles([]);
    } catch (error) {
      console.error("Error adding document:", error);
      alert("Failed to add item.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-6">Add New Item</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* NAME */}
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

        {/* GLAVNA SLIKA */}
        <div>
          <label className="block font-medium mb-1">Main Image</label>
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

        {/* GALERIJA */}
        <div>
          <label className="block font-medium mb-1">Gallery Images (multiple)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
              if (e.target.files) {
                handleGalleryChange(e.target.files);
              }
            }}
            className="w-full border px-4 py-2 rounded"
          />

          {galleryFiles.length > 0 && (
            <p className="text-sm text-gray-600 mt-2">{galleryFiles.length} images ready for upload</p>
          )}
        </div>

        {/* DESCRIPTION — ⭐ NOVO */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border px-4 py-2 rounded h-32 resize-none"
            placeholder="Enter description…"
          ></textarea>
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
