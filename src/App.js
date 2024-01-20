import React, { useState, useEffect } from "react";
import { Words } from "./components/Words";
import "./App.css";

const DEFAULT_DISPLAY = [false, false, false];

function App() {
	const [menuDisplay, setMenuDisplay] = useState(DEFAULT_DISPLAY);

	const displayPage = (index) => {
		const newDisplay = [...DEFAULT_DISPLAY];
		newDisplay[index] = true;
		setMenuDisplay(newDisplay);
	};

	useEffect(() => {
		const displayDefault = () => {
			displayPage(1);
		};

		displayDefault();
	}, []);

	return (
		<div className="App">
			<div className="head">
				<div
					class="btn-group"
					role="group"
					aria-label="Basic radio toggle button group"
				>
					<input
						type="radio"
						class="btn-check"
						name="btnradio"
						id="btnradio1"
						autocomplete="off"
						checked
					/>
					<label
						className="btn btn-primary"
						for="btnradio1"
						onClick={() => {
							displayPage(0);
						}}
					>
						五十音
					</label>

					<input
						type="radio"
						class="btn-check"
						name="btnradio"
						id="btnradio2"
						autocomplete="off"
					/>
					<label
						className="btn btn-primary"
						for="btnradio2"
						onClick={() => {
							displayPage(1);
						}}
					>
						Words
					</label>

					<input
						type="radio"
						class="btn-check"
						name="btnradio"
						id="btnradio3"
						autocomplete="off"
					/>
					<label
						className="btn btn-primary"
						for="btnradio3"
						onClick={() => {
							displayPage(2);
						}}
					>
						Test
					</label>
				</div>
			</div>
			<div className="body">
				{menuDisplay[0] && <Words />}
				{menuDisplay[1] && <Words />}
			</div>
			<div className="foot"></div>
		</div>
	);
}

export default App;
