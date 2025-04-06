import { useState, useEffect, useRef } from "react"
import { CiGlobe } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";

// Language options with country flags using emoji
const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "pt", name: "Portuguese", flag: "🇵🇹" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "zh", name: "Chinese", flag: "🇨🇳" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
]

export function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const dropdownRef = useRef(null)

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => setIsOpen(!isOpen)

  const selectLanguage = (language) => {
    setSelectedLanguage(language)
    setIsOpen(false)
  }

  return (
    <div className="relative bg-red-200" ref={dropdownRef}>
      {/* Dropdown trigger button */}
      <button
        className="flex items-center gap-2 border border-gray-300 bg-white px-2 md:px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <CiGlobe className="h-4 w-4" />
        <span>{selectedLanguage.name}</span>
        <IoChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white shadow-lg focus:outline-none z-10">
          <div className="py-1 max-h-50 md:max-h-80 overflow-auto">
            {languages.map((language) => (
              <button
                key={language.code}
                className={`flex w-full items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 ${
                  selectedLanguage.code === language.code ? "bg-gray-50 font-medium" : ""
                }`}
                onClick={() => selectLanguage(language)}
              >
                <span className="text-base">{language.flag}</span>
                <span>{language.name}</span>
                {selectedLanguage.code === language.code && (
                  <svg
                    className="ml-auto h-4 w-4 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

