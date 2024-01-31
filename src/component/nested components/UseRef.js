import React, {useEffect, useState, useRef} from "react";
import {Button} from "react-bootstrap";

function UseRef() {
	const [name, setName] = useState("");
	// const [count, setCount] = useState(0);
	const count = useRef(0);
	const firstInput = useRef();
	useEffect(() => {
		// setCount(count + 1);
		count.current += 1;
		console.log(count);
	});

	return (
		<div>
			<h1>useRef</h1>
			<input type="text" value={name} onChange={e => setName(e.target.value)} />
			<br />
			<input type="text" ref={firstInput} />
			<p>{count.current}</p>
			<Button varient="primary" onClick={() => firstInput.current.focus()}>
				{" "}
				check
			</Button>
		</div>
	);
}

export default UseRef;
