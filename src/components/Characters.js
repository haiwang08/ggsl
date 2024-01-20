import React, { useState, useEffect } from "react";

const LOCAL_FILE_URL = "http://localhost:3000/resource/word.json";
function Words() {
	const [words, setWords] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const dataRep = await fetch(LOCAL_FILE_URL);
			const data = await dataRep.json();
			setWords(data);
		};

		fetchData();
	}, []);

	return (
		<>
			<button className="copyButton" onClick={copyJson}>
				复制
			</button>
			<table>
				<thead>
					<tr>
						<th>No</th>
						<th>汉语</th>
						<th>平假名</th>
						<th>片假名</th>
						<th>罗马音</th>
						<th>句型</th>
						<th>发音</th>
						<th>operation</th>
					</tr>
					{words.map((word, index) => {
						return (
							<>
								<tr key={index}>
									<td>{index + 1}</td>
									<td>
										<input
											type="text"
											placeholder="啊"
											onChange={(event) =>
												onChange(event, index, "汉语")
											}
											value={word.data.汉语}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="あ"
											onChange={(event) =>
												onChange(event, index, "平假名")
											}
											value={word.data.平假名}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="ア"
											onChange={(event) =>
												onChange(event, index, "片假名")
											}
											value={word.data.片假名}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="a"
											onChange={(event) =>
												onChange(event, index, "罗马音")
											}
											value={word.data.罗马音}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="(1)"
											onChange={(event) =>
												onChange(event, index, "句型")
											}
											value={word.data.句型}
										></input>
									</td>
									<td>{word.data.发音}</td>
									<td>
										<button onClick={() => addLine(index)}>
											十
										</button>
										<button onClick={() => delLine(index)}>
											一
										</button>
									</td>
								</tr>
							</>
						);
					})}
				</thead>
			</table>
		</>
	);
}

export { Words };
