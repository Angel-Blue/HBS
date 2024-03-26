import Accordion from "react-bootstrap/Accordion";
import React, { Component } from "react";
import questions from "../../data/faq.json";

class Faq extends Component {
	render() {
		return (
			<>
				<h2 className="text-light-black">
					Frequently Asked <span className="text-light-green">Questions</span>
				</h2>

				<Accordion defaultActiveKey="0">
					{questions.map((item, i) => (
						<Accordion.Item eventKey={item.id}>
							<Accordion.Header>
								<span>{item.question}</span>
								<i
									className="fas fa-angle-down"
									style={{ marginLeft: "auto" }}
								/>
							</Accordion.Header>
							<Accordion.Body
								dangerouslySetInnerHTML={{ __html: item.answer }}
							/>
						</Accordion.Item>
					))}
				</Accordion>
			</>
		);
	}
}

export default Faq;
