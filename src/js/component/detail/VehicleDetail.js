import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const VehicleDetail = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getVehicleDetail(params.uid);
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
								{store.vehicleDetail.properties ? store.vehicleDetail.properties.name : ""}
							</h3>

							<p className="card-text mb-auto">
								{store.vehicleDetail.description ? store.vehicleDetail.description : ""}
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
									{store.vehicleDetail.properties ? store.vehicleDetail.properties.name : ""}
								</p>
							</div>
						</div>

						<div className="card border-0">
							<div className="card-body">
								<h5 className="card-title text-danger">Model</h5>
								<p className="card-text text-danger">
									{store.vehicleDetail.properties ? store.vehicleDetail.properties.model : ""}
								</p>
							</div>
						</div>

						<div className="card border-0">
							<div className="card-body">
								<h5 className="card-title text-danger">Passengers</h5>
								<p className="card-text text-danger">
									{store.vehicleDetail.properties ? store.vehicleDetail.properties.passengers : ""}
								</p>
							</div>
						</div>

						<div className="card border-0">
							<div className="card-body">
								<h5 className="card-title text-danger">Crew</h5>
								<p className="card-text text-danger">
									{store.vehicleDetail.properties ? store.vehicleDetail.properties.crew : ""}
								</p>
							</div>
						</div>

						<div className="card border-0">
							<div className="card-body">
								<h5 className="card-title text-danger">Cargo capacity</h5>
								<p className="card-text text-danger">
									{store.vehicleDetail.properties
										? store.vehicleDetail.properties.cargo_capacity
										: ""}
								</p>
							</div>
						</div>

						<div className="card border-0">
							<div className="card-body">
								<h5 className="card-title text-danger">Manufacturer</h5>
								<p className="card-text text-danger">
									{store.vehicleDetail.properties ? store.vehicleDetail.properties.manufacturer : ""}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VehicleDetail;
