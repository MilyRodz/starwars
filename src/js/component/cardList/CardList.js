import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import Card from "../card/Card";
import "./CardList.css";
import PropTypes from "prop-types";

const CardList = ({ list, textUrlDetail }) => {
	return (
		<div key="card-container" className="card-container">
			<div className="card-deck card-deck-scroll card-margin">
				{list.map((item, index) => {
					return <Card key={index} item={item} textUrlDetail={textUrlDetail} />;
				})}
			</div>
		</div>
	);
};

CardList.propTypes = {
	list: PropTypes.shape([
		{
			uid: PropTypes.string,
			name: PropTypes.string,
			url: PropTypes.string
		}
	]),
	textUrlDetail: PropTypes.string
};

export default CardList;
