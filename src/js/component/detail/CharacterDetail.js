import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import "./detail.css";

const CharacterDetail = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getCharacterDetail(params.uid);
	}, []);

	return (
		<div className="container detail-style">
			<div className="card mb-3 border-0">
				<div className="row no-gutters justify-content-center">
					<div className="col-md-4">
						<img src="https://via.placeholder.com/300/300/"></img>
					</div>
					<div className="col-md-6">
						<div className="card-body">
							<h3 className="mb-0">
								{store.characterDetail.properties ? store.characterDetail.properties.name : ""}
							</h3>

							<p className="card-text mb-auto">
								{store.characterDetail.description ? store.characterDetail.description : ""}
							</p>
							{/* <a href="/#">Go back</a> */}
						</div>
					</div>
				</div>
				<div className="row">
					<hr className="divider"></hr>
				</div>
				<div className="row justify-content-center">
					<div className="card-group">
						<div className="card border-0">
							<div className="card-body">
								<h5 className="card-title text-danger">Name</h5>
								<p className="card-text text-danger">
									{store.characterDetail.properties ? store.characterDetail.properties.name : ""}
								</p>
							</div>
						</div>

						<div className="card border-0">
							<div className="card-body">
								<h5 className="card-title text-danger">Birth date</h5>
								<p className="card-text text-danger">
									{store.characterDetail.properties
										? store.characterDetail.properties.birth_year
										: ""}
								</p>
							</div>
						</div>

						<div className="card border-0">
							<div className="card-body">
								<h5 className="card-title text-danger">Gender</h5>
								<p className="card-text text-danger">
									{store.characterDetail.properties ? store.characterDetail.properties.gender : ""}
								</p>
							</div>
						</div>

						<div className="card border-0">
							<div className="card-body">
								<h5 className="card-title text-danger">Height</h5>
								<p className="card-text text-danger">
									{store.characterDetail.properties ? store.characterDetail.properties.height : ""}
								</p>
							</div>
						</div>

						<div className="card border-0">
							<div className="card-body">
								<h5 className="card-title text-danger">Skin color</h5>
								<p className="card-text text-danger">
									{store.characterDetail.properties
										? store.characterDetail.properties.skin_color
										: ""}
								</p>
							</div>
						</div>

						<div className="card border-0">
							<div className="card-body">
								<h5 className="card-title text-danger">Eye color</h5>
								<p className="card-text text-danger">
									{store.characterDetail.properties ? store.characterDetail.properties.eye_color : ""}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CharacterDetail;
