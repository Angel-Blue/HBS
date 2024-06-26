import React from "react";
import Popuphelper from "../../helper/popuphelper";
import { Link } from "react-router-dom";

class Videocta extends Popuphelper {
	render() {
		return (
			<section
				className="section-padding advertisement-banner-1 what-wedo-bg bg-cover"
				style={{
					backgroundImage:
						"url(" + process.env.PUBLIC_URL + "/images/banner/banner4.jpg)",
				}}>
				<div className="container-fluid custom-container">
					<div className="row">
						<div className="col-lg-8 custom-center">
							<div className="advertisement-text-1 mb-30">
								<h6 className="sub-head">What We do</h6>
								<h3 className="text-white heading">
									<span className="text-color-secondary">Preserve.</span>{" "}
									Interpret.{" "}
									<span className="text-color-secondary"> Inspire.</span>
								</h3>
								<p>
									The Harriet Beecher Stowe Center’s mission is to encourage
									social justice and literary activism by exploring the legacy
									of Harriet Beecher Stowe.
								</p>
								<p>
									Our vision is a world in which engagement leads to empathy,
									empowerment, and change for good.
								</p>
								<Link
									to="/about"
									className="btn-solid with-line btn-big mt-20 mr-1">
									<span>
										Learn More <i className="fas fa-caret-right" />
									</span>
								</Link>
							</div>
						</div>
						<div className="col-lg-4 align-self-center">
							{/* <div className="blob play-btn ">
								<a
									rel={"external"}
									href={"https://www.youtube.com/embed/92U-vjAWUVM"}
									className="popup-youtube popup-video">
									{" "}
									<i className="fas fa-play" />
								</a>
							</div> */}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Videocta;
