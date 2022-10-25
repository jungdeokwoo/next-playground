import Image from "next/image";
import React from "react";
import styled from "styled-components";

const ProductItem = ({ productItem }) => {
  return (
    <ItemWrapper>
      <BrandTitle>{productItem.brand}</BrandTitle>
      <ImageWrapper>
        <Image
          src={productItem.image_link}
          alt={productItem.name}
          width="200px"
          height="200px"
        />
      </ImageWrapper>
      <ItemDetail>
        <ItemName>{productItem.name}</ItemName>
        <ItemPrice>{productItem.price}$</ItemPrice>
      </ItemDetail>
    </ItemWrapper>
  );
};

export default ProductItem;

const ItemWrapper = styled.div`
  width: 300px;
  height: 400px;
  margin: 30px 0;
`;

const BrandTitle = styled.h1`
  font-size: medium;
`;

const ImageWrapper = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemDetail = styled.div`
  padding: 0 10px;
`;

const ItemName = styled.p`
  font-size: large;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 10px;
`;

const ItemPrice = styled.p`
  display: flex;
  flex-direction: row-reverse;
  color: blueviolet;
`;
