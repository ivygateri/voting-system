import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
return (
	<AppBar position="fixed" style={{backgroundColor:"#198754"}}>
		<Toolbar>
		{/*Inside the IconButton, we
		can render various icons*/}
		<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
		>
			{/*This is a simple Menu
			Icon wrapped in Icon */}
			<MenuIcon />
		</IconButton>
		{/* The Typography component applies
		default font weights and sizes */}

		<Typography variant="h6"
			component="div" sx={{ flexGrow: 1 }}>
			ABC University

			<Link to='/' style={{textDecoration:'none', color:'inherit'}}><Button color="inherit" sx={{marginLeft:5}}>Home</Button></Link>
		<Link to='/vote'  style={{textDecoration:'none', color:'inherit'}}><Button color="inherit">Voting Portal</Button></Link>
		</Typography>
		
		
		<Button color="inherit">Login</Button>
		</Toolbar>
	</AppBar>
);
}
