"use client";
import React from "react";

interface IdProduct {
  idProduct: string;
}

interface Props {
  params: IdProduct;
}

export default function ProductDetail(props: Props) {
  console.log("giá trị", props);
  const { params } = props;

  return <div>Sản phẩm có id là:{params.idProduct} </div>;
}
