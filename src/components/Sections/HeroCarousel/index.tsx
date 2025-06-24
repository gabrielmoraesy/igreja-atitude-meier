'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Button } from '@/components/ui/button';

const slides = [
  {
    image: '/images/banners-carrosel/base.jpg',
    title: 'Base',
    description: 'Venha para o culto Base de adolescentes! Toda sexta-feira às 19:30, um tempo de fé, amizade e crescimento.',
    alt: 'Culto Base de adolescentes',
    buttonText: 'ACESSE NOSSO INSTAGRAM',
    buttonLink: 'https://www.instagram.com/atitudemeier/'
  },
  {
    image: '/images/banners-carrosel/be-one.jpg',
    title: 'Be One',
    description: 'Não perca o culto jovem do Be One! Todo sábado às 19h, um encontro de fé, conexão e transformação.',
    alt: 'Culto jovem Be One',
    buttonText: 'SAIBA MAIS',
    buttonLink: '/ministerios/be-one'
  },
  {
    image: '/images/banners-carrosel/culto-celebracao.jpg',
    title: 'Culto de Celebração',
    description: 'Não perca nosso culto de celebração todo domingo às 10h e 18h. Participe presencialmente ou acompanhe ao vivo pelo YouTube.',
    alt: 'Culto de celebração dominical',
    buttonText: 'ASSISTA NO YOUTUBE',
    buttonLink: 'https://www.youtube.com/@atitudemeier'
  },
  {
    image: '/images/banners-carrosel/festa-da-roça.png',
    title: 'Festa da Roça 2025',
    description: 'Êita, povo! Tão prontos pro mió evento do ano? Ôce não vai perder, né? No dia 12 de julho vai acontecer nossa festa da roça e vai ter muita comida típica, diversão e comunhão.',
    alt: 'Festa da Roça 2025',
    buttonText: 'CONFIRA O EVENTO',
    buttonLink: '/eventos/festa-da-roca'
  }
];

export function HeroCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  
  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
        navigation={{ nextEl: '.custom-swiper-next', prevEl: '.custom-swiper-prev' }}
        slidesPerView={1}
        spaceBetween={0}
        allowTouchMove={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-end justify-center pb-12 md:pb-20 px-4 md:px-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-5xl mx-auto border border-[#f4efea] rounded-2xl p-4 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-8 backdrop-blur-md bg-white/10 md:w-[1072px] md:h-[186px]"
                >
                  <div className="flex-1 text-left md:text-left text-center md:text-start">
                    <h1 className="text-3xl md:text-5xl font-bold mb-2 text-[#f4efea]">{slide.title}</h1>
                    <p className="text-base md:text-lg text-[#f4efea] mb-0 md:mb-0">{slide.description}</p>
                  </div>
                  <div className="flex-shrink-0 w-full md:w-auto mt-6 md:mt-0 flex flex-col items-center md:justify-end gap-4">
                    <Button
                      size="lg"
                      className="bg-[#f4efea] hover:bg-[#e8e4df] text-[#1c1c1c] font-bold px-8 py-4 rounded-lg shadow-soft transition-all duration-300"
                      asChild
                    >
                      <a href={slide.buttonLink} target={slide.buttonLink.startsWith('http') ? '_blank' : undefined} rel={slide.buttonLink.startsWith('http') ? 'noopener noreferrer' : undefined}>{slide.buttonText}</a>
                    </Button>
                    <div className="w-full flex flex-col items-center gap-2 mt-2">
                      <div className="flex items-center justify-center gap-4">
                        <button onClick={() => swiperRef?.current?.slidePrev()} className="bg-white/20 hover:bg-white/40 rounded-full p-2 border border-[#f4efea] transition-colors" aria-label="Anterior">
                          <ChevronLeft className="w-6 h-6 text-[#f4efea]" />
                        </button>
                        <div className="custom-swiper-pagination !static flex justify-center gap-2" />
                        <button onClick={() => swiperRef?.current?.slideNext()} className="bg-white/20 hover:bg-white/40 rounded-full p-2 border border-[#f4efea] transition-colors" aria-label="Próximo">
                          <ChevronRight className="w-6 h-6 text-[#f4efea]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
} 