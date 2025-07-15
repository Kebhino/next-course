"use client";
import { log } from "console";
import React, { useState } from "react";

const AddToCart = () => {
  const [koszyk, setKoszyk] = useState("");
  const [cena, setCena] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      name: koszyk,
      price: cena,
    };

    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const wynik = await res.json();
    console.log("Odpowiedz z serwera", wynik);

    setKoszyk("");
    setCena(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block font-medium mb-1">Nazwa produktu</label>
      <input
        value={koszyk}
        type="text"
        className="input input-bordered w-full"
        onChange={(e) => {
          setKoszyk(e.target.value);
        }}
      />
      <label className="block font-medium mb-1">Cena produktu </label>
      <input
        value={cena === 0 ? "" : cena}
        className="input input-bordered w-full"
        type="number"
        onChange={(e) => {
          setCena(parseInt(e.target.value));
        }}
      />
      <button type="submit" className="btn btn-primary">
        {" "}
        Dodaj do koszyka
      </button>
    </form>
  );
};

export default AddToCart;
