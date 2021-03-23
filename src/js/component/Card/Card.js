import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";
import Heart from "../heart/Heart";

const Card = ({ item, textUrlDetail }) => {
	const { store } = useContext(Context);

	return (
		<div className="card">
			<img className="card-img-top" src="https://via.placeholder.com/400/200/" alt="Card cap"></img>
			<div className="card-body">
				<h5 className="card-title"> {item.name}</h5>

				<div className="card-row d-flex justify-content-between">
					<div className="card-col">
						<Link to={`${textUrlDetail}${item.uid}`}>
							<button type="button" className="btn btn-outline-primary">
								learn more
							</button>
						</Link>
					</div>

					<div className="card-col">
						<Heart uid={item.uid} name={item.name} />
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	item: PropTypes.shape({
		uid: PropTypes.string,
		name: PropTypes.string,
		url: PropTypes.string
	}),
	textUrlDetail: PropTypes.string
};
export default Card;
