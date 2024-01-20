import React from "react";
import Menu from "./classes/Menu";

// const MUNE_DATA_URL = "http://localhost:3000/resource/menu.json";

function Head({ displayPage }) {
	return (
		<>
			<div className="head">
				<Menu displayPage={displayPage} />
			</div>
		</>
	);
}

export { Head };
