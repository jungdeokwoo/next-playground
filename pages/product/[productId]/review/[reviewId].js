import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      Product{router.query.productId} Review{router.query.reviewId}
    </div>
  );
};

export default Review;
