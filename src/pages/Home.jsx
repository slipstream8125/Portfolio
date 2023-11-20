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
		<h1 className="text-5xl font-black">Dhruv Hatkar</h1>
		<h2 className="text-3xl font-bold">Student, Vellore Institute of Technology, Chennai</h2>
		<br/>
  </div>
)
const Intro=()=>(
	<div>
		<p>Hi, I am Dhruv Hatkar, a student at VIT Chennai.</p>
		<p>My interests include Linux Administration and Frontend Web Development.</p>
		<p>My hobbies include reading books and playing with Linux in my free time.</p>

	</div>
)
export const Home=()=>{
    return(
        <motion.div class="maindiv bg-slate-900" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.7}} >
            <Image/>
            <Name/>
			<Intro/>
        </motion.div>
    )
}
