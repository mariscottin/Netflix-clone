import React from 'react';
import Nav from '../Nav';
import Banner from '../Banner';
import Row from '../Row';
import Footer from '../Footer';

import requests from '../Requests';
import './HomeScreen.css';

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <div className="content-wrapper">
                <Row 
                    title="NETFLIX ORIGINALS"
                    fetchUrl={requests.fetchNetflixOriginals}
                    isLargeRow
                    className="top-row"
                />
                <Row 
                    title="Trending Now"
                    fetchUrl={requests.fetchTrending}
                />
                <Row 
                    title="Top Rated"
                    fetchUrl={requests.fetchTopRated}
                />
                <Row 
                    title="Action Movies"
                    fetchUrl={requests.fetchActionMovies}
                />
                <Row 
                    title="Comedy Movies"
                    fetchUrl={requests.fetchComedyMovies}
                />
                <Row 
                    title="Horror Movies"
                    fetchUrl={requests.fetchHorrorMovies}
                />
                <Row 
                    title="Romance Movies"
                    fetchUrl={requests.fetchRomanceMovies}
                />
                <Row 
                    title="Documentaries"
                    fetchUrl={requests.fetchDocumentaries}
                />
            </div>
            <Footer />
        </div>
    )
}

export default HomeScreen;
