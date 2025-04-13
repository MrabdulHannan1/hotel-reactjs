import { useState, useEffect, useRef } from "react"
import { CiGlobe } from "react-icons/ci"
import { IoChevronDown } from "react-icons/io5"

// Language options with flags
const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "pt", name: "Portuguese", flag: "🇵🇹" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "zh-CN", name: "Chinese (Simplified)", flag: "🇨🇳" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
]

export function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Select language and trigger Google Translate
  const selectLanguage = (language) => {
    setSelectedLanguage(language)
    setIsOpen(false)

    const googleCombo = document.querySelector(".goog-te-combo")
    if (googleCombo) {
      googleCombo.value = language.code
      googleCombo.dispatchEvent(new Event("change"))
    }
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 bg-transparent px-2 md:px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiGlobe className="h-4 w-4" />
        <span>{selectedLanguage.name}</span>
        <IoChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white shadow-lg z-10">
          <div className="py-1 max-h-60 overflow-auto">
            {languages.map((language) => (
              <button
                key={language.code}
                className={`flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 ${
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
