import React, { Fragment } from "react";
import Contactform from "../../../helper/contacthelper";

class Content extends Contactform {
	render() {
		return (
			<Fragment>
				<section className="section-padding contact-form">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="section-header-left title">
									<h3 className="text-light-black header-title">
										Get In Touch
									</h3>
								</div>
								<form
									id="contact-form"
									onSubmit={this.handleSubmit.bind(this)}
									method="POST">
									<div className="row clearfix">
										<div className="col-md-6">
											<div className="form-group">
												<input
													type="text"
													className="form-control form-control-submit"
													name="name"
													value={this.state.name}
													onChange={this.onNameChange.bind(this)}
													placeholder="Full Name"
													required
												/>
											</div>
											<div className="form-group">
												<input
													type="email"
													name="email"
													value={this.state.email}
													onChange={this.onEmailChange.bind(this)}
													className="form-control form-control-submit"
													placeholder="Email"
													required
												/>
											</div>
											<div className="form-group">
												<input
													type="text"
													name="subject"
													value={this.state.subject}
													onChange={this.onSubjectChange.bind(this)}
													className="form-control form-control-submit"
													placeholder="Subject"
													required
												/>
											</div>
											<div className="form-group">
												<input
													type="text"
													name="phone"
													value={this.state.phone}
													onChange={this.onPhoneChange.bind(this)}
													className="form-control form-control-submit"
													placeholder="Phone"
													required
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<textarea
													name="message"
													value={this.state.message}
													onChange={this.onMessageChange.bind(this)}
													className="form-control form-control-submit"
													placeholder="Message"
													required
													style={{ height: "225px" }}
												/>
											</div>
										</div>
										<div className="col-md-12">
											<button className="btn-solid with-line" type="submit">
												Send
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
				<div className="contact-map">
					<iframe
						title="map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.853686993481!2d-72.7029635889094!3d41.766812272255535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6534fc8278ec3%3A0x3c74f16a51550b6c!2sHarriet%20Beecher%20Stowe%20Center!5e0!3m2!1sen!2sus!4v1702500269082!5m2!1sen!2sus"
						style={{ height: "300px" }}
					/>
				</div>
			</Fragment>
		);
	}
}

export default Content;
