import Head from "next/head";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import Work from "@/components/Work/Work";

const Index = () => {
    return (
        <div>
            <Head>
                <title>Ethan Ng</title>
                <meta name="title" content="Ethan Ng" />
                <meta
                    name="description"
                    content="Ethan Ng is a software engineer who loves designing and building applications."
                />
                <link rel="icon" href="https://ethanng.dev/favicon.ico" />
                <meta name="theme-color" content="#e8313f" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="apple-touch-icon"
                    href="https://ethanng.dev/favicon.ico"
                />
                <link rel="manifest" href="https://ethanng.dev/manifest.json" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ethanng.dev/" />
                <meta property="og:title" content="Ethan Ng" />
                <meta
                    property="og:description"
                    content="Ethan Ng is a software engineer who is passionate about utilizing code
                    to better the world."
                />
                <meta name="google" content="notranslate" />
                <meta http-equiv="Content-Language" content="en" />
                <meta
                    property="og:image"
                    content="https://ethanng.dev/image.png"
                />
                <meta name="twitter:creator" content="@ethn_ng" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://ethanng.dev/" />
                <meta property="twitter:title" content="Ethan Ng" />
                <meta
                    property="twitter:description"
                    content="Ethan Ng is a software engineer who loves designing and building applications."
                />
                <meta
                    property="twitter:image"
                    content="https://ethanng.dev/image.png"
                />
            </Head>
            <Cursor />
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Work />
            <Contact />
            <Footer />
            <Socials />
        </div>
    );
};

export default Index;
