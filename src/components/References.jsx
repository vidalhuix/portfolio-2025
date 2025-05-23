import { useState, useEffect } from "react";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { IoChevronDownCircleOutline, IoChevronUpCircleOutline } from "react-icons/io5";


export const References = () => {
  const [showAll, setShowAll] = useState(false);
  const [reviewsToShow, setReviewsToShow] = useState(1);

  const reviews = [
    {
      name: "Andreas Grafström",
      tel: "070 493 38 61",
      text: "IT mentor. Campusbokhandeln intership. 2024.",
    },
    {
      name: "David Ballester",
      tel: "070 836 37 17",
      text: "IT mentor, Frontend.",
    },
    {
      name: "Rasmus Öhman",
      tel: "073 595 19 09",
      text: "Project leader PEAB. 2022.",
    },
    {
      name: "Carmen Orgaz",
      tel: "070 024 49 22",
      text: "Arkitema's administrative and assignment manager. 2016-2021.",
    },
    {
      name: "Marc De Dardel",
      tel: "070 262 01 86",
      text: "Arkitekt workmate. 2012-2015 and 2022-2023.",
    },
  ];

  useEffect(() => {
    const updateReviewsToShow = () => {
      const width = window.innerWidth;
      if (width > 1000) {
        setReviewsToShow(0);
      } else if (width > 700) {
        setReviewsToShow(2);
      } else {
        setReviewsToShow(1);
      }
    };

    updateReviewsToShow();
    window.addEventListener("resize", updateReviewsToShow);
    return () => window.removeEventListener("resize", updateReviewsToShow);
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleCopyNumber = (phoneNumber) => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert("Phone number copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div id="reviews" className="text-center">
      <h1 className="mb-4 text-center text-4xl font-bold text-gray-800">
        References
      </h1>
      <div className="mx-auto mt-6 flex max-w-5xl flex-wrap justify-center">
        {reviews
          .slice(0, showAll ? reviews.length : reviewsToShow)
          .map((review, index) => (
            <div
              key={index}
              className="m-4 flex min-h-[110px] w-72 flex-col justify-between  border border-gray-100 bg-white p-6 text-gray-700 shadow-lg"
            >
              {" "}
              <div className="flex flex-row justify-center items-center font-bold gap-2 mb-5">
                {review.name}
                <div
                  className="relative group flex items-center cursor-pointer"
                  onClick={() => handleCopyNumber(review.tel)}
                >
                  <div className="absolute right-full top-full font-normal ml-2 px-2 text-gray-600 py-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {review.tel}
                  </div>
                  <BsFillTelephonePlusFill className="text-gray-600 hover:text-[#145a5a]" />
                </div>
              </div>
              {review.text}
              <div className="mt-4 text-right text-sm text-teal-600"></div>
            </div>
          ))}
      </div>
      <button
        onClick={toggleShowAll}
        className="mt-6 mb-16 transform px-6  transition hover:scale-105 text-[#145a5a]"
      >
        {showAll ? <IoChevronUpCircleOutline size={50}/>
 : <IoChevronDownCircleOutline size={50}/>}
      </button>
    </div>
  );
};
