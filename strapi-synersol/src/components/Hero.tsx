import Link from "next/link";
import Image from "next/image";
// Verifica esta importación, o cámbiala a un <div> si persiste el error
import { Container } from "@/components/Container";

interface HeroProps {
  data: {
    heading: string;
    text: string;
    cta: {
      href: string;
      text: string;
      external: boolean;
    };
    image: {
      url: string;
      alternativeText: string | null;
      name: string;
    };
  };
}

export function Hero({ data }: HeroProps) {
  if (!data) return null;
  const { heading, text, cta, image } = data;

  return (
    <div
      className="relative flex flex-wrap"
      style={{ backgroundImage: 'url("/img/fondo.png")' }}
    >
      {/* Superposición oscura para mejor contraste */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative flex items-center w-full lg:w-1/2 p-8">
        <div className="max-w-2xl mb-8 text-white">
          <h1 className="text-4xl font-bold leading-snug tracking-tight lg:text-4xl xl:text-6xl">
            {heading}
          </h1>
          <p className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl">
            {text}
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <Link
              href={cta.href}
              target={cta.external ? "_blank" : "_self"}
              rel="noopener"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-[#D92F11] rounded-md"
            >
              {cta.text}
            </Link>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full lg:w-1/2">
        <Image
          src={image.url}
          width={616}
          height={617}
          className="object-cover"
          alt={image.alternativeText || "Hero Image"}
        />
      </div>
    </div>
  );
}
