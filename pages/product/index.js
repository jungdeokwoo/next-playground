import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  console.log(router);
  return <div>Product List</div>;
};

export default Index;
