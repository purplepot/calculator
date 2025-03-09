import "./index.css";
import Calculator from "./components/Calculator";
import DarkMode from "./components/DarkMode.jsx";

function App() {
  return (
    <>
      <DarkMode />
      <div className="grid place-items-center h-[100vh]">
        <Calculator />
      </div>
    </>
  );
}

export default App;
