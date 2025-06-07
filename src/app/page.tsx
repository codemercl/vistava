'use client'

import Booking from "./Booking";
// import Banner from "./Banner";
import AboutTabs from "./AboutTabs";
import Gallery from "./Gallery";
import VideoGallery from "./VideoGallery";

export default function Home() {

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full bg-white">
        <Booking />
        {/* <Banner /> */}
        <AboutTabs />
        <Gallery />
        <VideoGallery />
      </div>
    </>
  );
}
