const Grid = () => {
	return <div className="grid-rows-10 grid-cols-12"></div>;
};

const Overlay = () => {
	return (
		<>
			<div className="h-screen-full grid grid-rows w-screen-full bg-black/50">
				<Grid />
				<Grid />
				<Grid />
			</div>
		</>
	);
};

export default Overlay;
