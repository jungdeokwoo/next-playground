import Link from "next/link";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  console.log(router);

  const handleNavigate = () => {
    router.push(`/product/4`);
  };
  return (
    <div>
      <h2>
        <Link href={`/product/1`}>
          <a>Product1</a>
        </Link>
      </h2>
      <h2>
        <Link href={`/product/2`}>
          <a>Product2</a>
        </Link>
      </h2>
      <h2>
        <Link href={`/product/3`}>
          <a>Product3</a>
        </Link>
      </h2>
      <button onClick={handleNavigate}>Product4</button>
    </div>
  );
};

export default Index;
