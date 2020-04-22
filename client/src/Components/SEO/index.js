import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

function SEO({ metaDescription, lang, meta, title, author, imageSrc, url }) {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${title}`}
        meta={[
          {
            name: `keywords`,
            content: ``,
          },
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:url`,
            content: url,
          },
          {
            property: `og:image`,
            content: imageSrc,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
          {
            name: `thumbnail`,
            content: imageSrc,
          },
        ].concat(meta)}
      />
      <Helmet>
        {/* Google Font: Roboto */}
        <link
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
    </>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
