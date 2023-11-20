import {Card,CardBody,CardFooter,Image,Button,Tooltip} from '@nextui-org/react';
import { motion } from 'framer-motion';
import cpp from './images/cpp.jpg'
import python from './images/python.jpg'
import java from './images/java.jpg'
import bash from './images/bash.jpg'
import react from './images/react.png'
import html from './images/HTML.png'
import css from './images/CSS.png'
import js from './images/js.png'
import linux from './images/linux.jpg'
export const Skills=()=>{
	const skillList=[
		{
			title:'C++',
			img:cpp
		},
		{
			title:'Python',
			img: python
		},
		{
			title:'Java',
			img: java
		},
		{
			title:'Bash',
			img:bash
		},
		{
			title:'React',
			img:react
		},
		{
			title:'HTML',
			img:html
		},
		{
			title:'CSS',
			img:css
		},
		{
			title:'JS',
			img:js
		},
		{
			title:'Linux',
			img:linux
		}
	]
    return (
            <motion.div class="maindiv bg-slate-900" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.7}} >
                <h1 class="text-2xl font-bold leading-7 sm:truncate sm:text-6xl sm:tracking-tight">Skills</h1>
                <br/>
			<div className="gap-2 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
			{skillList.map((item,index)=>(
				<Card key={index}>
						<Tooltip classNames={{content:["bg-black"]}}content={<p className='text-small font-bold text-teal-500'>{item.title}</p>} offset={-255}>
						<CardBody className="overflow-hidden p-0">
							<Image isZoomed shadow='sm' radius="lg" width='100%' className="w-full object-cover h-[300px]" src={item.img}/>
						</CardBody>
						{/*<CardFooter className="text-small text-primary  justify-center">
							<b>{item.title}</b>
						</CardFooter>*/}
						</Tooltip>
				</Card>
			))}
			</div>
            </motion.div>
    );
}
