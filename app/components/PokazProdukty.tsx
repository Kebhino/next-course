"use client";

import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function ListaProduktow() {
  const [produkty, setProdukty] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProdukty = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProdukty(data);
      } catch (err) {
        console.error("Błąd podczas pobierania produktów", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProdukty();
  }, []);

  if (loading) return <p>Ładowanie...</p>;

  return (
    <div className="space-y-2">
      {produkty.map((p) => (
        <div key={p.id} className="p-4 border rounded-md">
          <p className="font-bold">{p.name}</p>
          <p>{p.price} zł</p>
        </div>
      ))}
    </div>
  );
}
