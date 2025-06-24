import Image from 'next/image';
import Link from 'next/link';

export function SectionFindCell() {
  return (
    <section className="w-full bg-[#ece9e3] py-16 overflow-visible relative">
      <div className="container max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 relative">
        <div className="flex-1 max-w-xl z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ff8800] mb-6 leading-tight">
            Ainda não faz parte de uma célula?
          </h2>
          <p className="text-lg text-[#1c1c1c] mb-8">
            Células são grupos de pessoas que se reúnem para compartilhar experiências, crescer na fé e fortalecer a comunhão. Faça parte!
          </p>
          <Link href="/encontre-celula">
            <button className="bg-white text-[#ff8800] font-bold rounded-lg px-6 py-3 shadow transition hover:bg-[#ff8800] hover:text-white">
              QUERO UMA CÉLULA!
            </button>
          </Link>
        </div>
        <div className="flex-1 flex justify-center items-end relative h-[260px] md:h-auto">
          <div className="relative w-[300px] h-[260px] md:w-[600px] md:h-[320px]">
            <Image
              src="/images/encontre-celula/encontre-uma-celula.png"
              alt="Ilustração célula"
              fill
              className="object-contain md:absolute md:bottom-[-40px] md:right-[-60px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 