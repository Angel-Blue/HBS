import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
	if (completed) {
		// Render a completed state
		return <Completionist />;
	} else {
		// Render a countdown
		return (
			<Fragment>
				<div className="time-box">
					<span>
						{days}
						<h6 className="mb-0">Days</h6>
					</span>
				</div>
				<div className="time-box">
					<span>
						{hours}
						<h6 className="mb-0">Hours</h6>
					</span>
				</div>
				<div className="time-box">
					<span>
						{minutes}
						<h6 className="mb-0">Minutes</h6>
					</span>
				</div>
				<div className="time-box">
					<span>
						{seconds}
						<h6 className="mb-0">Seconds</h6>
					</span>
				</div>
			</Fragment>
		);
	}
};

class Advertisement extends Component {
	render() {
		return (
			<section
				className="section-padding advertisement-banner-1 cause-bg center-bg-effect bg-cover"
				style={{
					backgroundImage:
						"url(" + process.env.PUBLIC_URL + "images/banner/banner5.jpg)",
				}}>
				<div className="container-fluid custom-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="advertisement-text-1 center-block-div">
								<h6 className="sub-head">Stowe On The Go!</h6>
								<h3 className="text-white heading">
									Facilitating Common Ground{" "}
									<span className="text-dark-red">For Common Good</span>
								</h3>
								<div className="ad-count justify-content-center">
									<div className="countdown-box sigma_countdown-timer-white">
										<Countdown
											date={Date.now() + 31622400000}
											renderer={renderer}
										/>
									</div>
								</div>
								{/* <Link
									to="/shop-details/1"
									className="btn btn-text btn-text-white mt-20">
									Donate Now
								</Link> */}
								<Link to="/" className="btn btn-text btn-text-white mt-20">
									Donate Now
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Advertisement;
