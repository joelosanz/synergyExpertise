"use client";
import React, { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { getStrapiURL } from "@/lib/utils"; // Asegúrate de importar la función correcta
import {SectionHeading} from "@/components/SectionHeading";

interface ImageData {
  id: number;
  url: string;
  alternativeText?: string;
}

export function ImageCarousel() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const sectionHeadingData = {
    id: 1,
    __component: "layout.section-heading",
    preHeading: "¡ Unete !",
    heading: "Pertenece a nuestra Familia",
    text: " ",
  };

  // Obtener imágenes desde Strapi
  async function fetchImages() {
    try {
      const response = await fetch(
        `${getStrapiURL()}/api/global?populate[carrusel][populate][images][populate]=*`
      );
      const data = await response.json();
      //console.log("Respuesta de la API:", data);

      if (data?.data?.carrusel?.images) {
        const fetchedImages = data.data.carrusel.images.map((img: any) => ({
          id: img.id,
          url: getStrapiURL() + img.image.url,
          alternativeText: img.image.alternativeText || "Imagen del carrusel",
        }));
        setImages(fetchedImages);
      } else {
        setError("No se encontraron imágenes.");
      }
    } catch (error) {
      setError("Hubo un error al cargar las imágenes.");
      console.error("Error al obtener imágenes:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImages();
  }, []);

  // Cambio automático de imágenes cada 5 segundos
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  if (loading) return <div>Cargando imágenes...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container>
      {/* Aquí llamamos al componente SectionHeading y le pasamos los datos */}
      <SectionHeading data={sectionHeadingData} />


      <div className="relative w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 flex items-center justify-center">
        <div className="relative flex w-[90%] h-[350px] overflow-x-hidden">
          {images.length > 0 && (
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 65}%)`, // Se mueve dejando ver un poco de la siguiente imagen
              }}
            >
              {images.map((image, index) => (
                <img
                  key={image.id}
                  src={image.url}
                  alt={image.alternativeText}
                  className={`w-[80%] h-full object-cover rounded-2xl opacity-40 shadow-lg transition-all duration-700 ${
                    index === currentIndex ? "scale-100" : "scale-90"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Botón anterior */}
        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
          }
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full shadow-md hover:bg-opacity-100 transition"
        >
          ◀
        </button>

        {/* Botón siguiente */}
        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
          }
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full shadow-md hover:bg-opacity-100 transition"
        >
          ▶
        </button>
      </div>
    </Container>
  );
}
