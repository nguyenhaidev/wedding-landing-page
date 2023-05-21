import { useTranslation } from "react-i18next";

export default function More() {
  const { t } = useTranslation("translation", { keyPrefix: "more" });

  return (
    <>
      <section id="more" className="p-[75px] w-screen">
        <div className="flex flex-col lg:flex-row p-[50px]">
          <span className="text-2xl w-full whitespace-nowrap pr-[150px] md:text-3xl lg:text-4xl font-cormorant">
            {t("label")
              .split("\n")
              .map((line) => (
                <div className="text-left">{line}</div>
              ))}
          </span>
          <div className="w-full font-cormorant text-xl">
            <div className="w-full lg:pr-[100px]">
              {t("description")
                .split("\n")
                .map((line) => (
                  <div className="py-1 text-left">{line}</div>
                ))}
            </div>
          </div>
        </div>
        <div className="flex gap-1 mt-14 flex-col md:flex-row">
          <img className="md:w-1/3" src="./img1.JPG" alt="" />
          <img className="md:w-1/3" src="./img2.JPG" alt="" />
          <img className="md:w-1/3" src="./img3.JPG" alt="" />
        </div>
        <div className="py-[200px] flex flex-col gap-6 items-center justify-center">
          <p className="md:w-[700px] font-cormorant text-6xl">{t("quote")}</p>
          <p className="font-raleway">{t("author")}</p>
        </div>
      </section>
      <div
        class="flex items-center justify-center w-screen h-[400px] md:h-[600px] lg:h-[80vh] bg-fixed bg-center bg-cover custom-img"
        style={{
          backgroundImage: "url('./parallax.webp')",
        }}
      ></div>
    </>
  );
}
