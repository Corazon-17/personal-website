import Head from "next/head";
import { useRouter } from "next/router";

interface CustomHeadProps {
  title?: string;
  description: string;
  keywords: Array<string>;
  type: string;
  image?: string;
}

export default function CustomHead({ ...props }: CustomHeadProps) {
  const router = useRouter();
  const siteUrl = `localhost:3000${router.asPath}`;
  const imageUrl = props.image ? props.image : "https://ik.imagekit.io/corazon17/website/home.png";
  const title = props.title ? `${props.title} - Corazon17` : "Corazon17";

  return (
    <Head>
      <title>{title}</title>
      <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
      <meta name="title" content={title} />
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords.toString()} />
      <meta name="author" content="Corazon17" />

      {/* <!-- Open Graph Meta Tags --> */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content={props.type} />
      <meta property="og:site_name" content="Corazon17" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={imageUrl} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta property="twitter:card" content={imageUrl} />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={props.description} />
      <meta property="twitter:image" content={imageUrl} />
    </Head>
  );
}
