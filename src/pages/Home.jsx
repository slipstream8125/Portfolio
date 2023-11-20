import {Button} from '@nextui-org/react';
import './Home.css'
import img from './images/img.jpg'
import { motion } from 'framer-motion';
const Image=()=>(
  <div>
    <img src={img} class="profile"></img>
  </div>
)
const Name=()=>(
    <div>
    <h1 >Dhruv Hatkar</h1>
    <p >Student, Vellore Institute of Technology, Chennai</p>
    <br/>
  </div>
)

export const Home=()=>{
    return(
        <motion.div class="maindiv bg-slate-900" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.7}} >
            <Image/>
            <Name/>
        </motion.div>
    )
}
