import './index.css'
import Calculator from "./components/Calculator"
import Darkmode from "./components/Darkmode"

function App() {
  return(
    <div className="dark:bg-gray-700 h-[100vh] w-full ">
      <Darkmode/>
      <Calculator/>

    </div>
  )
}

export default App
