import React, { useState, useContext, Fragment } from "react";
import PropTypes from "prop-types";

import { Context } from "../../store/appContext";
const Heart = ({ uid, name }) => {
	const [pressed, setPressed] = useState(false);
	const { store, actions } = useContext(Context);

	const handleClickHeart = (uid, name) => {
		const item = { uid, name };

		let favorites = store.favorites ? store.favorites : [];
		favorites.push(item);
		let statePressed = !pressed;
		// pressed === true then add to list
		if (statePressed) {
			actions.addFavoriteItemToList(favorites);
		}
		// pressed === false then delete from list by id
		else {
			actions.deleteFavoriteItemFromList(name);
		}
		setPressed(statePressed);
	};

	// CHECK ONLY IF ITEM DOES NOT EXIST
	const checkIfItemExistsInFavorites = () => {
		if (pressed) {
			let existItem = store.favorites.some(item => item.name === name);
			if (!existItem) {
				setPressed(false);
			}
		}
	};

	checkIfItemExistsInFavorites();

	return (
		<Fragment>
			<button
				type="button"
				className="btn btn-outline-warning float-right heart-button"
				onClick={() => handleClickHeart(uid, name)}>
				<i className={`far fa-heart ${pressed ? "fas fa-heart" : ""}`} aria-hidden="true"></i>
			</button>
		</Fragment>
	);
};

Heart.propTypes = {
	uid: PropTypes.string,
	name: PropTypes.string
};

export default Heart;
