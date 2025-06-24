'use client';

import { HeroCarousel } from "@/components/Sections/HeroCarousel";
import { SectionFindCell } from "@/components/Sections/SectionFindCell";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HeroCarousel />      
      <SectionFindCell />
    </Fragment>
  );
}
