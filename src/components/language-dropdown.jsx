import { useState, useEffect, useRef } from "react"
import { CiGlobe } from "react-icons/ci"
import { IoChevronDown } from "react-icons/io5"
import { useParams, useNavigate, useLocation } from 'react-router'

// Language options with flags
const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "French", flag: "🇫🇷" },
]
// const languages = [
//   { code: "en", name: "English", flag: "🇬🇧" },
//   { code: "es", name: "Spanish", flag: "🇪🇸" },
//   { code: "fr", name: "French", flag: "🇫🇷" },
//   { code: "de", name: "German", flag: "🇩🇪" },
//   { code: "it", name: "Italian", flag: "🇮🇹" },
//   { code: "pt", name: "Portuguese", flag: "🇵🇹" },
//   { code: "ru", name: "Russian", flag: "🇷🇺" },
//   { code: "ja", name: "Japanese", flag: "🇯🇵" },
//   { code: "zh-CN", name: "Chinese (Simplified)", flag: "🇨🇳" },
//   { code: "ar", name: "Arabic", flag: "🇸🇦" },
// ]

export function LanguageDropdown({ currentLang = 'en' }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(languages.find(lang => lang.code === currentLang) || languages[0])
  const dropdownRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()
  const { hotelName } = useParams()

  // Update selected language when currentLang changes
  useEffect(() => {
    const newLang = languages.find(lang => lang.code === currentLang)
    if (newLang) {
      setSelectedLanguage(newLang)
    }
  }, [currentLang])

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

  // Select language and navigate to the correct URL
  const selectLanguage = (language) => {
    setSelectedLanguage(language)
    setIsOpen(false)

    // Get the current path without the language prefix
    const currentPath = location.pathname
    const pathWithoutLang = currentPath.split('/').slice(2).join('/')
    
    // Construct the new URL with the selected language
    let newPath = `/${language.code}`
    if (pathWithoutLang) {
      newPath += `/${pathWithoutLang}`
    }

    // Navigate to the new URL
    navigate(newPath)

    // Wait for Google Translate to be fully loaded
    const checkAndChangeLanguage = () => {
      const googleCombo = document.querySelector(".goog-te-combo")
      if (googleCombo) {
        // Store the current scroll position
        const scrollPosition = window.scrollY;
        
        // Change the language
        googleCombo.value = language.code
        const event = new Event('change', { bubbles: true })
        googleCombo.dispatchEvent(event)

        // For English, we need to remove the translation
        if (language.code === 'en') {
          // Remove the translation class from body
          document.body.classList.remove('translated-ltr', 'translated-rtl')
          // Remove the translation iframe
          const iframe = document.querySelector('.goog-te-banner-frame')
          if (iframe) iframe.remove()
        }

        // Restore scroll position after a short delay
        setTimeout(() => {
          window.scrollTo(0, scrollPosition)
        }, 100)
      } else {
        // If Google Translate isn't ready yet, try again in 100ms
        setTimeout(checkAndChangeLanguage, 100)
      }
    }

    checkAndChangeLanguage()
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
