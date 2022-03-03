import React from "react";
import { Card, Button } from "react-bootstrap";

function CandidateCard(props) {
  let { candidates, incrementVoteCount } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`/assets/images/${candidates.logo}`} style={{height:"10rem"}} />
      <Card.Body>
        <Card.Title>{candidates.name}</Card.Title>
        <Button variant="success" onClick={() => incrementVoteCount(candidates._id)}>
          Vote
        </Button>
      </Card.Body>
      <Card.Footer>Vote count: {candidates.votes}</Card.Footer>
    </Card>
  );
}
export default CandidateCard;