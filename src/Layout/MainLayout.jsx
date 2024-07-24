import { useEffect, useState } from "react";

export default function MainLayout({ children }) {
  // Initialize darkMode state based on local storage
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <nav className="flex justify-between items-center p-5 bg-white dark:bg-gray-800 shadow-md">
          <div className="text-xl font-bold">Delayed Quotes</div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Dark Mode
          </button>
        </nav>
        <main className="mx-auto container p-4">{children}</main>
      </div>
    </div>
  );
}
