import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";


const CardDiv = () => {
  return (
    <div>
    <div className="div">
        <Card bg="light" border="primary" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" />
          <Card.Body>
            <Card.Title>Jaspreet Singh</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item>Sector 36 - sector 14</ListGroup.Item>
              <ListGroup.Item>Products: rice,lays,wheat</ListGroup.Item>
              <ListGroup.Item>UID: 20125454</ListGroup.Item>
              <ListGroup.Item>Commision: Rs-80</ListGroup.Item>
            </ListGroup>
            <div className="buttons">
              <Button className="button mr-8" variant="success">
                Pay Now
              </Button>
              <Button className="button" variant="primary">
                Track
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div></div>
  )
}

export default CardDiv