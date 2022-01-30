//import spinner from './assets/spinner-github.svg'
import PuffLoader from "react-spinners/PuffLoader";

function Spinner() {
  return <div className='w-100 mt-20'>
      <PuffLoader className='text-center mx-auto' color={"#D5CCFF"} />
      
            {/*<img  
                className='text-center mx-auto'
                width={100} 
                src={spinner} 
                alt='Loading...' />*/}
        </div>;
}

export default Spinner;
