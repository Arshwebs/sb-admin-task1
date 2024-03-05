import {useParams} from "react-router-dom";
import React, {useEffect, useContext, useState} from "react";
import Button from "react-bootstrap/Button";
import {Formik, Field, Form} from "formik";
import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import {userContext} from "../component/ContextComponent/UsersContextComponent";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditUser() {
	const [isValid, setIsValid] = useState(false);

	let navigate = useNavigate();
	let {id} = useParams();
	let context = useContext(userContext);
	const notify = () => toast("User edited successfully!");

	let initialValues = {
		name: context.state.name,
		email: context.state.email,
		mobile: context.state.mobile,
		batch: context.state.batch,
		timing: context.state.timing,
	};
	const UserSchema = yup.object().shape({
		name: yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
		email: yup.string().email("Invalid email").required("Required"),
		mobile: yup
			.string()
			.matches(/^\d{10}$/, "Invalid Mobile Number 10 digits only")
			.required("Required"),
		batch: yup.string().required("Required"),
		timing: yup.string().required("Required"),
	});

	useEffect(() => {
		if (id) {
			context.dispatch({type: "name", value: context.users[id].name});
			context.dispatch({type: "email", value: context.users[id].email});
			context.dispatch({type: "mobile", value: context.users[id].mobile});
			context.dispatch({type: "batch", value: context.users[id].batch});
			context.dispatch({type: "timing", value: context.users[id].timing});

			setIsValid(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function handleSubmit(values) {
		let newArr = [...context.users];
		let newData = {...values};

		newArr.splice(id, 1, newData);
		context.setUsers(newArr);
		context.dispatch({type: "reset"});
		notify();

		setTimeout(() => navigate("/users"), 5000);
	}
	return (
		<div className="container-fluid">
			<br />
			<div className="d-sm-flex align-items-center justify-content-between mb-2 mt-2">
				<h1 className="h4 mb-0 text-gray-800">Add User:</h1>
			</div>
			<br />
			{isValid ? (
				<Formik
					initialValues={initialValues}
					validationSchema={UserSchema}
					onSubmit={values => {
						handleSubmit(values);
					}}
				>
					{({errors, touched}) => (
						<Form>
							<div className="form-group">
								<label htmlFor="name">Name</label>
								<Field name="name" className="form-control" type="text" placeholder="Name" />
								{errors.name && touched.name ? <div style={{color: "red"}}>{errors.name}</div> : null}
							</div>

							<div className="form-group">
								<label htmlFor="email">Email</label>
								<Field name="email" className="form-control" type="email" placeholder="Email" />
								{errors.email && touched.email ? <div style={{color: "red"}}>{errors.email}</div> : null}
							</div>
							<div className="form-group">
								<label htmlFor="mobile">Mobile</label>
								<Field name="mobile" className="form-control" type="text" />
								{errors.mobile && touched.mobile ? <div style={{color: "red"}}>{errors.mobile}</div> : null}
							</div>
							<div className="form-group">
								<label htmlFor="batch">Batch</label>
								<Field name="batch" className="form-control" type="text" />
								{errors.batch && touched.batch ? <div style={{color: "red"}}>{errors.batch}</div> : null}
							</div>
							<div className="form-group">
								<label htmlFor="timing">Timing</label>
								<Field component="select" id="timing" name="timing">
									<option value="">Session Timings</option>
									<option value="10am to 1pm">10am to 1pm</option>
									<option value="2pm to 4pm">2pm to 4pm</option>
									<option value="6pm to 8pm">6pm to 8pm</option>
								</Field>
								{errors.timing && touched.timing ? <div style={{color: "red"}}>{errors.timing}</div> : null}
							</div>
							<br />
							<Button type="submit" variant="primary">
								Submit
							</Button>
						</Form>
					)}
				</Formik>
			) : (
				"Loading...."
			)}
			<ToastContainer />
		</div>
	);
}

export default EditUser;
