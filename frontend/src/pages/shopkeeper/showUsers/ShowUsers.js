// import "./styles.css";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDiv from './CardDiv';

export default function ShowUsers() {
  return (
    <div >
      <h1>Ongoing Deliveries</h1>

      <div class="grid grid-cols-4 gap-4 m-20">
      <CardDiv/>
      <CardDiv/>
      <CardDiv/>
      <CardDiv/>
      <CardDiv/>
      <CardDiv/>
      <CardDiv/>
</div>
</div>
      
  );
}
