import { create } from "zustand";
import { persist } from "zustand/middleware";
import image1 from "../../public/one.jpeg";
import image2 from "../../public/two.jpeg";
import image3 from "../../public/three.jpeg";
import image4 from "../../public/four.jpeg";
import image5 from "../../public/five.png";
import image6 from "../../public/seven.jpeg";
import image11 from "../../public/one1.jpeg";
import image12 from "../../public/one2.png";
import image13 from "../../public/one3.jpeg";
import image14 from "../../public/one4.jpeg";
import image21 from "../../public/two1.jpeg";
import image22 from "../../public/two2.jpeg";
import image23 from "../../public/two3.jpeg";
import image31 from "../../public/three1.png";
import image32 from "../../public/three2.png";
import image33 from "../../public/three3.jpeg";


export const useStore = create(
  persist(
    (set) => ({
      DatadataServicesHome: [
        {
          id: 1,
          title: "Finding the Right Contractor",
          image: image1,
          details: [
            {
              id: 11,
              titleDetails: "Comprehensive contractor database",
              detailsDetails:
                "The website provides a vast database of contractors specializing in various fields such as construction, renovation, decoration, electricity, plumbing, and more.",
              imageDe: image11,
              book: false,
            },
            {
              id: 12,
              titleDetails: "Search filtering",
              detailsDetails:
                "You can search for contractors based on several criteria such as geographic location, specialization, ratings, and prices.",
              imageDe: image12,
              book: false,
            },
            {
              id: 13,
              titleDetails: "Comparing contractor bids",
              detailsDetails:
                "The website usually provides a system for comparing bids from different contractors, helping you choose the most suitable one for your project.",
              imageDe: image13,
              book: false,
            },
            {
              id: 14,
              titleDetails: "Contractor ratings",
              detailsDetails:
                "You can view ratings and experiences of previous customers of contractors, helping you make an informed decision.",
              imageDe: image14,
              book: false,
            },
          ],
        },
        {
          id: 2,
          title: "Planning and Design Services",
          image: image2,
          details: [
            {
              id: 21,
              titleDetails: "Engineering consultations",
              detailsDetails:
                "The website provides engineering consultations to help you design your project and determine the technical requirements.",
              imageDe: image21,
              book: false,
            },
            {
              id: 22,
              titleDetails: "Interior and exterior design",
              detailsDetails:
                "You can use interior and exterior designers to create modern and functional designs for your home or office.",
              imageDe: image22,
              book: false,
            },
            {
              id: 23,
              titleDetails: "3D visualization",
              detailsDetails:
                "Some websites offer 3D design services to allow you to see the final project before starting implementation.",
              imageDe: image23,
              book: false,
            },
          ],
        },
        {
          id: 3,
          title: "Project Management Services",
          image: image3,
          details: [
            {
              id: 31,
              titleDetails: "Full project management",
              detailsDetails:
                "The contractor takes over the management of all project stages, starting from planning and design to implementation and delivery.",
              imageDe: image31,
              book: false,
            },
            {
              id: 32,
              titleDetails: "Monitoring progress",
              detailsDetails:
                "The website provides tools for monitoring progress and ensuring adherence to the specified timeline and budget.",
              imageDe: image32,
              book: false,
            },
            {
              id: 33,
              titleDetails: "Problem solving",
              detailsDetails:
                "The contractor handles any problems that may arise during project implementation.",
              imageDe: image33,
              book: false,
            },
          ],
        },
        {
          id: 4,
          title: "Requesting quotes",
          image: image4,
          details: [
            {
              id: 40,
              titleDetails: "Requesting quotes",
              detailsDetails:
                "You can request quotes from several contractors to compare them and choose the most suitable offer.",
              imageDe: image4,
              book: false,
            },
          ],
        },
        {
          id: 5,
          title: "Articles and tips",
          image: image5,
          details: [
            {
              id: 50,
              titleDetails: "Articles and tips",
              detailsDetails:
                "The website provides articles and helpful tips on construction and renovation.",
              imageDe: image5,
              book: false,
            },
          ],
        },
        {
          id: 6,
          title: "Discussion forum",
          image: image6,
          details: [
            {
              id: 60,
              titleDetails: "Discussion forum",
              detailsDetails:
                "You can ask your questions and inquiries and discuss topics related to construction and renovation with experts and other customers.",
              imageDe: image6,
              book: false,
            },
          ],
        },
      ],

      addBook: (idOne, idTwo) =>
        set((state) => {
          let all = state.DatadataServicesHome;

          for (let i = 0; i < all.length; i++) {
            if (all[i].id == idOne) {
              for (let r = 0; r < all[i].details.length; r++) {
                if (all[i].details[r].id == idTwo) {
                  all[i].details[r].book = true;
                }
              }
            } else {
              console.log("nooo");
            }
          }

          return { DatadataServicesHome: all };
        }),

    }),
    {
      name: "businessData",
    }
  )
);


