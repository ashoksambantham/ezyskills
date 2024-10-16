import React from 'react';
import Header from '../../Components/Header/header';
import Banner from '../../Components/Banner/Banner';
import BannerWithCarousel from '../../Components/BannerCareasoul/BannerCareasoul';
import SkillDevelopment from '../../Components/SkillDevelopment/SkillDevelopment';
import HowItWorks from '../../Components/HowitWorks/HowitWorks';
import PopularCourses from '../../Components/PopularCourses/PopularCourses';
import Achievements from '../../Components/achievements/achievements';
import MentorsSection from '../../Components/MentorCard/Mentorcard';
import Footer from '../../Components/Footer/footer';
const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <BannerWithCarousel />
      <SkillDevelopment />
      <HowItWorks />
      <PopularCourses />
      <Achievements />
      <MentorsSection />
      <Footer />
    </div>
  );
};

export default Home;
