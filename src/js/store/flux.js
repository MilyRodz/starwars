const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			characterDetail: {},
			planets: [],
			planetDetail: {},
			vehicles: [],
			vehicleDetail: {},
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharactersAPI: async () => {
				const settings = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};
				const response = await fetch("https://www.swapi.tech/api/people", settings);
				const json = await response.json();
				setStore({ characters: json.results });
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getCharacterDetail: async id => {
				const settings = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};
				const response = await fetch(`https://www.swapi.tech/api/people/${id}`, settings);
				const json = await response.json();
				setStore({ characterDetail: json.result });
			},
			getPlanets: async () => {
				const settings = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};
				const response = await fetch("https://www.swapi.tech/api/planets", settings);
				const json = await response.json();
				setStore({ planets: json.results });
			},
			getPlanetDetail: async id => {
				const settings = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};
				const response = await fetch(`https://www.swapi.tech/api/planets/${id}`, settings);
				const json = await response.json();
				setStore({ planetDetail: json.result });
			},
			getVehicles: async () => {
				const settings = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};
				const response = await fetch("https://www.swapi.tech/api/vehicles", settings);
				const json = await response.json();
				setStore({ vehicles: json.results });
			},
			getVehicleDetail: async id => {
				const settings = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};
				const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`, settings);
				const json = await response.json();
				setStore({ vehicleDetail: json.result });
			},
			addFavoriteItemToList: newList => {
				setStore({
					favorites: newList
				});
			},
			deleteFavoriteItemFromList: name => {
				const newFavoriteList = getStore().favorites.filter(item => item.name !== name);
				setStore({
					favorites: newFavoriteList
				});
			}
		}
	};
};

export default getState;
