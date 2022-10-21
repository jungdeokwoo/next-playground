import Link from "next/link";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <div>Product{router.query.productId} Detail</div>
      <Link href={`${router.asPath}/review`}>
        <a>go Review</a>
      </Link>
    </>
  );
};

export default Index;
