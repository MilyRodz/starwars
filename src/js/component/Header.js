import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
	return (
		<div className="headline-margin">
			<h1 className="characters-headline">{title}</h1>
		</div>
	);
};

Header.propTypes = {
	title: PropTypes.string
};

export default Header;
