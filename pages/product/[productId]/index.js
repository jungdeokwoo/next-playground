import ProductDetail from "../../../components/productDetail";
import { getProductItem } from "../../../utils/getProductItem";
import { getProductPath } from "../../../utils/getProductPath";

const Index = ({ productItem }) => {
  return productItem && <ProductDetail product={productItem} />;
};

export default Index;

export async function getStaticPaths() {
  const paths = [
    { params: { productId: "495" } },
    { params: { productId: "488" } },
    { params: { productId: "477" } },
  ];
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const productItem = await getProductItem(params.productId);
  return {
    props: { productItem },
  };
}
