import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import ProductItem from "../../components/productItem";
import Link from "next/link";

const Index = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/productList")
      .then((response) => response.json())
      .then((json) => setProductList(json.Data));
  }, []);

  return (
    <ListWrapper>
      {productList?.map((item) => (
        <Link key={item.id} href={`/product/${item.id}`}>
          <a>
            <ProductItem productItem={item} />
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
