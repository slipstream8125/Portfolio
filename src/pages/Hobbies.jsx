import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { motion } from "framer-motion";
import linux1 from './images/linux1.jpg'
export const Hobbies=()=>{
    return (
		<motion.div  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.7}} >

			<div class="maindiv bg-slate-900 ">
				<h1 class="text-2xl font-bold leading-7 sm:truncate sm:text-6xl sm:tracking-tight">Hobbies</h1>
				<br/>
				<div className="flex flex-row space-x-4">
				<div className="basis-1/2">
				<Card className=" col-span-12 sm:col-span-7">
					<Image
						removeWrapper
						src="https://www.goodwood.com/globalassets/.road--racing/race/modern/2022/3-march/f1-2022-calendar/2022-f1-calendar-drivers-championship-standings-zak-mauger-mi-21032022.jpg"
						 className="z-0 w-full h-[580px] scale-110 hover:scale-125 -translate-y-6 object-cover"
								isZoomed
						 />
					<CardFooter className="absolute z-10  bottom-0 flex-col items-center">
						<h1>Formula One</h1>
					</CardFooter>
				</Card>
				</div>
				<div className="basis-1/2">
				<Card className=" col-span-12 sm: col-span-7">
					<Image
						removeWrapper
						src={linux1}
						 className="z-0 w-full h-[580px] scale-110 hover:scale-125 -translate-y-6 object-cover"
								isZoomed
						 />
					<CardFooter className="absolute z-10  bottom-0 flex-col items-center">

					</CardFooter>
				</Card>
				</div>
				</div>
			</div>
		</motion.div>
    )
}
