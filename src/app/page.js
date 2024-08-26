import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import { RiFacebookBoxFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";





export default function Home() {
  return (
    <>
      <Nav />

      <section className="container mx-auto p-6 flex lg:flex-row flex-col-reverse">
        <div className="lg:w-1/2 w-full flex flex-col lg:items-start space-y-5 items-center">
          <h1 className="font-bold lg:text-5xl text-3xl text-center lg:text-start">
            Rapidly build modern websites without ever leaving your HTML.
          </h1>
          <p className="text-center lg:text-start">
            A utility-first CSS framework packed with classes like flex, pt-4,
            text-center and rotate-90 that can be composed to build any design,
            directly in your markup.
          </p>
          <button className="button-style">Get Started</button>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center mb-7 lg:mb-0">
          <Image
            src="/undraw_video_games_x1tr.svg"
            alt=""
            width={400}
            height={400}
          />
        </div>
      </section>

      <section className="container mx-auto p-6 flex flex-col my-8 items-center space-y-8">
        <h1 className="font-bold text-3xl">
          “Best practices” don’t actually work.
        </h1>
        <p className="text-center">
          ’ve written a few thousand words on why traditional “semantic class
          names” are the reason CSS is hard to maintain, but the truth is you’re
          never going to believe me until you actually try it. If you can
          suppress the urge to retch long enough to give it a chance, I really
          think you’ll wonder how you ever worked with CSS any other way.
        </p>
        <div className="flex w-full lg:space-x-5 flex-col lg:flex-row items-center justify-center space-y-3">
          <div className="lg:w-1/3 bg-slate-100 rounded-lg  space-y-3 flex flex-col justify-center items-center border border-slate-300 p-6">
            <Image
              src="/person1.jpg"
              alt=""
              width={70}
              height={70}
              className="rounded-full -mt-12"
            />
            <h3 className="font-bold">Adam Sandler</h3>
            <p className="text-sm text-center">
              The way I wrote it changed frequently. It’s not a coincidence
              Tailwind was released the same year. It might look wrong, but
              spend time with it and you’ll realize semantic CSS was a 20 year
              mistake.
            </p>
          </div>
          <div className="lg:w-1/3 bg-slate-100 rounded-lg  space-y-3 flex flex-col justify-center items-center border border-slate-300 p-6">
            <Image
              src="/person1.jpg"
              alt=""
              width={70}
              height={70}
              className="rounded-full -mt-12"
            />
            <h3 className="font-bold">Adam Sandler</h3>
            <p className="text-sm text-center">
              The way I wrote it changed frequently. It’s not a coincidence
              Tailwind was released the same year. It might look wrong, but
              spend time with it and you’ll realize semantic CSS was a 20 year
              mistake.
            </p>
          </div>
          <div className="lg:w-1/3 bg-slate-100 rounded-lg  space-y-3 flex flex-col justify-center items-center border border-slate-300 p-6">
            <Image
              src="/person1.jpg"
              alt=""
              width={70}
              height={70}
              className="rounded-full -mt-12"
            />
            <h3 className="font-bold">Adam Sandler</h3>
            <p className="text-sm text-center">
              The way I wrote it changed frequently. It’s not a coincidence
              Tailwind was released the same year. It might look wrong, but
              spend time with it and you’ll realize semantic CSS was a 20 year
              mistake.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-orange-500">
        <div className="flex lg:justify-between container lg:mx-auto px-6 py-14 flex-col lg:flex-row mx-auto lg:space-y-0 space-y-5 justify-center items-center">
          <h1 className="lg:text-4xl text-3xl text-center lg:text-start text-white font-bold">
            Move even faster with Tailwind UI.
          </h1>
          <button className="bg-white text-orange-500 rounded-full lg:px-7 lg:py-4 px-7 py-4 hover:bg-slate-800 transition-all ease-in-out">
            Start Here
          </button>
        </div>
      </section>

      <footer className="bg-slate-900">
        <div className="flex flex-col lg:flex-row  bg-slate-400-500 container mx-auto px-6 py-20">
          <div className="flex-1 flex flex-col space-y-9 self-center lg:self-none  ">
            <h3 className="text-white order-2 lg:order-none mt-5 lg:mt-0">
              Copyright © 2023, All Rights Reserved
            </h3>
            <Image src="/logo-dark.png" alt="" width={300} height={100} />
            <div className="flex lg:space-x-4 self-center space-x-5 lg:self-start">
              <span>
                <RiFacebookBoxFill className="text-white w-8 h-8" />
              </span>
              <span>
                <BsInstagram className="text-white w-8 h-8" />
              </span>
              <span>
                <FaYoutube className="text-white w-8 h-8" />
              </span>
              <span>
                <BsLinkedin className="text-white w-8 h-8" />
              </span>
              <span>
                <FaTwitter className="text-white w-8 h-8" />
              </span>
            </div>
          </div>
          <div className="flex-1  justify-around lg:flex hidden">
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-white">Home</h3>
              <h3 className="font-bold text-white">about</h3>
              <h3 className="font-bold text-white">Contact</h3>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-white">Important</h3>
              <h3 className="font-bold text-white">Privacy</h3>
              <h3 className="font-bold text-white">Credits</h3>
            </div>
          </div>
          <div className="flex-1  flex-col items-end justify-between lg:flex hidden">
            <div className="flex space-x-5">
              <input type="text" placeholder="Subscribe to NewsLetter" className="text-slate-300 px-7 py-2 rounded-2xl" />
              <button className="bg-orange-500 text-white px-7 py-2 rounded-full">Go</button>
            </div>
            <div>
              <h3 className="text-white">Copyright © 2023, All Rights Reserved</h3>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
