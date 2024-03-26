import React, { Component, Fragment } from "react";
import Abouttext from "./Abouttext";
import Blogpost from "./Blogpost";
import Workprocess from "./Workprocess";
import Testimonials from "../../layouts/Testimonials";
import Abouttexttwo from "./Abouttexttwo";
import Abouttextthree from "./Abouttextthree";
import Abt from "./Abt";
import Faqaccordion from "../../layouts/Faq";

class Content extends Component {
	render() {
		return (
			<Fragment>
				<Abouttext />
				{/* <Workprocess /> */}
				<Abouttexttwo />
				<Abouttextthree />
				{/* <Abt /> */}
				{/* <Testimonials /> */}
				<Faqaccordion />
				{/* <Blogpost /> */}
			</Fragment>
		);
	}
}

export default Content;
