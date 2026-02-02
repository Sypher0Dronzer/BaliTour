
import React, { useState } from "react";

const faqData = [
  {
    question: "What is the destination of this group trip?",
    answer:
      "The group trip is to Bali, Indonesia, offering a mix of adventure, culture, and relaxation experiences.",
  },
  {
    question: "What are the travel dates for the Bali getaway?",
    answer:
      "The trip is scheduled from 15th May to 22nd May, with departure and return from Guwahati.",
  },
  {
    question: "What is the cost of the Bali package?",
    answer:
      "The package costs ₹1,01,000 per person, inclusive of all applicable taxes.",
  },
  {
    question: "What is included in the package price?",
    answer:
      "The package includes round-trip flights, airport transfers, accommodation in a 4-star hotel, and daily breakfast.",
  },
  {
    question: "Are flights and transfers included in the trip?",
    answer:
      "Yes, both flights and all necessary transfers are included in the package.",
  },
  {
    question: "What kind of accommodation is provided?",
    answer:
      "Guests will stay in a comfortable 4-star hotel with daily breakfast included.",
  },
  {
    question: "What activities are included in the itinerary?",
    answer:
      "The trip includes jungle swing, ATV adventure, sunrise jeep experience, hot springs, temple visits, waterfalls, Nusa Penida exploration, water sports, and the Kecak Fire Dance at Uluwatu Temple.",
  },
  {
    question: "Is this a group trip?",
    answer:
      "Yes, this is a hosted group trip with limited slots available.",
  },
  {
    question: "How many seats are available for this trip?",
    answer:
      "Slots are limited, so early booking is recommended to secure a spot.",
  },
  {
    question: "How can I book or get more information?",
    answer:
      "You can book or get more details by sending a DM or calling the provided contact numbers.",
  }
]



const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index)=> {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div className=" py-12">
      <div className="maxWidthForSections">

        <h1 className="sm:text-5xl text-3xl text-center gradient-text leading-tight font-semibold py-2 ">
          Frequently Asked Questions
        </h1>

        <div className="flex flex-col justify-center gap-2  mt-8">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className=" backdrop-blur-sm shadow-md shadow-violet-300/50 bg-violet-200
         text-violet-800
         ring-violet-400 py-2 rounded-lg relative"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className={`${openIndex==index? ' ' :''} w-full text-left  py-[10px] px-4 font-medium rounded-t-xl   flex items-center justify-between`}
                >
                  <p className="sm:text-lg text-sm">{faq.question}</p>
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${
                      openIndex === index ? "" : "rotate-180"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>

                <div
                  className={`
                    ${
                    openIndex === index
                      ? "  max-h-screen"
                      : " max-h-0 "
                  }  
                  transition-all duration-300 cubic overflow-hidden`}
                >
                  <div className="sm:px-5 sm:pb-5 px-4   ">
                    <p className="text-(--text2) sm:text-base text-xs">{faq.answer}</p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-[0%]  horizontal w-full"></div>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Faq











