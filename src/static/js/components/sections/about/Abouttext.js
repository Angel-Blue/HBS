import React, { Component } from "react";

class Abouttext extends Component {
	render() {
		return (
			<section className="aboutus section-padding">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="history-title mb-md-40">
								<h2 className="text-light-black">
									Be inspired by the woman whose words{" "}
									<span className="text-light-green">changed the world</span>
								</h2>
								<p className="text-light-black">
									The Harriet Beecher Stowe Center’s mission is to encourage
									social justice and literary activism by exploring the legacy
									of Harriet Beecher Stowe.
								</p>
								<p className="text-light-black">
									Our vision is a world in which engagement leads to empathy,
									empowerment, and change for good.
								</p>
								{/* <Link to="/about" className="btn-solid with-line btn-big mt-20">
									<span>
										Learn More <i className="fas fa-caret-right" />
									</span>
								</Link> */}
							</div>
						</div>
						<div className="col-lg-6">
							<div className="row align-items-center">
								<div className="col-lg-6 col-sm-6 col-md-6">
									<div className="histry-img mb-xs-20">
										<img
											src={process.env.PUBLIC_URL + "/images/about/about5.jpg"}
											className="img-fluid full-width"
											alt="img"
										/>
									</div>
								</div>
								<div className="col-lg-6 col-sm-6 col-md-6">
									<div className="histry-img mb-xl-20">
										<img
											src={process.env.PUBLIC_URL + "/images/about/about6.jpg"}
											className="img-fluid full-width"
											alt="img"
										/>
									</div>
									<div className="histry-img">
										<img
											src={process.env.PUBLIC_URL + "/images/about/about3.jpg"}
											className="img-fluid full-width"
											alt="img"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Abouttext;
