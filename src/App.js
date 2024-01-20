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
				<button
					onClick={() => {
						displayPage(0);
					}}
				>
					五十音
				</button>
				<button
					onClick={() => {
						displayPage(1);
					}}
				>
					Words
				</button>
				<button
					onClick={() => {
						displayPage(2);
					}}
				>
					Test
				</button>
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
