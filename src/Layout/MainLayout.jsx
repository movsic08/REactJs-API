import { Children, useState } from "react";

export default function MainLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <nav className="flex justify-between items-center p-5 bg-white dark:bg-gray-800 shadow-md">
          <div className="text-xl font-bold">Delayed Quotes</div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Dark Mode
          </button>
        </nav>
        <main className=" mx-auto container p-4">{children}</main>
      </div>
    </div>
  );
}
