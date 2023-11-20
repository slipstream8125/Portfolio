import {Link} from "react-router-dom";
// import Button from '@mui/material/Button';
import {Button} from '@nextui-org/react';

export const Navbar=()=>{
    return (
        <nav class="Navbar bg-slate-900 py-2 ring-1 ring-slate-200/5 shadow-xl">
			<Link to="/" class='link'><Button color="primary" variant="shadow" id="LinkButton">Home</Button></Link>
			<Link to="/skills" class='link'><Button color="primary" variant="shadow" id="LinkButton">Skills</Button></Link>
			<Link to="/hobbies" class='link'><Button color="primary" variant="shadow">Hobbies</Button></Link>
			<Link to="/contact" class='link'><Button color="primary" variant="shadow">Contact</Button></Link>
        </nav>
    )
}
