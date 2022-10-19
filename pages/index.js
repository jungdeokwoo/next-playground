import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styled from "styled-components";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HomeSection>
        <p>Hello World</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </HomeSection>
    </Layout>
  );
}

const HomeSection = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
`;
