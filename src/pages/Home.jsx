import React from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedArtworks from "@/components/FeaturedArtworks";
import ArtistBio from "@/components/ArtistBio";
import ExhibitionPreview from "@/components/ExhibitionPreview";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedArtworks />
      <ArtistBio />
      <ExhibitionPreview />
      <Testimonials />
      <ContactForm />
    </>
  );
};

export default Home;
