import React, { Component, Fragment } from "react";

import Topbar from "../layouts/Topbar";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Newsletter from "../layouts/Newsletter";
import Breadcrumb from "../layouts/Breadcrumbs";
import Content from "../sections/cart/Content";

const pagelocation = "Cart";

class Cart extends Component {
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
				<Content />
				<Newsletter layout="" />
				<Footer />
			</Fragment>
		);
	}
}

export default Cart;
