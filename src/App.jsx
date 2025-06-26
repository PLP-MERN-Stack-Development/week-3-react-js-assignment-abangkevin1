import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ApiData from "./components/ApiData";
import { useState } from "react"; 
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      <Layout>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          {/* Navbar component will go here */}
          <header className="bg-white dark:bg-gray-800 shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold">Abang Task Manager</h1>
            </div>
          </header>

          <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
              <div className="flex flex-col items-center justify-center">
                <p className="text-lg mb-4">
                  Edit{" "}
                  <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">
                    src/App.jsx
                  </code>{" "}
                  and save to test HMR
                </p>

                <div className="flex items-center gap-4 my-4">
                  <button
                    onClick={() => setCount((count) => count - 1)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xl font-bold">{count}</span>
                  <button
                    onClick={() => setCount((count) => count + 1)}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                  >
                    +
                  </button>
                </div>

                <button onClick={toggleTheme} className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700">
                  {theme === "dark" ? "🌙" : "☀️"}
                </button>

                <p className="text-gray-500 dark:text-gray-400 mt-4">
                  Implement your TaskManager component here
                </p>
              </div>
            </div>

            {/* API data display will go here */}
            <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">API Data</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Fetch and display data from an API here
              </p>
            </div>

            <div className="mt-8">
              <Card className="transition-transform duration-300 hover:scale-105">
                <h2 className="text-xl font-bold mb-2">Responsive Card</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  This card grows on hover and adapts to screen size.
                </p>
              </Card>
            </div>
          </main>

          {/* Footer component will go here */}
          <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Abang Task Manager. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
        <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <div className="mt-8">
                  <ApiData />
                </div>
              </>
            } />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;