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
    <h1 >Skills</h1>
  </div>
)

const Skills=()=>(
    <div class='flexbox'>
    <div><Button variant="shadow" size="lg" color="primary" className="mx-1">HTML</Button></div>
    <div><Button variant="shadow" size="lg" color="primary" className="mx-1">CSS</Button></div>
    <div><Button variant="shadow" size="lg"  color="primary" className="mx-1">JS</Button></div>
    <div><Button variant="shadow" size="lg" color="primary" className="mx-1">Bash</Button></div>
    <div><Button variant="shadow" size="lg" color="primary" className="mx-1">Linux</Button></div>
    <div><Button variant="shadow" size="lg" color="primary" className="mx-1">C++</Button></div>
    <div><Button variant="shadow" size="lg" color="primary" className="mx-1">Java</Button></div>
    <div><Button variant="shadow" size="lg" color="primary" className="mx-1">Python</Button></div>
    <div><Button variant="shadow" size="lg" color="primary" className="mx-1">C</Button></div>
  </div>
)
export const Home=()=>{
    return(
        <motion.div class="maindiv bg-slate-900" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.7}} >
            <Image/>
            <Name/>
            <Skills/>
        </motion.div>
    )
}
