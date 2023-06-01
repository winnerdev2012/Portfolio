import Head from "next/head";
const SalimovHead = () => {
  return (
    <Head>
      <title>Salimov - Horizontal Personal Portfolio</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Template Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Livvic:wght@100;200;300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      {/* Template CSS Files */}
      <link rel="stylesheet" href="css/devicon.min.css" />
      <link rel="stylesheet" href="css/all.min.css" />
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" href="css/swiper-bundle.min.css" />
      <link rel="stylesheet" href="css/animate.min.css" />
      <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
      <link rel="stylesheet" href="css/style.css" />
      {/* CSS Skin File */}
      {/* <link rel="stylesheet" href="css/skins/yellow.css" /> */}
      {/* Live Style Switcher - demo only */}

      <link rel="stylesheet" type="text/css" href="css/styleswitcher.css" />
    </Head>
  );
};
export default SalimovHead;
