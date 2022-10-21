import { useRouter } from "next/router";

const Docs = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  return <div>{`Documents ${params[0]} & ${params[1]}`}</div>;
};

export default Docs;
