import Head from "next/head";

function CustomHead() {
    return <Head>
        <title>TAKCEX - Presale Sample</title>
        <link
            rel="stylesheet"
            href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        ></link>
        <meta
            name="description"
            content="Takcex is a decentralized launchpad that
         allows users to launch their token and create their initial 
         token sale with staking benefits to their holders and they don't 
         require any Coding Knowledge For this."
        />
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        />
         <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;700&display=swap"
        />
    </Head>;
}

export default CustomHead;