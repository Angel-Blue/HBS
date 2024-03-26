import React, { Component } from "react";

class Abouttexttwo extends Component {
	render() {
		return (
			<div className="container">
				<h2 className="text-light-black text-center">
					More <span className="text-light-green">conversations </span>
					at Stowe{" "}
				</h2>
				<div className="row align-items-center">
					<div className="col-md-5">
						<div className="histry-img mb-xs-40">
							<img
								src={process.env.PUBLIC_URL + "/images/about/about7.jpg"}
								className="img-fluid full-width"
								alt="img"
							/>
						</div>
					</div>
					{/* <div className="col-lg-8 col-sm-8 col-md-8">
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
								</div> */}

					<div className="col-md-7">
						<div className="history-title mb-md-40">
							<p className="text-light-black">
								Programs at Stowe continue the themes and ideas of Harriet
								Beecher Stowe’s life and writings in a variety of program types
								and for a number of audience interests. Salons at Stowe are
								offered a few times a year, as well as onsite and virtual
								programs that are designed to inspire visitors to find their own
								creative inclinations, to explore contemporary writers working
								in the tradition of Stowe, and to explore issues of social
								justice relating to the 19th century and today.
							</p>
							<p className="text-light-black">
								Visit our calendar and Multimedia Gallery to learn more about
								what we are doing next, and what has been documented to date.
								Sign up for our E-blast today to keep up to date on all our
								ongoing offerings.
							</p>
							{/* <Link to="/about" className="btn-solid with-line btn-big mt-20">
									<span>
										Learn More <i className="fas fa-caret-right" />
									</span>
								</Link> */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Abouttexttwo;
