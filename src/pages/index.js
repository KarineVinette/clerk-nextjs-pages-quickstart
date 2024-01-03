import Head from 'next/head';
// Correct the import paths according to your project structure
import Loader from "./components/loader";
import Home from "./components/Home";
import Feature from "./components/Feature";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

// Ensure function name is descriptive and doesn't conflict with other imports
export default function Main() {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="assets/css/bootstrap-5.0.0-beta1.min.css" />
                <link rel="stylesheet" href="assets/css/LineIcons.2.0.css" />
                <link rel="stylesheet" href="assets/css/tiny-slider.css" />
                <link rel="stylesheet" href="assets/css/animate.css" />
                <link rel="stylesheet" href="assets/css/lindy-uikit.css" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap" rel="stylesheet" />
            </Head>
            
            <Loader />
            <Home />
            <Feature />
            <About />
            <Pricing />
            <Footer />    
            
            <a href="#" className="scroll-top"> <i className="lni lni-chevron-up"></i> </a>

            {/* Next.js script handling, if needed */}
            <script src="assets/js/bootstrap-5.0.0-beta1.min.js"></script>
            <script src="assets/js/tiny-slider.js"></script>
            <script src="assets/js/wow.min.js"></script>
            <script src="assets/js/main.js"></script>
                                        

            {/* <Script src="..." strategy="lazyOnload" /> */}
        </>
    );
}








           
          
            
               
                                            


                                           



