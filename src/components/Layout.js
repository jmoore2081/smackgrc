import React, { useContext } from "react";
import Helmet from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useSiteMetadata from "./SiteMetadata";
import ThemeContext from "../context/theme-context";
import "./Layout.css";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const theme = useContext(ThemeContext);
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
        <meta name="google-site-verification" content="a1oGJpcMFY8vlA1K4YckBzsE-4DV1Xg7x6Fpctr6c98" />
      </Helmet>
      <div className={`bg-${theme.color}-500`}>
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
