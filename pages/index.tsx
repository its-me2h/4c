import Head from 'next/head'
import Footer from '../src/components/Footer'
import LandingPage from '../src/components/LandingPage'
import Navbar from '../src/components/Navbar'

export default function Home() {

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.15.4/css/pro.min.css"/>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css"/>
                <title>the title</title>
            </Head>
            <Navbar />
            <LandingPage />
            <Footer />
        </>
    )
}
