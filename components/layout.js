import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const name = "dogsocks";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <LayoutContainer>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <LayoutHeader>
        {home ? (
          <>
            <ImageWrapper>
              <Image
                priority
                src="/images/profile.jpg"
                height={144}
                width={144}
                alt=""
              />
            </ImageWrapper>
            <Heading2Xl>{name}</Heading2Xl>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <ImageWrapper>
                  <Image
                    priority
                    src="/images/profile.jpg"
                    height={108}
                    width={108}
                    alt=""
                  />
                </ImageWrapper>
              </a>
            </Link>
            <HeadingLg>
              <Link href="/">
                <ColorInherit>{name}</ColorInherit>
              </Link>
            </HeadingLg>
          </>
        )}
      </LayoutHeader>
      <main>{children}</main>
      {!home && (
        <BackToHome>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </BackToHome>
      )}
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

const LayoutHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackToHome = styled.div`
  margin: 3rem 0 0;
`;

const Heading2Xl = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`;

const HeadingLg = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
`;

const ImageWrapper = styled.div`
  border-radius: 9999px;
`;

const ColorInherit = styled.a`
  color: inherit;
`;
