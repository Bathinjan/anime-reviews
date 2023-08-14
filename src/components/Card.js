import { Container, Card, Button } from "react-bootstrap";
import pic from "../images/banana-fish.jpg";

export default function Card1(props) {
  // returns a specified number of ascii stars as a span
  function starArray(num) {
    return [...Array(num)].map((star) => {
      return <span className="star">&#9733;</span>;
    });
  }

  return (
    <Container>
      <div className="row justify-content-center">
        <div className="d-flex">
          <Card className="card">
            <div className="text-center">
              <Card.Img
                variant="top"
                className="card-pic"
                src={`${process.env.PUBLIC_URL}${props.image}`} // props.image
              />
            </div>
            <Card.Body>
              <Card.Title className="card-title">{props.title}</Card.Title>
              <Card.Subtitle className="card-subtitle">
                {starArray(parseInt(props.rating))} • {props.rating} out of 5
                stars
              </Card.Subtitle>
              <br></br>
              <Card.Subtitle>{props.genre}</Card.Subtitle>
              <br></br>
              <Card.Text className="card-text">"{props.description}"</Card.Text>
              <br></br>
              <div className="text-center">
                <Button variant="primary">Add to Watchlist</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}
