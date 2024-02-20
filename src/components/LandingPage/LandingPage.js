import React, { Component } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
// import { CarouselDemo } from "./components/carousel";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

export const LandingPage = (props) => {
    const [landingPageData, setLandingPageData] = React.useState({});

    React.useEffect(() => {
        setLandingPageData(JsonData);
    }, []);
    return (
        <>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
                <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon-114x114.png" />

                <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
                <link rel="stylesheet" type="text/css" href="fonts/font-awesome/css/font-awesome.css" />
                <link rel="stylesheet" type="text/css" href="css/style.css" />
                <link rel="stylesheet" type="text/css" href="css/nivo-lightbox/nivo-lightbox.css" />
                <link rel="stylesheet" type="text/css" href="css/nivo-lightbox/default.css" />
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900" rel="stylesheet" />
                <title>A React Landing Page Template</title>
                <meta name="description" content="" />
                <meta name="author" content="@Issaafalkattan" />
            </head>

            <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
                <div id="root">
                    
                        <Navigation />  
                        <Header data={landingPageData.Header} />
                        <About data={landingPageData.About} />
                        <Features data={landingPageData.Features} />
                        <Team data={landingPageData.Team} />
                        <Services data={landingPageData.Services} />
                        
                     
                        <Testimonials data={landingPageData.Testimonials} />
                        <Gallery data={landingPageData.Gallery} />
                        <Contact data={landingPageData.Contact} />
                   
                </div>
                <script type="text/javascript" src="js/jquery.1.11.1.js"></script>
                <script type="text/javascript" src="js/bootstrap.js"></script>
            </body>
        </>
    );
};
