import React from 'react';
import Hero from '../../components/students/Hero';
import Companies from '../../components/students/Companies';
import CoursesSection from '../../components/students/CoursesSection';
import TestimonialsSection from '../../components/students/TestimonialsSection';
import CalltoAction from '../../components/students/CalltoAction';
import Footer from '../../components/students/Footer';

const Home = () => {
  return (
    <div className='flex flex-col itmes-center space-y-7 text-center'>
      <Hero />
      <Companies />
      <CoursesSection />
      <TestimonialsSection />
      <CalltoAction />
      <Footer />
    </div>
  );
}

export default Home;
