import { useTranslation } from "react-i18next";

export default function PackingAndStay() {
  const { t } = useTranslation("translation", { keyPrefix: "packingAndStay" });

  return (
    <>
      <section
        id="packing-and-stay"
        className="bg-stone-300 py-[50px] lg:py-[100px] px-[75px]"
      >
        <label className="flex flex-col items-start text-3xl md:text-4xl lg:text-6xl font-cormorant">
          {t("label")}
        </label>
        <div className="flex mt-8 lg:mt-16 gap-8 md:flex-row flex-col">
          <div className="w-full text-left">
            <label className="font-playfair text-2xl">
              {t("packing.label")}
            </label>
            <p className="mt-5 font-playfair">
              {t("packing.address")
                .split("\n")
                .map((line) => (
                  <p className="py-1">{line}</p>
                ))}
            </p>
          </div>
          <div className="w-full text-left">
            <label className="font-playfair text-2xl">{t("stay.label")}</label>
            <p className="mt-5 font-playfair">
              {t("stay.address")
                .split("\n")
                .map((line) => (
                  <p className="py-1">{line}</p>
                ))}
            </p>
          </div>
        </div>
      </section>
      <div className="py-[300px] flex flex-col gap-6 items-center justify-center">
        <p className="md:w-[700px] font-cormorant text-6xl">
          {t("hopeToSeeYou")}
        </p>
      </div>
    </>
  );
}
