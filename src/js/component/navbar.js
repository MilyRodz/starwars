import React from "react";
import { Link } from "react-router-dom";
import Favorites from "./Favorites";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0">
					<a href="/#">
						<img
							src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png"
							width="80"
							alt="star wars logo"
						/>
					</a>
				</span>
			</Link>
			<Favorites />
		</nav>
	);
};
8;
