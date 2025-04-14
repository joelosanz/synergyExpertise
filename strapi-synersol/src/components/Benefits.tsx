"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { CheckIcon } from "@heroicons/react/20/solid";
import { getStrapiURL } from "@/lib/utils";

function iconSelect(iconKey: string) {
  switch (iconKey) {
    case "check":
      return <CheckIcon className="w-7 h-7 text-indigo-50" />;
    default:
      return null;
  }
}

interface BenefitItem {
  id: number;
  text: string;
  icon: string | null;
  heading: string;
}

interface BenefitsSection {
  id: number;
  heading: string;
  text: string;
  imageRight: boolean | null;
  image: {
    id: number;
    url: string;
    alternativeText: string | null;
    name: string;
  };
  item: BenefitItem[];
}

export function Benefits() {
  const [data, setData] = useState<BenefitsSection | null>(null);

  // Fetching data from the API
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:1337/api/global?populate[benefitsSection][populate][image][fields][0]=url&populate[benefitsSection][populate][image][fields][1]=alternativeText&populate[benefitsSection][populate][image][fields][2]=name&populate[benefitsSection][populate][item]=true"
      );
      const result = await response.json();
      setData(result.data.benefitsSection); // Set the benefitsSection data
    };
    
    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>; // Loading state

  const { heading, text, image, item, imageRight } = data;

  return (
    <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
      <div
        className={`flex items-center justify-center w-full lg:w-1/2 ${
          imageRight ? "lg:order-1" : ""
        }`}
      >
        <div>
          <Image
            src={getStrapiURL()+image.url}
            width={521}
            height={521}
            alt={image.alternativeText || image.name}
            className={"object-cover"}
          />
        </div>
      </div>

      <div
        className={`flex flex-wrap items-center w-full lg:w-1/2 ${
          imageRight ? "lg:justify-end" : ""
        }`}
      >
        <div>
          <div className="flex flex-col w-full mt-4">
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              {heading}
            </h3>

            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              {text}
            </p>
          </div>

          <div className="w-full mt-5">
            {item.map((item, index) => (
              <Benefit key={index} data={item}></Benefit>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

interface BenefitItemProps {
  data: BenefitItem;
}

function Benefit({ data }: Readonly<BenefitItemProps>) {
  if (!data) return null;
  const { heading, text, icon } = data;
  return (
    <div className="flex items-start mt-8 space-x-3">
      {icon && (
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-[#D92F11] rounded-md w-11 h-11 ">
          {iconSelect(icon)}
        </div>
      )}
      <div>
        <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
          {heading}
        </h4>
        {text && (
          <p className="mt-1 text-gray-500 dark:text-gray-400">{text}</p>
        )}
      </div>
    </div>
  );
}
