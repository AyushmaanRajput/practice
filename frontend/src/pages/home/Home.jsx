import React, { useEffect, useState } from 'react'

import {OpenScreen} from './OpenScreen';
import { Game} from './Game'

export const Home = () => {
  
  let [countdown,setCountdown]=useState(4)
 
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prevCount) => prevCount - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);


    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [countdown]);

  return (<>
  {
    countdown > 0?
    <OpenScreen count={countdown}/>
    :
    <Game />
  }
  
  </>
  )
}



