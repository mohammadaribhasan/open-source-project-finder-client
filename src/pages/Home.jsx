import React from 'react';
import Hero from '../components/Hero';
import TrendingProjects from '../components/TrendingProjects';
import Categories from '../components/Categories';
import FeaturesHighlight from '../components/FeaturesHighlight';
import CommunityShowcase from '../components/CommunityShowcase';
import CTASection from '../components/CTASection';


const Home = () => {
    return (
        <div>
            <Hero />
            <TrendingProjects />
            <Categories />
            <FeaturesHighlight />
            <CommunityShowcase />
            <CTASection />


        </div>
    );
};

export default Home;