import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const PlanetDetail = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getPlanetDetail(params.uid);
	}, []);

	return (
		<div className="container detail-style">
			<div className="card mb-3">
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src="https://via.placeholder.com/300/300/"></img>
					</div>
					<div className="col-md-6">
						<div className="card-body">
							<h3 className="mb-0">
								{store.planetDetail.properties ? store.planetDetail.properties.name : ""}
							</h3>

							<p className="card-text mb-auto">
								{store.planetDetail.description ? store.planetDetail.description : ""}
							</p>
							<a href="/#">Go back</a>
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
									{store.planetDetail.properties ? store.planetDetail.properties.name : ""}
								</p>
							</div>
						</div>

						<div className="card border-0">
							<div className="card-body">
								<h5 className="card-title text-danger">Climate</h5>
								<p className="card-text text-danger">
									{store.planetDetail.properties ? store.planetDetail.properties.climate : ""}
								</p>
							</div>
						</div>

						<div className="card border-0">
							<div className="card-body">
								<h5 className="card-title text-danger">Population</h5>
								<p className="card-text text-danger">
									{store.planetDetail.properties ? store.planetDetail.properties.population : ""}
								</p>
							</div>
						</div>

						<div className="card border-0">
							<div className="card-body">
								<h5 className="card-title text-danger">Orbital period</h5>
								<p className="card-text text-danger">
									{store.planetDetail.properties ? store.planetDetail.properties.orbital_period : ""}
								</p>
							</div>
						</div>

						<div className="card border-0">
							<div className="card-body">
								<h5 className="card-title text-danger">Rotation period</h5>
								<p className="card-text text-danger">
									{store.planetDetail.properties ? store.planetDetail.properties.rotation_period : ""}
								</p>
							</div>
						</div>

						<div className="card border-0">
							<div className="card-body">
								<h5 className="card-title text-danger">Diameter</h5>
								<p className="card-text text-danger">
									{store.planetDetail.properties ? store.planetDetail.properties.diameter : ""}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlanetDetail;
