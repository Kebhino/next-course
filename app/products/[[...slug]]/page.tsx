import AddToCart from "@/app/components/AddToCart";
import ListaProduktow from "@/app/components/PokazProdukty";
import React from "react";

interface Props {
  params: Promise<{
    slug: string[];
  }>;
  searchParams: Promise<{ sortOrder: string }>;
}

const ProductPage = async (props: Props) => {
  return (
    <div>
      <AddToCart />
      <ListaProduktow />
    </div>
  );
};

export default ProductPage;
