import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  console.log(router);
  return <div>Product{router.query.productId} Review List</div>;
};

export default Index;
