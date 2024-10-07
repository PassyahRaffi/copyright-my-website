"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon, MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const listPage = [
    { title: "about", url: "/about" },
    { title: "project", url: "/project" },
    { title: "blog", url: "/blog" },
    { title: "contact", url: "/contact" },
  ];

  const listSocial = [
    {
      title: "Linkedin",
      image: "/icon/linkedin.svg",
      url: "https://www.linkedin.com/in/passyah-raffi/",
    },
    {
      title: "Instagram",
      image: "/icon/instagram.svg",
      url: "https://www.instagram.com/passyah_raffi/",
    },
  ];

  return (
    <div className="bg-[#111] text-gray-100 sticky-wrap">
      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-between items-center max-w-[1200px] mx-auto py-2">
        <Link href="/">
          <Image
            src="/favicon.ico"
            width={100}
            height={100}
            alt="logo-PR"
            className="rounded-full w-16 h-16 object-cover"
            loading="lazy"
          />
        </Link>
        <div className="flex justify-between items-center w-full max-w-[600px]">
          <ul className="flex gap-4">
            {listPage.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.url}
                  className="hover:opacity-50 transition-opacity duration-300"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-4">
            {listSocial.map((item, idx) => (
              <li key={idx}>
                <Link href={item.url}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-8 h-8"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="flex lg:hidden justify-between items-center max-w-[1200px] mx-auto py-2">
        <Link href="/">
          <Image
            src="/favicon.ico"
            alt="logo-PR"
            width={100}
            height={100}
            className="rounded-full w-14 h-14 object-cover"
            loading="lazy"
          />
        </Link>
        <button onClick={() => setIsOpen(true)}>
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <Transition as={Fragment} show={isOpen}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-[#111] shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-100"
                >
                  Navigation
                </Dialog.Title>
                <div className="mt-2">
                  <ul className="text-gray-100 space-y-4">
                    {listPage.map((item, idx) => (
                      <li
                        key={idx}
                        className="hover:opacity-50 transition-opacity duration-300"
                      >
                        <Link href={item.url} onClick={() => setIsOpen(false)}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-[#111] bg-gray-100 border border-transparent rounded-md hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                    <XIcon className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
