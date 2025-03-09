import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    setInput(`${input + e.target.innerText}`);
  };
  const clear = () => {
    setInput("");
  };
  const oneClear = () => {
    let ans = input;
    setInput(`${ans.slice(0, -1)}`);
  };
  const add = (e) => {
    setInput(`${input + e.target.innerText}`);
  };

  const output = () => {
    let ans = input;
    if (ans.includes("-")) {
      let result = ans.split("-").map((num) => parseInt(num)); // Convert all parts to numbers
      console.log(result);
      let finalResult = result.reduce((acc, curr) => acc - curr); // Perform subtraction from left to right
      setInput(finalResult);
    }
    if (ans.includes("+")) {
      let result = ans.split("+").map((num) => parseInt(num)); // Convert all parts to numbers
      console.log(result);
      let finalResult = result.reduce((acc, curr) => acc + curr); // Perform subtraction from left to right
      setInput(finalResult);
    }
    if (ans.includes("*")) {
      let result = ans.split("*").map((num) => parseInt(num)); // Convert all parts to numbers
      console.log(result);
      let finalResult = result.reduce((acc, curr) => acc * curr); // Perform subtraction from left to right
      setInput(finalResult);
    }
    if (ans.includes("/")) {
      let result = ans.split("/").map((num) => parseInt(num)); // Convert all parts to numbers
      console.log(result);
      let finalResult = result.reduce((acc, curr) => acc / curr); // Perform subtraction from left to right
      setInput(finalResult);
    }
    if (ans.includes("%")) {
      let result = ans.split("%").map((num) => parseInt(num)); // Convert all parts to numbers
      console.log(result);
      let finalResult = result.reduce((acc, curr) => acc % curr); // Perform subtraction from left to right
      setInput(finalResult);
    }
  };

  return (
    <div className="bg-black h-[610px] w-85 rounded-xl">
      <div className="w-full h-[26%] flex justify-center items-center rounded-t-2xl">
        <input
          id="cal"
          type="string"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=" text-white w-full h-[50%] text-6xl text-right focus:outline-none no-arrows "
        />
      </div>
      <div className=" h-[74%] flex justify-center items-center ove">
        <div className="grid grid-cols-4 grid-rows-5 gap-2 ">
          <button className="bg-zinc-400 bubble" onClick={clear}>
            AC
          </button>
          <button className="bubble bg-zinc-400">( )</button>
          <button onClick={add} className="bubble bg-zinc-400">
            %
          </button>
          <button className="bubble" onClick={add}>
            /
          </button>
          <button onClick={handleClick} className="bubble bg-buttons-default">
            7
          </button>
          <button className="bubble bg-buttons-default" onClick={handleClick}>
            8
          </button>
          <button className="bubble bg-buttons-default" onClick={handleClick}>
            9
          </button>
          <button onClick={add} className="bubble bg-buttons">
            *
          </button>
          <button onClick={handleClick} className="bubble bg-buttons-default">
            4
          </button>
          <button onClick={handleClick} className="bubble bg-buttons-default">
            5
          </button>
          <button onClick={handleClick} className="bubble bg-buttons-default">
            6
          </button>
          <button onClick={add} className="bubble">
            -
          </button>
          <button onClick={handleClick} className="bubble bg-buttons-default">
            1
          </button>
          <button onClick={handleClick} className="bubble bg-buttons-default">
            2
          </button>
          <button onClick={handleClick} className="bubble bg-buttons-default">
            3
          </button>
          <button onClick={add} className="bubble">
            +
          </button>
          <button onClick={handleClick} className="bubble bg-buttons-default">
            0
          </button>
          <button onClick={handleClick} className="bubble bg-buttons-default">
            .
          </button>
          <button onClick={oneClear} className="bubble bg-buttons-default">
            <FontAwesomeIcon icon={faDeleteLeft} />
          </button>
          <button onClick={output} className="bubble bg-buttons">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
