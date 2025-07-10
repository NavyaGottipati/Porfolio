import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./homedepot.png"
								alt="Home Depot"
								className="work-image"
							/>
							<div className="work-title">The Home Depot</div>
							<div className="work-subtitle">
								Senior Python Developer
							</div>
							<div className="work-duration">
								Nov 2023 – Present
							</div>
						</div>

						<div className="work">
							<img
								src="./dell.png"
								alt="Dell"
								className="work-image"
							/>
							<div className="work-title">Dell Technologies</div>
							<div className="work-subtitle">
								Python Developer
							</div>
							<div className="work-duration">
								Sep 2021 – Oct 2023
							</div>
						</div>

						<div className="work">
							<img
								src="./honeywell.png"
								alt="Honeywell"
								className="work-image"
							/>
							<div className="work-title">Honeywell</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">
								Feb 2020 – Aug 2021
							</div>
						</div>

						<div className="work">
							<img
								src="./accel.png"
								alt="Accel Frontline"
								className="work-image"
							/>
							<div className="work-title">Accel Frontline Ltd</div>
							<div className="work-subtitle">
								Python Developer
							</div>
							<div className="work-duration">
								Jul 2018 – Jan 2020
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
