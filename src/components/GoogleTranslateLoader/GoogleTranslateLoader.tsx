"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

export default function LanguageSelectorFlags() {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "http://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,pt,es,fr,de,it,ja,ko,ru,zh-CN,zh-TW",
        },
        "google_translate_element",
      );
    };

    setTimeout(addGoogleTranslateScript, 0);
  }, []);

  const handleLanguageChange = (lang: string) => {
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 p-2 border rounded">
            <Globe className="w-4 h-4" />
            <span>Idioma</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => handleLanguageChange("pt")}>
            <Image
              src="/flags/br.png"
              alt="Português"
              width={20}
              height={20}
              className="mr-2"
            />
            Português
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
            <Image
              src="/flags/us.png"
              alt="Inglês"
              width={20}
              height={20}
              className="mr-2"
            />
            Inglês
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLanguageChange("es")}>
            <Image
              src="/flags/es.png"
              alt="Espanhol"
              width={20}
              height={20}
              className="mr-2"
            />
            Espanhol
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLanguageChange("fr")}>
            <Image
              src="/flags/fr.png"
              alt="Francês"
              width={20}
              height={20}
              className="mr-2"
            />
            Francês
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div id="google_translate_element" style={{ display: "none" }}></div>
    </>
  );
}
