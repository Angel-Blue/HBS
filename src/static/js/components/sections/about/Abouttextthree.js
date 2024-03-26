import React, { Component } from "react";
import { Link } from "react-router-dom";

class Abouttextthree extends Component {
	render() {
		return (
			<section className="aboutus section-padding">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-6">
							<h2 className="text-light-black text-center">
								Stowe House{" "}
								<span className="text-light-green">Preservation</span>
							</h2>
							<p className="text-light-black">
								An important part of our mission is preserving Stowe’s Hartford
								home and historic collections. That’s an ongoing process, but in
								2016-2017, the Stowe Center undertook major interior
								preservation of the 1871 National Historic Landmark.
							</p>
							<p className="text-light-black">
								The preservation project included a new climate control system,
								state-of-the-art fire suppression, renovation of historic
								windows, and conservation of significant works of art.
							</p>
							<p className="text-light-black">
								In addition, the home’s interior was completely redecorated
								based on both physical and written evidence of Stowe’s
								decorating choices. Worn carpeting, wallpaper, and paint, in
								place since 1968, were replaced with new historically accurate
								finishes. Gallery spaces and multi-media elements were added to
								enhance the visitor experience.
							</p>
							<p className="text-light-black">See it for yourself!</p>
						</div>{" "}
						<div class="col-lg-6">
							{" "}
							<div className="histry-img mb-xs-40" style={{ height: "50%" }}>
								<img
									src={process.env.PUBLIC_URL + "/images/about/about4.jpg"}
									className="img-fluid"
									alt="img"
								/>
							</div>
						</div>
						{/* <div class="col-md-4">

					</div> */}
					</div>
				</div>
			</section>
		);
	}
}

export default Abouttextthree;
