import React from "react";
import {useParams} from "react-router-dom";

function EditUser() {
	let params = useParams();

	return (
		<div>
			<h1>EditUser {params.id}</h1>
		</div>
	);
}

export default EditUser;
