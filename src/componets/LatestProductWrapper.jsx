import React, { useEffect, useState } from 'react';
import StarRatigSvg from './StarRatigSvg';

const LatestProductWrapper = ({ sectionName, id }) => {
  const [cloths, setCloths] = useState();
  useEffect(() => {
    const getData = async () => {
      if (id) {
        const responce = await fetch(`http://127.0.0.1:8000/api/cloth_products/${id}/`);
        const data = await responce.json();
        setCloths((old) => data);
      } else {
        const responce = await fetch(`http://127.0.0.1:8000/api/cloth-products/`);
        const data = await responce.json();
        setCloths((old) => data);
      }
    };
    getData();
  }, [id]);

  const getFirstTwoWords = (text) => {
    const words = text.split(' ');
    if (words.length > 4) {
      return words.slice(0, 3).join(' ');
    } else {
      return words;
    }
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div id={id} className="flex flex-col gap-10 w-full  md:px-4 lg:px-6  ">
      <div className="px-2 pt-40 ">
        <h1 className="text-[32px] font-bold">{sectionName} Latest</h1>
        <p className="text-sm text-gray-400 italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          asperiores nemo inventore, amet eveniet repudiandae est cumque.
        </p>
      </div>

      <div className="flex  gap-8 relative ">
        <div className="border -left-6 z-10 top-40 absolute p-3 border-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </div>
        <div className="flex overflow-x-scroll  h-[500px] w-full  gap-8">
          {cloths?.map((product, index) => (
            <div key={product.id} className="flex h-full flex-col gap-4 relative">
              <div
                className={`relative h-[360px]   w-[340px] ${hoveredIndex === index ? 'hovered' : ''}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleLeave}
              >
                <img
                  className="object-cover  h-full w-full"
                  src={`https://res.cloudinary.com/ddw1upvx3/${product.image}`}
                  alt={product.name}
                />
                {hoveredIndex === index && (
                  <div className="absolute left-10 bottom-10">
                    This div appears after hover
                  </div>
                )}
              </div>
              <div className="flex  justify-between ">
                <div className="flex flex-col -my-2 gap-1">
                  <h4 className="text-[23px]  font-bold">{getFirstTwoWords(product.name)}..</h4>
                  <h5 className="text-gray-400 text-[18px] font-medium">${product.price}.00</h5>
                </div>
                <div className="flex gap-1">
                  <StarRatigSvg />
                  <StarRatigSvg />
                  <StarRatigSvg />
                  <StarRatigSvg />
                  <StarRatigSvg />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border -right-6 top-40 absolute p-3  border-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LatestProductWrapper;
