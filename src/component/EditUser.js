import {useParams} from "react-router-dom";
import React, {useState, useEffect, useContext} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useNavigate} from "react-router-dom";
import {userContext} from "../component/ContextComponent/UsersContextComponent";

function EditUser() {
	let [name, setName] = useState();
	let [mobile, setMobile] = useState();
	let [email, setEmail] = useState();
	let [batch, setBatch] = useState();
	let [timing, setTiming] = useState();
	let navigate = useNavigate();
	let {id} = useParams();
	let context = useContext(userContext);

	useEffect(() => {
		if (id) {
			setName(context.users[id].name);
			setMobile(context.users[id].mobile);
			setEmail(context.users[id].email);
			setBatch(context.users[id].batch);
			setTiming(context.users[id].timing);
		}
	}, []);

	// let editData = users.splice(id, 1);
	// console.log(editData);

	function handleSubmit() {
		let newArr = [...context.users];
		let newData = {name, mobile, email, batch, timing};

		newArr.splice(id, 1, newData);
		context.setUsers(newArr);
		navigate("/dashboard");
	}
	return (
		<div className="container-fluid">
			<h1>EditUser {id}</h1>
			<Form>
				<Form.Group className="mb-3">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter email"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						value={email}
						placeholder="Email"
						onChange={e => setEmail(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Mobile</Form.Label>
					<Form.Control
						type="text"
						value={mobile}
						placeholder="Mobile"
						onChange={e => setMobile(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Batch</Form.Label>
					<Form.Control
						type="Text"
						value={batch}
						placeholder="Batch"
						onChange={e => setBatch(e.target.value)}
					/>
				</Form.Group>
				<Form.Select
					aria-label="Default select example"
					defaultValue={"0"}
					value={timing}
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

export default EditUser;
