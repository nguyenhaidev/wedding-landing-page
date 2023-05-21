import { useTranslation } from "react-i18next";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";

export default function Detail() {
  const { t } = useTranslation("translation", { keyPrefix: "detail" });

  return (
    <section
      id="detail"
      className="bg-stone-300 lg:mt-[-100px] py-[50px] lg:pt-[250px] lg:pb-[150px] px-[75px]"
    >
      <label className="flex flex-col items-start text-3xl md:text-4xl lg:text-6xl font-cormorant">
        <div className="">{t("label1")}</div>
        <div className="">{t("label2")}</div>
      </label>
      <div className="flex mt-8 lg:mt-16 gap-8 md:flex-row flex-col">
        <img
          src="./detail.webp"
          alt="detail"
          className="w-full md:w-[300px] lg:w-[500px] object-contain object-center"
        />
        <div className="text-left md:px-10 lg:px-[80px] py-5 lg:text-4xl">
          <ol className="font-cormorant list-decimal font-normal">
            <li className="pl-5">
              <label className="font-bold">{t("ceremony.label")}</label>
              <div className="mt-2">{t("ceremony.value")}</div>
            </li>
            <li className="pl-5 mt-6">
              <label className="font-bold">{t("reception.label")}</label>
              <div className="mt-2">
                {t("reception.value")
                  .split("\n")
                  .map((line) => (
                    <p className="py-1">{line}</p>
                  ))}
              </div>
              {/* <div className="map">
                <MapContainer
                  center={[51.505, -0.09]}
                  zoom={13}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </MapContainer>
              </div> */}
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
