import React from 'react'
import Hero from '../../components/Hero/Hero';
import Programs from '../../components/Programs/Programs';
import Reasons from '../../components/Reasons/Reasons';
import Testimonials from '../../components/Testimonials/Testimonials';
import Footer from '../../components/Footer/Footer';

function Home() {
    return (
        <div>
            <Hero></Hero>
            <Programs></Programs>
            <Reasons></Reasons>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    )
}

export default Home
