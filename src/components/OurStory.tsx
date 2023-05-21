import { useTranslation } from "react-i18next";

export default function OurStory() {
  const { t } = useTranslation("translation", { keyPrefix: "ourStory" });

  return (
    <section id="our-story" className="w-screen flex flex-col gap-3">
      <div className="px-[50px] lg:px-[75px] lg:h-[50vh] pt-[100px] md:mt-0 font-cormorant flex flex-col justify-center lg:justify-end items-start gap-5">
        <div className="text-2xl lg:text-3xl xl:text-4xl">
          {t("gettingMerried")}
        </div>
        <div className="text-3xl lg:text-7xl xl:text-8xl uppercase">
          {t("name")}
        </div>
      </div>
      <div className="lg:px-[75px] flex flex-col lg:flex-row justify-between w-full mt-6 gap-3">
        <div className="px-[50px] mb-[100px] lg:mt-0 lg:px-0 flex flex-col gap-2 items-start font-mont font-light text-sm lg:text-xl">
          <time>{t("time")}</time>
          <div>{t("location")}</div>
        </div>
        <img
          className="h-[600px] w-auto object-cover"
          src="../ourStory.JPG"
          alt=""
        />
      </div>
    </section>
  );
}
