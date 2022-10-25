import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductDetail from "../../../components/productDetail";

const Index = () => {
  const [productDetail, setProductDetail] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch(`http://localhost:3000/api/productList/${router.query.productId}`)
      .then((res) => res.json())
      .then((res) => setProductDetail(res.Data));
  }, [router.query.productId]);

  return productDetail && <ProductDetail product={productDetail} />;
};

export default Index;
