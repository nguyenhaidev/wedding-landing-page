import { useTranslation } from "react-i18next";
import NavbarItem from "./NavbarItem";

type Props = {};

interface NavbarItem {
  label: string;
  to: string;
}

export default function Footer({}: Props) {
  const { t } = useTranslation("translation", { keyPrefix: "footer" });

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

  const renderNavbar = navbarItems.map((item) => (
    <NavbarItem
      className="font-playfair block capitalize px-0 text-black"
      key={item.to}
      {...item}
    />
  ));

  return (
    <footer class="w-screen px-[75px] py-[50px] flex md:flex-row flex-col justify-between bg-stone-300 gap-5">
      <div className="w-full font-playfair text-lg md:text-xl lg:text-2xl text-left text-black">
        {t("giveACall")}
        <br />
        Phuoc Loc: <a href="tel:+84329344868">+84 329 344 868</a>
      </div>
      <div className="w-full md:text-right text-left">{renderNavbar}</div>
    </footer>
  );
}
