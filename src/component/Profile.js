import {useContext} from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {useNavigate, useParams} from "react-router-dom";
import {userContext} from "./ContextComponent/UsersContextComponent";
import {Button} from "react-bootstrap";

function Profile() {
	const {users} = useContext(userContext);
	const navigate = useNavigate();
	const {id} = useParams();

	return (
		<div className="container-fluid mt-3">
			<Card style={{width: "20rem"}}>
				<Card.Img variant="top" src="https://placehold.co/400" />
				<Card.Body>
					<Card.Title>{users[id].name}</Card.Title>
					<Card.Text>{users[id].email}</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroup.Item>Mobile: {users[id].mobile}</ListGroup.Item>
					<ListGroup.Item>Batch: {users[id].batch}</ListGroup.Item>
					<ListGroup.Item>Timing: {users[id].timing}</ListGroup.Item>
				</ListGroup>
				<Card.Body>
					<Button variant="primary" onClick={() => navigate(`/edit-user/${id}`)}>
						Edit
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Profile;
