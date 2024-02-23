import React, { useEffect, useRef, useState } from "react";


DropdownLanguages.propTypes = {};
const languages = [
  {
    languageName: "English",
    languageAcronym: "EN",
  },
  {
    languageName: "French",
    languageAcronym: "FR",
  },
  {
    languageName: "Italian",
    languageAcronym: "IT",
  },
  {
    languageName: "Spanish",
    languageAcronym: "ES",
  },
  {
    languageName: "Dutch",
    languageAcronym: "NL",
  },
  {
    languageName: "Portuguese",
    languageAcronym: "PT",
  },
];

function DropdownLanguages({ isOpenSidebar }) {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const [currentLanguageAcronym, setCurrentLanguageAcronym] = useState("EN");
  const [currentLanguageName, setCurrentLanguageName] = useState("English");

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisibility(false);
    }
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      handleClickOutside(event);
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const toggleDropdown = () => {
    setDropdownVisibility(!isDropdownVisible);
  };

  const handleSelectLanguage = (e, language) => {
    setCurrentLanguageAcronym(language.languageAcronym);
    setCurrentLanguageName(language.languageName);
    setDropdownVisibility(!isDropdownVisible);
  };
  return (
    <div
      ref={dropdownRef}
      className={`${isOpenSidebar ? "" : "hidden"} sm:relative sm:inline-flex sm:items-center`}
    >
      <button
        onClick={toggleDropdown}
        className={
          `${isOpenSidebar ? 'py-[10px] w-[202px] justify-between' : ''} flex h-[30px] sm:w-[72px] items-center justify-start gap-[3px] rounded-[52px] bg-white bg-opacity-10 py-2.5 pl-[15px] pr-2.5`
        }
      >
        <div className={`${isOpenSidebar ? 'uppercase' : ''} text-center font-['Figtree'] text-base font-bold leading-normal text-white`}>
          {isOpenSidebar ? currentLanguageName : currentLanguageAcronym}
        </div>
        <img
          className={
            isDropdownVisible
              ? `relative h-[22px] w-[22px] rotate-180`
              : `relative h-[22px] w-[22px]`
          }
          src="/icons/fi_chevron-down.svg"
          alt="Dropdown Icon"
        />
      </button>

      {isDropdownVisible && (
        <div
          className={`absolute ${isOpenSidebar ? "bottom-9 right-3" : "left-0 top-9"} z-10 flex w-[150px] flex-col items-start justify-start overflow-hidden rounded-[10px] backdrop-blur-[42px]`}
        >
          {languages.map((language, index) => {
            const isLastItem = index === languages.length - 1;

            return (
              <div
                key={`${language.languageName}${index}`}
                className={`h-[42px] self-stretch from-lime-300 to-rose-400 px-4 py-3 hover:cursor-pointer hover:bg-gradient-to-r ${isLastItem ? "" : "border-b border-white border-opacity-20"
                  } inline-flex items-center justify-start gap-2.5`}
                onClick={(e) => handleSelectLanguage(e, language)}
              >
                <div className="text-base font-medium leading-normal text-white">
                  {language.languageName}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DropdownLanguages;
