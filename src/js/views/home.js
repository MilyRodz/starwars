import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardList from "../component/cardList/CardList";
import Header from "../component/Header";
import * as constants from "../constants/";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div className="container">
			<Header title={constants.CHARACTERS_TITLE_TEXT} />
			<CardList list={store.characters} textUrlDetail={constants.CHARACTER_DETAIL_URL} />

			<Header title={constants.PLANETS_TITLE_TEXT} />
			<CardList list={store.planets} textUrlDetail={constants.PLANET_DETAIL_URL} />

			<Header title={constants.VEHICLES_TITLE_TEXT} />
			<CardList list={store.vehicles} textUrlDetail={constants.VEHICLE_DETAIL_URL} />
		</div>
	);
};
