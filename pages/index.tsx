import React from "react";
import WithSubnavigation from "../component/navbar";
import CallToActionWithIllustration from "../component/hero";
import LargeWithNewsletter from "../component/footer";
import Testimonial from "../component/testimonial";

export default function Home() {
  return (
     <>
     <WithSubnavigation/>
     <CallToActionWithIllustration/>
     <Testimonial/>
     <LargeWithNewsletter/>
     </>
  )
}

