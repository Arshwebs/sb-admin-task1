import React, {useReducer} from "react";
import {Button} from "react-bootstrap";
const intialValue = {count: 0, name: ""};

function reducer(state, action) {
	switch (action.type) {
		case "increment":
			return {...state, count: state.count + 1};
		case "decrement":
			return {...state, count: state.count - 1};
		case "reset":
			return {...state, count: 0, name: ""};
		case "updateName":
			return {...state, name: action.value};
		default:
			return 1;
	}
}

function UseReducer() {
	const [state, dispatch] = useReducer(reducer, intialValue);

	return (
		<>
			<div className="container-fluid">
				<h1>UseReducer</h1>
				<div>
					<Button variant="danger" onClick={() => dispatch({type: "decrement"})}>
						-
					</Button>
					<br />
					<br />
					{state.count}
					<br />
					<br />
					<Button variant="primary" onClick={() => dispatch({type: "increment"})}>
						+
					</Button>
					<br />
					<br />
					<Button variant="warning" onClick={() => dispatch({type: "reset"})}>
						Reset
					</Button>
					<br />
					<br />
					<input
						type="text"
						value={state.name}
						onChange={e => dispatch({type: "updateName", value: e.target.value})}
					/>
					<p>{state.name}</p>
				</div>
			</div>
		</>
	);
}

export default UseReducer;
