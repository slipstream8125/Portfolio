import {Button} from '@nextui-org/react';
import { motion } from 'framer-motion';
export const Contact=()=>{
    return (
            <motion.div class="maindiv bg-slate-900" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.7}} >
                <h1 class="text-2xl font-bold leading-7 sm:truncate sm:text-6xl sm:tracking-tight">Contact</h1>
                <br/>
                <h2 class="font-bold sm:truncate sm:text-3xl sm:tracking-tight"> You can contact me on : </h2>
                <br/>
				<a href="https://www.linkedin.com/in/dhruv-hatkar"> <Button variant="ghost" color='primary'>LinkedIn</Button></a>{' '}
				<a href="https://github.com/slipstream8125"><Button variant="ghost" color='primary'>GitHub</Button></a>
				<a href="https://linktr.ee/dhruvhatkar"> <Button variant="ghost" color='primary'>Linktree</Button></a>
            </motion.div>
    )
}
