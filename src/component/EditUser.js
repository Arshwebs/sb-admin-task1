import {useParams} from "react-router-dom";
import React, {useEffect, useContext} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useNavigate} from "react-router-dom";
import {userContext} from "../component/ContextComponent/UsersContextComponent";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditUser() {
	let navigate = useNavigate();
	let {id} = useParams();
	let context = useContext(userContext);
	const notify = () => toast("User edited successfully!");

	useEffect(() => {
		if (id) {
			context.dispatch({type: "name", value: context.users[id].name});
			context.dispatch({type: "email", value: context.users[id].email});
			context.dispatch({type: "mobile", value: context.users[id].mobile});
			context.dispatch({type: "batch", value: context.users[id].batch});
			context.dispatch({type: "timing", value: context.users[id].timing});
		}
	}, []);

	// let editData = users.splice(id, 1);
	// console.log(editData);

	function handleSubmit() {
		let newArr = [...context.users];
		let newData = {...context.state};

		newArr.splice(id, 1, newData);
		context.setUsers(newArr);
		context.dispatch({type: "reset"});
		notify();

		setTimeout(() => navigate("/dashboard"), 5000);
	}
	return (
		<div className="container-fluid">
			<br />
			<div className="d-sm-flex align-items-center justify-content-between mb-2 mt-2">
				<h1 className="h4 mb-0 text-gray-800">Edit User: {+id + 1}</h1>
			</div>
			<br />
			<Form className="container-fluid">
				<Form.Group className="mb-3">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter email"
						value={context.state.name}
						onChange={e => context.dispatch({type: "name", value: e.target.value})}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						value={context.state.email}
						placeholder="Email"
						onChange={e => context.dispatch({type: "email", value: e.target.value})}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Mobile</Form.Label>
					<Form.Control
						type="text"
						value={context.state.mobile}
						placeholder="Mobile"
						onChange={e => context.dispatch({type: "mobile", value: e.target.value})}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Batch</Form.Label>
					<Form.Control
						type="Text"
						value={context.state.batch}
						placeholder="Batch"
						onChange={e => context.dispatch({type: "batch", value: e.target.value})}
					/>
				</Form.Group>
				<Form.Label>Timing</Form.Label>
				<Form.Select
					aria-label="Default select example"
					defaultValue={"0"}
					value={context.state.timing}
					onChange={e => context.dispatch({type: "timing", value: e.target.value})}
				>
					<option value={"0"} disabled>
						Session Timings
					</option>
					<option value="10am to 1pm">10am to 1pm</option>
					<option value="2pm to 4pm">2pm to 4pm</option>
					<option value="6pm to 8pm">6pm to 8pm</option>
				</Form.Select>
				<br />

				<Button variant="primary" onClick={() => handleSubmit()}>
					Submit
				</Button>
			</Form>
			<ToastContainer />
		</div>
	);
}

export default EditUser;
