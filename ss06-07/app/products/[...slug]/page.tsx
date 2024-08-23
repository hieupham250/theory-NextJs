import React from "react";

export default function ProductDetail(props: any) {
  console.log(props);

  const { params } = props;

  return <div>Trang chi tiết sản phẩm có id là: {params.slug}</div>;
}
