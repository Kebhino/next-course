import React from "react";

interface Props {
  params: {
    slug: string[];
  };
  searchParams: { sortOrder: string };
}

const ProductPage = (props: Props) => {
  return (
    <div>
      {" "}
      ProductPage {props.params.slug} {props.searchParams.sortOrder}
    </div>
  );
};

export default ProductPage;
