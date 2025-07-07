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
      {" "}ProductPage {(await props.params).slug} {(await props.searchParams).sortOrder}
    </div>
  );
};

export default ProductPage;
