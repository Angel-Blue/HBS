import React, { Component, Fragment } from "react";

import Topbar from "../layouts/Topbar";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Newsletter from "../layouts/Newsletter";
import Breadcrumb from "../layouts/Breadcrumbs";
import Content from "../sections/blog-details/Content";

const pagelocation = "Blog Details";

class Blogdetails extends Component {
	render() {
		return (
			<Fragment>
				{/* <MetaTags>
					<title>Nina - Museum & Shop - React Template | {pagelocation}</title>
					<meta name="description" content="#" />
				</MetaTags> */}
				<Topbar />
				<Header />
				<Breadcrumb breadcrumb={{ pagename: pagelocation }} />
				<Content blogId={this.props.match.params.id} />
				<Newsletter layout="bg-theme-primary" />
				<Footer />
			</Fragment>
		);
	}
}

export default Blogdetails;
