import React, { Component, Fragment } from "react";
// import MetaTags from "react-meta-tags";
import Content from "../sections/error/Content";

const pagelocation = "Error 404";

class Error extends Component {
	render() {
		return (
			<Fragment>
				{/* <MetaTags>
					<title>Nina - Museum & Shop - React Template | {pagelocation}</title>
					<meta name="description" content="#" />
				</MetaTags> */}
				<Content />
			</Fragment>
		);
	}
}

export default Error;
