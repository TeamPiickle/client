import { useEffect } from "react";
import TagManager from "react-gtm-module";

export default function useGTMPage() {
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: "page_path",
        customParameter: "/arrive",
      },
    });
  }, []);
}
