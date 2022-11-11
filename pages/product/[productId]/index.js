import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import ProductDetail from 'components/productDetail'
import { getProductItem } from 'utils/getProductItem'

const Index = ({ productItem }) => {
  const [productData, setProductData] = useState(productItem)
  const router = useRouter()

  useEffect(() => {
    getProductItem(router.query.productId).then(res => setProductData(res))
  }, [router.query.productId])

  const goPage = async () => {
    router.push('/product/495', undefined, { shallow: true })
  }
  return (
    <>
      <Head>
        <title>{productItem.name}</title>
        <meta
          name="description"
          content={`information of ${productItem.name}`}
        />
      </Head>
      <button onClick={goPage}>go4495</button>
      {productData && (
        <>
          <ProductDetail product={productData} />;
        </>
      )}
    </>
  )
}

export default Index

export async function getServerSideProps(context) {
  const { params, req, res, query } = context
  console.log(req.headers.cookie)
  console.log('--------------params------------', params)
  console.log('-------------query-------------', query)
  const productItem = await getProductItem(params.productId)

  return { props: { productItem: productItem } }
}
