import Image from "next/image";
import styled from "styled-components";

const ProductDetail = ({ product }) => {
  return (
    <DetailWrapper>
      <DetailTitle>Product Detail</DetailTitle>
      <ProductDetails>
        <ImageWrapper>
          <Image
            src={product.image_link}
            width="400px"
            height="400px"
            alt={`${product.name} image`}
          />
        </ImageWrapper>
        <ProductDetailWrapper>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.price}$</ProductPrice>
        </ProductDetailWrapper>
      </ProductDetails>
      <DescriptionTitle>Product Description</DescriptionTitle>
      <ProductDescription>{product.description}</ProductDescription>
    </DetailWrapper>
  );
};

export default ProductDetail;

const DetailWrapper = styled.section`
  max-width: 1000px;
  min-width: 850px;
  padding: 30px;
`;

const DetailTitle = styled.h1`
  border-bottom: 1px solid black;
`;

const ProductDetails = styled.div`
  display: flex;
`;

const ImageWrapper = styled.div`
  flex-basis: 400px;
`;

const ProductDetailWrapper = styled.div`
  flex: 1;
  padding: 50px 20px;
`;

const ProductName = styled.h2``;

const ProductPrice = styled.h2`
  color: blueviolet;
`;

const DescriptionTitle = styled(DetailTitle)``;

const ProductDescription = styled.p``;
