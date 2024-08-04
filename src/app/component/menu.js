"use client";

import { useState } from "react";
import Image from "next/image";
import Profile from "../../../public/images/avatar1.png";
import { IoChatbox } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { MdContactPhone, MdEmail, MdWork } from "react-icons/md";
import { FaLinkedin, FaHome, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row md:min-h-screen">
      <div className="fixed md:static z-10 flex flex-col w-full lg:w-80 text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800">
        <div className="flex-shrink-0 px-2 py-4 md:px-8 md:py-6 flex flex-row items-center justify-between">
          <div className="flex flex-row md:flex-col items-center">
            <Image
              src={Profile}
              alt="Profile Picture"
              className="rounded-full w-14 h-14 md:w-24 md:h-24"
            />
            <div className="mt-0 md:mt-4 text-left md:text-center px-4 md:px-0">
              <p className="text-base lg:text-xl font-semibold tracking-normal md:tracking-widest text-gray-900 uppercase rounded-lg dark:text-white">
                Aravinthan R S
              </p>
              <p className="text-sm lg:text-base text-gray-900 uppercase dark:text-white">
                Software Developer
              </p>
            </div>
          </div>
          <button
            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            onClick={() => setOpen(!open)}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path
                className={!open ? "block" : "hidden"}
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
              <path
                className={open ? "block" : "hidden"}
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <nav
          className={`flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center place-content-center mb-6 text-xl gap-4">
            <Link
              className="border-primary border-2 p-2 rounded-full"
              href="https://www.linkedin.com/in/aravinthan-sankaran/"
              target="_blank"
            >
              <FaLinkedin className="w-6 h-6 " />
            </Link>
            <Link
              className="border-primary border-2 p-2 rounded-full"
              href="https://github.com/AravinthanSankaran"
              target="_blank"
            >
              <FaGithub className="w-6 h-6" />
            </Link>
            <Link
              className="border-primary border-2 p-2 rounded-full"
              href="mailto:aravinthanrsnkl@gmail.com"
              target="_blank"
            >
              <MdEmail className="w-6 h-6" />
            </Link>
            <Link
              className="border-primary border-2 p-2 rounded-full"
              href="tel:+917708710727"
              target="_blank"
            >
              <MdContactPhone className="w-6 h-6" />
            </Link>
          </div>
          <a
            className="flex px-4 py-2 mt-2 text-base font-semibold text-gray-900 bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="/"
          >
            <FaHome className="mr-3 w-5 h-5" />
            Home
          </a>

          <a
            className="flex px-4 py-2 mt-2 text-base font-semibold text-gray-900 bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="/about"
          >
            <IoChatbox className="mr-3 w-5 h-5" />
            About
          </a>

          <a
            className="flex px-4 py-2 mt-2 text-base font-semibold text-gray-900 bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="/experience"
          >
            <MdWork className="mr-3 w-5 h-5" />
            Experience
          </a>
          <a
            className="flex px-4 py-2 mt-2 text-base font-semibold text-gray-900 bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="/project"
          >
            <GrProjects className="mr-3 w-5 h-5" />
            Projects
          </a>

          <div className="flex flex-col px-4 py-2 mt-2 text-base font-semibold text-gray-900 bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
            <p className="flex items-center">
              <MdContactPhone className="mr-3 w-5 h-5" />
              77087 - 10727
            </p>
            <p className="flex items-center py-2 mt-2">
              <MdEmail className="mr-3 w-5 h-5" />
              aravinthanrsnkl@gmail.com
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Profile from "../../../public/images/avatar1.png";
// import { IoChatbox } from "react-icons/io5";
// import { GrProjects } from "react-icons/gr";
// import { MdContactPhone, MdEmail, MdWork } from "react-icons/md";
// import { FaLinkedin, FaHome, FaGithub } from "react-icons/fa";
// import Link from "next/link";

// export default function Sidebar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="flex flex-col md:flex-row">
//       {/* Sidebar for desktop and mobile */}
//       <div className={`fixed top-0 left-0 w-full md:w-80 text-gray-700 bg-gray-800 dark:text-gray-200 dark:bg-gray-800 md:static md:flex md:flex-col md:h-screen md:overflow-y-auto md:border-r md:border-gray-700 ${open ? 'block' : 'hidden md:block'}`}>
//         <div className="flex-shrink-0 px-2 py-4 md:px-8 md:py-6 flex flex-row items-center justify-between">
//           <div className="flex flex-row md:flex-col items-center">
//             <Image
//               src={Profile}
//               alt="Profile Picture"
//               className="rounded-full w-14 h-14 md:w-24 md:h-24"
//             />
//             <div className="mt-0 md:mt-4 text-left md:text-center px-4 md:px-0">
//               <p className="text-base lg:text-xl font-semibold tracking-normal md:tracking-widest text-gray-900 uppercase rounded-lg dark:text-white">
//                 Aravinthan R S
//               </p>
//               <p className="text-sm lg:text-base text-gray-900 uppercase dark:text-white">
//                 Software Developer
//               </p>
//             </div>
//           </div>
//           <button
//             className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
//             onClick={() => setOpen(!open)}
//           >
//             <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
//               <path
//                 className={!open ? "block" : "hidden"}
//                 fillRule="evenodd"
//                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
//                 clipRule="evenodd"
//               ></path>
//               <path
//                 className={open ? "block" : "hidden"}
//                 fillRule="evenodd"
//                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//           </button>
//         </div>

//         <nav
//           className={`flex-grow md:block px-4 pb-4 md:pb-0 ${open ? "block" : "hidden"}`}
//         >
//           <div className="flex items-center place-content-center mb-6 text-xl gap-4">
//             <Link
//               className="border-primary border-2 p-2 rounded-full"
//               href="https://www.linkedin.com/in/aravinthan-sankaran/"
//               target="_blank"
//             >
//               <FaLinkedin className="w-6 h-6" />
//             </Link>
//             <Link
//               className="border-primary border-2 p-2 rounded-full"
//               href="https://github.com/AravinthanSankaran"
//               target="_blank"
//             >
//               <FaGithub className="w-6 h-6" />
//             </Link>
//             <Link
//               className="border-primary border-2 p-2 rounded-full"
//               href="mailto:aravinthanrsnkl@gmail.com"
//               target="_blank"
//             >
//               <MdEmail className="w-6 h-6" />
//             </Link>
//             <Link
//               className="border-primary border-2 p-2 rounded-full"
//               href="tel:+917708710727"
//               target="_blank"
//             >
//               <MdContactPhone className="w-6 h-6" />
//             </Link>
//           </div>
//           <a
//             className="flex px-4 py-2 mt-2 text-base font-semibold text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
//             href="/"
//           >
//             <FaHome className="mr-3 w-5 h-5" />
//             Home
//           </a>

//           <a
//             className="flex px-4 py-2 mt-2 text-base font-semibold text-gray-900 bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
//             href="/about"
//           >
//             <IoChatbox className="mr-3 w-5 h-5" />
//             About
//           </a>

//           <a
//             className="flex px-4 py-2 mt-2 text-base font-semibold text-gray-900 bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
//             href="/experience"
//           >
//             <MdWork className="mr-3 w-5 h-5" />
//             Experience
//           </a>
//           <a
//             className="flex px-4 py-2 mt-2 text-base font-semibold text-gray-900 bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
//             href="/project"
//           >
//             <GrProjects className="mr-3 w-5 h-5" />
//             Projects
//           </a>

//           <div className="flex flex-col px-4 py-2 mt-2 text-base font-semibold text-gray-900 bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
//             <p className="flex items-center">
//               <MdContactPhone className="mr-3 w-5 h-5" />
//               77087 - 10727
//             </p>
//             <p className="flex items-center py-2 mt-2">
//               <MdEmail className="mr-3 w-5 h-5" />
//               aravinthanrsnkl@gmail.com
//             </p>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }
