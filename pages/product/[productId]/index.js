import ProductDetail from "../../../components/productDetail";
import { getProductItem } from "../../../utils/getProductItem";

const Index = ({ productItem }) => {
  return productItem && <ProductDetail product={productItem} />;
};

export default Index;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log(req.headers.cookie);
  console.log("--------------params------------", params);
  console.log("-------------query-------------", query);
  res.setHeader("Set-Cookie", ["name=dogsocks"]);
  const productItem = await getProductItem(params.productId);

  return { props: { productItem: productItem } };
}
