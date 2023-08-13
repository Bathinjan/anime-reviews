// Earlier version of Card.js, saving for reference cuz I forgor how to do things
import { Container, Card, Col, Button } from "react-bootstrap";

export default function Card2(props) {
  console.log(props);
  let badgeText = "Book Now";
  let buttonVariant = "primary";
  if (props.openSpots === 0) {
    badgeText = "Sold Out";
    buttonVariant = "danger";
  }
  return (
    <Container className="example4">
      <Col md="7">
        <Card className="Card">
          {props.location === "Online" && (
            <div className="card--online-badge">Online</div>
          )}
          <div class="text-center">
            <Card.Img
              variant="top"
              className="card-pic"
              src={props.coverImage}
            />
          </div>
          {props.openSpots === 0 && (
            <Button variant="danger" className="card--sold-out" disabled>
              Sold Out
            </Button>
          )}
          <Card.Body>
            <Card.Subtitle>
              <img
                className="small-logo"
                src="/images/star-logo.png"
                alt=""
              ></img>
              {props.stats.rating} ({props.stats.reviewCount}) •{" "}
              {props.location}
            </Card.Subtitle>
            <br></br>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <span>From {props.price} / person</span>
            <br></br>
            <br></br>
            <div class="text-center">
              {props.openSpots > 0 && (
                <Button variant="primary">Book Now</Button>
              )}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}
