import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className="title">
        Read <Link href="/posts/first-post">this page!</Link>
      </h1>
    </div>
  );
}
