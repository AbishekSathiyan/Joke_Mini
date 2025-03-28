import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoke, setCategory } from "./slices/jokeSlice";
import "./App.css";
import {
  IoLaptopOutline, // Use IoLaptopOutline as an alternative to IoMdLaptop
  IoLogoGithub,
  IoMail,
} from "react-icons/io5";

function App() {
  const dispatch = useDispatch();
  const { joke, loading, error, category } = useSelector((state) => state.joke);

  useEffect(() => {
    dispatch(fetchJoke(category));
  }, [dispatch, category]);

  const handleCategoryChange = (e) => {
    dispatch(setCategory(e.target.value));
  };

  return (
    <div className="body">
      <div className="content-box">
        <h1>Chuck Norris Random Joke 😂</h1>

        <div>
          <label
            htmlFor="category"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Choose a Joke Category:
          </label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="select-dropdown"
          >
            <option value="">Random 😄</option>
            <option value="animal">Animal 🦁</option>
            <option value="dev">Developer 💻</option>
            <option value="celebrity">Celebrity 🌟</option>
            <option value="explicit">Explicit 🔥</option>
          </select>
        </div>

        <div className="text-message">
          {loading ? (
            <p>Loading... ⏳</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <p>{joke}</p>
          )}
        </div>

        <button onClick={() => dispatch(fetchJoke(category))}>
          Get New Joke 😅
        </button>

        {/* Developer Info Section */}
        <div className="developer-info">
          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">
            Developer Info
          </h2>

          <div className="developer-profile flex items-center space-x-4">
            <img
              src="/assets/Mine.jpg" // Correct path to local image in the public folder
              alt="Developer Profile"
              className="developer-image w-24 h-24 rounded-full"
            />
            <div>
              <p className="text-gray-700">
                Developed by <strong>Abishek S</strong>
              </p>
              <p className="text-gray-700">
                👨‍💻 Developer Info
                <br />
                Abishek S
                <br />
                Full Stack Developer
                <br />
                🎓 Master of Computer Applications
                <br />
                Passionate about building scalable web applications with modern
                technologies. Skilled in MERN Stack Development.
              </p>

              <div className="social-links mt-4">
                <p className="text-gray-700">
                  <a
                    href="https://github.com/AbishekSathiyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700 flex items-center"
                  >
                    <IoLogoGithub size={20} className="mr-2" />{" "}
                    {/* GitHub Icon */}
                    AbishekSathiyan
                  </a>
                </p>
                <p className="text-gray-700">
                  <a
                    href="mailto:abisheksathiyan.2002@gmail.com"
                    className="text-pink-500 hover:text-pink-700 flex items-center"
                  >
                    <IoMail size={20} className="mr-2" /> {/* Email Icon */}
                    <span>abisheksathiyan.2002@gmail.com</span>
                  </a>
                </p>

                <p className="text-gray-700">
                  <a
                    href="https://abisheksathiyan.github.io/Abishek_Portfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700"
                  >
                    <IoLaptopOutline size={20} className="mr-2" />{" "}
                    {/* Laptop Icon */}
                    Portfolio
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
