import React, {useState, useContext} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useNavigate} from "react-router-dom";
import {userContext} from "./ContextComponent/UsersContextComponent";

function AddUser() {
	let [name, setName] = useState();
	let [mobile, setMobile] = useState();
	let [email, setEmail] = useState();
	let [batch, setBatch] = useState();
	let [timing, setTiming] = useState();
	let navigate = useNavigate();
	let context = useContext(userContext);

	function handleSubmit() {
		let newArr = [...context.users];
		let newData = {name, mobile, email, batch, timing};
		newArr.push(newData);
		context.setUsers(newArr);
		console.log(newArr);
		navigate("/dashboard");
	}

	return (
		<div className="container-fluid">
			<h1>Add User</h1>
			<Form>
				<Form.Group className="mb-3">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Enter email" onChange={e => setName(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Mobile</Form.Label>
					<Form.Control type="text" placeholder="Mobile" onChange={e => setMobile(e.target.value)} />
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Batch</Form.Label>
					<Form.Control type="Text" placeholder="Batch" onChange={e => setBatch(e.target.value)} />
				</Form.Group>
				<Form.Select
					aria-label="Default select example"
					defaultValue={"0"}
					onChange={e => setTiming(e.target.value)}
				>
					<option value={"0"} disabled>
						Session Timings
					</option>
					<option value="10am to 1pm">10am to 1pm</option>
					<option value="2pm to 4pm">2pm to 4pm</option>
					<option value="6pm to 8pm">6pm to 8pm</option>
				</Form.Select>

				<Button variant="primary" onClick={() => handleSubmit()}>
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default AddUser;
