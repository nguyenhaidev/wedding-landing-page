import { render } from "preact";
import { App } from "./app.tsx";
import "./index.css";
import i18n from "./i18n/i18n.ts";
import { I18nextProvider } from "react-i18next";

render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  document.getElementById("app") as HTMLElement
);
