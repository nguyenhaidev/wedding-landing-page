import { useTranslation } from "react-i18next";
import NavbarItem from "./NavbarItem";
import { useState } from "preact/hooks";

type Props = {};

interface NavbarItem {
  label: string;
  to: string;
}

export default function Navbar({}: Props) {
  const [showNav, setShowNav] = useState(false);

  const navbarItems: NavbarItem[] = [
    {
      label: "ourStory",
      to: "#our-story",
    },
    {
      label: "detail",
      to: "#detail",
    },
    {
      label: "packingAndStay",
      to: "#packing-and-stay",
    },
    {
      label: "more",
      to: "#more",
    },
  ];

  const renderNavbar = (mb = false) =>
    navbarItems.map((item) => (
      <NavbarItem
        onClick={() => setShowNav(false)}
        className={mb ? "block text-black" : "inline"}
        key={item.to}
        {...item}
      />
    ));

  return (
    <nav class="sticky top-0 bg-white w-screen px-[75px] py-[40px] flex justify-between">
      <a className="font-pinyon text-4xl cursor-pointer" href="/">
        L&L
      </a>
      <div className="font-raleway flex gap-3">
        <div className="md:hidden flex  duration-300">
          <button onClick={() => setShowNav(!showNav)}>
            <div class="space-y-2">
              <div class="w-8 h-0.5 bg-gray-600"></div>
              <div class="w-8 h-0.5 bg-gray-600"></div>
              <div class="w-8 h-0.5 bg-gray-600"></div>
            </div>
          </button>
          {showNav && (
            <div
              className={
                showNav
                  ? "fixed h-screen top-0 left-0 bg-stone-100 w-screen duration-300"
                  : "fixed h-screen w-0 top-0 left-0 bg-stone-300"
              }
            >
              <div className="text-left">
                <button
                  onClick={() => setShowNav(false)}
                  className="text-black p-3"
                >
                  X
                </button>
              </div>
              {renderNavbar(true)}
            </div>
          )}
        </div>
        <div className="md:flex hidden">{renderNavbar()}</div>
      </div>
    </nav>
  );
}
