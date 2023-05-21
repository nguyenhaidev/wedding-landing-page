import { useTranslation } from "react-i18next";

type Props = {
  className?: string;
  label: string;
  to: string;
  onClick?: () => void;
};

export default function NavbarItem({ className, label, to, onClick }: Props) {
  const { t } = useTranslation("translation", { keyPrefix: "navbar" });
  return (
    <a
      onClick={onClick}
      className={
        "px-2 py-2 uppercase text-gray-500 hover:text-indigo-700 font-mont " +
        className
      }
      href={to}
    >
      {t(label)}
    </a>
  );
}
