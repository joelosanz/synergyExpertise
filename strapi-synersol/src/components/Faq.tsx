"use client";
import React, { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { getStrapiURL } from "@/lib/utils"; // Asegúrate de que esta función esté definida correctamente

interface FaqData {
  id: number;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export function Faq() {
  const [faqData, setFaqData] = useState<FaqData[] | null>(null); // Para almacenar los datos de FAQ
  const [loading, setLoading] = useState<boolean>(true); // Para manejar el estado de carga
  const [error, setError] = useState<string | null>(null); // Para manejar posibles errores

  // Función para obtener los datos de la API
  async function fetchFaqData() {
    try {
      const response = await fetch(`${getStrapiURL()}/api/global?populate[faq][populate][faqs]=*`);
      const data = await response.json();
      console.log("Respuesta de la API:", data); // Para depurar
      if (data && data.data && data.data.faq && data.data.faq.faqs) {
        setFaqData(data.data.faq.faqs); // Establecer los datos de FAQ en el estado
      } else {
        setError("No se encontraron preguntas frecuentes.");
      }
    } catch (error) {
      setError("Hubo un error al cargar los datos.");
      console.error("Error al obtener los datos:", error);
    } finally {
      setLoading(false); // Detener el estado de carga
    }
  }

  // Llamada a la función fetchFaqData cuando el componente se monta
  useEffect(() => {
    fetchFaqData();
  }, []);

  // Si estamos cargando los datos, mostramos un mensaje de carga
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Si hubo un error, lo mostramos
  if (error) {
    return <div>{error}</div>;
  }

  // Si no hay datos de FAQ, mostramos un mensaje
  if (!faqData || faqData.length === 0) {
    return <div>No hay preguntas frecuentes disponibles en este momento.</div>;
  }

  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqData.map((item) => (
          <div key={item.id} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-[#D92F11] focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}
