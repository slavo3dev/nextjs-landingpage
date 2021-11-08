import React from "react";
import Head from "next/head";
import { FC } from "react";

interface Props {
  title: string;
  metaDescription: string;
}

export const HeadComponent: FC<Props> = (props) => {
  const {
    title = "eMed - Landing Page",
    metaDescription = "eMed is Democratizing Health Care",
  } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="description"
          key="description"
          content={metaDescription}
        />
        <meta name="title" key="title" content={title} />
        <meta property="og:title" key="og:title" content={title} />
        <meta property="og:locale" key="og:locale" content="en_EU" />
        <meta property="og:type" key="og:type" content="website" />
        <meta
          property="og:description"
          key="og:description"
          content={metaDescription}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="icon"
          type="image/x-icon"
          href="/images/favicon.ico"
        />
      </Head>
    </>
  );
};
