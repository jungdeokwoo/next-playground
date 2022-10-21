import Link from "next/link";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <div>Product{router.query.productId} Review List</div>
      <h2>
        <Link href={`${router.asPath}/1`}>
          <a>Review1</a>
        </Link>
      </h2>
      <h2>
        <Link href={`${router.asPath}/2`}>
          <a>Review2</a>
        </Link>
      </h2>
      <h2>
        <Link href={`${router.asPath}/3`}>
          <a>Review3</a>
        </Link>
      </h2>
    </>
  );
};

export default Index;
