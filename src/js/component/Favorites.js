import React, { useContext, useState, Fragment } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const Favorites = ({ uid, name }) => {
	const { store, actions } = useContext(Context);
	const favorites = store.favorites.length;
	const favoritesList = store.favorites;

	const handleClickTrash = name => {
		actions.deleteFavoriteItemFromList(name);
	};

	return (
		<div className="btn-group">
			<button
				className="btn btn-primary dropdown-toggle p-2"
				data-display="static"
				type="button"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Favorites
				<span className="badge badge-light">{favorites ? favorites : "0"}</span>
			</button>
			<div className="dropdown-menu dropdown-menu-lg-right dropdown-menu-md-right dropdown-menu-sm-right xs-dropdown">
				{favoritesList.length === 0 ? (
					<a className="dropdown-item" href="/#">
						{"empty"}
					</a>
				) : (
					favoritesList.map((item, index) => {
						return (
							<Fragment key={index}>
								<div className="d-flex">
									<a key={index} className="dropdown-item" href="/#">
										{item.name}
									</a>
									<button
										type="button"
										className="btn btn-light float-right"
										onClick={() => handleClickTrash(item.name)}>
										<i className="fas fa-trash p-2"></i>
									</button>
								</div>
							</Fragment>
						);
					})
				)}
			</div>
		</div>
	);
};

Favorites.propTypes = {
	uid: PropTypes.string,
	name: PropTypes.string
};

export default Favorites;
