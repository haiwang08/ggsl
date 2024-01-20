import React, { forwardRef } from "react";

const menuData = [
	{
		name: "words",
		display: false,
	},
	{
		name: "test",
		display: false,
	},
];

forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		// changeVal 就是暴露给父组件的方法
		onClick: (index) => {
			console.log(123, newVal);
		},
	}));
});

function Menu({ displayPage }) {
	const onClick = (index) => {
		const newMenu = Object.assign({}, menuObj);
		newMenu[menuData][element.keys()[0]];
		displayPage();
	};

	return (
		<>
			{menuData.forEach((element) => {
				return (
					<button
						onClick={(index) => {
							onClick(index);
						}}
					>
						element.name
					</button>
				);
			})}
		</>
	);
}

export { Menu };
