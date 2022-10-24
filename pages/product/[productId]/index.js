import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = () => {
  const router = useRouter();
  console.log(router);

  return <div>Product{router.query.productId} Detail</div>;
};

export default Index;
