import styled from "styled-components";
import ProductItem from "../../components/productItem";
import Link from "next/link";
import { getProductLists } from "../../utils/getProductLists";

const Index = ({ allProductLists }) => {
  return (
    <ListWrapper>
      {allProductLists?.map((productItem) => (
        <Link key={productItem.id} href={`/product/${productItem.id}`}>
          <a>
            <ProductItem productItem={productItem} />
          </a>
        </Link>
      ))}
    </ListWrapper>
  );
};

export default Index;

const ListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-flow: row;
  grid-gap: 40px;
  align-items: center;
  justify-items: center;
  max-width: 1500px;
  margin: 50px auto;
`;

export async function getStaticProps() {
  const allProductLists = await getProductLists();
  console.log("regen");
  return {
    props: { allProductLists },
    revalidate: 20,
  };
}
