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

	const onChange = (event, index, type) => {
		const newData = [...words];
		newData[index]["data"][type] = event.target.value;
		setWords(newData);
	};

	const copyJson = async () => {
		return await navigator.clipboard.writeText(JSON.stringify(words));
	};

	const addLine = (index) => {
		const newData = [...words];
		var line = {
			id: index + 2 + "",
			data: { 汉语: "", 平假名: "", 片假名: "", 罗马音: "", 发音: "" },
		};
		newData.splice(index + 1, 0, line);
		setWords(newData);
	};

	const delLine = (index) => {
		const newData = [...words];
		newData.splice(index, 1);
		setWords(newData);
	};
	return (
		<>
			<button className="btn btn-warning copyButton" onClick={copyJson}>
				复制
			</button>
			<table className="table table-primary">
				<thead>
					<tr>
						<th scope="col">No.</th>
						<th scope="col">汉语</th>
						<th scope="col">平假名</th>
						<th scope="col">片假名</th>
						<th scope="col">罗马音</th>
						<th scope="col">句型</th>
						<th scope="col">发音</th>
						<th scope="col">operation</th>
					</tr>
					{words.map((word, index) => {
						return (
							<>
								<tr key={index}>
									<th scope="row">{index + 1}</th>
									<td>
										<input
											type="text"
											placeholder="啊"
											class="form-control"
											aria-describedby="inputGroup-sizing-sm"
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
											class="form-control"
											aria-describedby="inputGroup-sizing-sm"
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
											class="form-control"
											aria-describedby="inputGroup-sizing-sm"
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
											class="form-control"
											aria-describedby="inputGroup-sizing-sm"
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
											class="form-control"
											aria-describedby="inputGroup-sizing-sm"
											onChange={(event) =>
												onChange(event, index, "句型")
											}
											value={word.data.句型}
										></input>
									</td>
									<td>{word.data.发音}</td>
									<td>
										<div
											class="btn-group"
											role="group"
											aria-label="Basic mixed styles example"
										>
											<button
												className="btn btn-success"
												onClick={() => addLine(index)}
											>
												十
											</button>
											<button
												className="btn btn-danger"
												onClick={() => delLine(index)}
											>
												一
											</button>
										</div>
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
