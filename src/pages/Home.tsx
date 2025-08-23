import React from 'react';
import AboutSection from '../components/home/AboutSection';
import ExperienceSection from '../components/home/ExperienceSection';
import EducationSection from '../components/home/EducationSection';
import SkillsSection from '../components/home/SkillsSection';
import ProjectsSection from '../components/home/ProjectsSection';
import BlogSection from '../components/home/BlogSection';
import ServiceSection from '../components/home/ServiceSection';
import ScrollToTop from '../components/ScrollToTop';
import Certificates from '../components/home/Certificates';


const Home: React.FC = () => {

  return (
    <>
      <AboutSection/>
      <ExperienceSection/>
      <EducationSection/>
      <SkillsSection />
      <ProjectsSection />
      <Certificates/>
      <BlogSection/>
      <ServiceSection/>
      <ScrollToTop/>
    </>
  );
};

export default Home;
