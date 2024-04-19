import "./App.css";
import Chatscreen from "./comp/chat/chatscreen";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function App() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
        sphinx.
      </h1>
      <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
        Your digital AI friend, learn everything you care about.
      </p>
      <Chatscreen></Chatscreen>
      <div className="flex justify-center">
        <a
          href="https://veyselozturk.com.tr/"
          target="_blank"
          className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400"
        >
          Copyright© Veysel OZTURK
        </a>
        </div>
        <div className="flex justify-end">
        <a
        href="https://github.com/VeysellOZTURK"
        className="pr-1"
        ><AiFillGithub className="w-8 h-8"></AiFillGithub></a>
        <a href="https://www.linkedin.com/in/veyselozturk41/"><AiFillLinkedin className="w-8 h-8" /></a>

        </div>
        
    </>
  );
}

export default App;
