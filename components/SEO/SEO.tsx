import Head from 'next/head';
import { useRouter } from 'next/router';

type SEOProps = {
  url?: string;
  pathname?: string;
  title?: string;
  description?: string;
};

export default function SEO({
  url = 'https://hiperative.com',
  pathname,
  title = 'Hiperative',
  description = 'Hiperative description',
}: SEOProps) {
  const router = useRouter();

  const path = pathname || router.asPath;
  const domain = `${url}${path}`;

  const screenshotUrl = 'https://i.microlink.io/';
  const cardUrl = `https://cards.microlink.io/?preset=hiperative&title=${description}&domain=${domain}`;
  const image = `${screenshotUrl}${encodeURIComponent(cardUrl)}`;

  return (
    <Head>
      <title>
        {title} — {description}
      </title>
      <meta name="description" content={description} />

      <meta property="og:url" content={domain} />
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:url" content={domain} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@hiperative" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@hiperative" />
    </Head>
  );
}
