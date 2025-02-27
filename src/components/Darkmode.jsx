
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'

const Darkmode = () => {
  const darkmode=()=>{
    if(document.documentElement.classList.includes('dark')){
      document.documentElement.classList.remove('dark');
    }
    else{
      document.documentElement.classList.add('dark');
    };
  }
  return (
    <div className=" w-full h-[10vh] bg-neutral-300 dark:bg-zinc-800">
      <button onClick={darkmode} className='text-2xl border-2 rounded-full shadow-lg shadow-black dark:shadow-white dark:border-white  absolute right-20 top-8 h-10 w-40 flex justify-center items-center bg-black dark:bg-white hover:cursor-pointer active:scale-95 focus:outline-none'>
        <span className='font-josefin text-white dark:text-black'>
          Darkmode
          &nbsp;
        </span> 
        <FontAwesomeIcon icon={ faCircleHalfStroke }  className="text-white dark:text-black" />    
      </button>
    </div>
)}

export default Darkmode