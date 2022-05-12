import styles from "./App.module.css";

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import lookie from "lookie";

import Header from "src/components/Header";
import Footer from "src/components/Footer";
import ImportArea from "src/components/ImportArea";
import LandingSection from "src/components/LandingSection";
import IconPreviewArea from "src/components/IconPreviewArea";
import convertToSelectionFormat from "src/utils/convertToSelectionFormat";

export default function App() {
  const [icons, setIcons] = useState([]);
  const [iconSet, setIconSet] = useState();
  const [theme, setTheme] = useState(lookie.get("theme") || "dark");

  useEffect(() => {
    const initialIcons = lookie.get("icons") || [];
    setIcons(initialIcons);
  }, []);

  useEffect(() => {
    const formattedIcons = convertToSelectionFormat(icons);
    setIconSet(formattedIcons);
    lookie.set("icons", icons);

    document.body.dataset.theme = theme;
    lookie.set("theme", theme);
  }, [icons, theme]);

  return (
    <div className={styles.App}>
      <Toaster
        toastOptions={
          theme === "dark" && {
            style: {
              background: "#333",
              color: "#fff",
            },
          }
        }
      />
      <Header theme={theme} setTheme={setTheme} />
      <div className={styles.Content}>
        <ImportArea icons={icons} setIcons={setIcons} />
        {!!icons.length && (
          <IconPreviewArea
            iconSet={iconSet}
            icons={icons}
            setIcons={setIcons}
          />
        )}
        <LandingSection />
      </div>
      <Footer />
    </div>
  );
}
