import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CandidateCard from "./Components/CandidateCard";
import candidatesJson from "./lib/candidates.json";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";

function App() {
  
  let [candidates, setCandidates] = useState([]);

  useEffect(() => {
    setCandidates(candidatesJson);
  }, []);

  function incrementVoteCount(candidateId) {
    candidates = candidates.map((candidates) => {
      if (candidates._id === candidateId) {
        candidates.votes = candidates.votes + 1;
  
      }
      return candidates;
    });
    setCandidates(candidates);
  }

  return (
    <div>
            <Header/>

    
    <Container className="app">

      <h1>Presidents</h1>
      
      <Row>
        {candidates.map((candidates) => {
          if(candidates.type==="President"){
          return (
            <Col md={4}>
              <CandidateCard
                candidates={candidates}
                incrementVoteCount={(candidateId) => incrementVoteCount(candidateId)}
              />
            </Col>
          );}
        })}
      </Row>
      <br></br>
      <h1>Vice-Presidents</h1>
      
      <Row>
        {candidates.map((candidates) => {
          if(candidates.type==="Vice-President"){
          return (
            <Col md={4}>
              <CandidateCard
                candidates={candidates}
                incrementVoteCount={(candidateId) => incrementVoteCount(candidateId)}
              />
            </Col>
          );}
        })}
      </Row>
      <br></br>
      <h1>University secretary general</h1>
      
      <Row>
        {candidates.map((candidates) => {
          if(candidates.type==="University secretary general"){
          return (
            <Col md={4}>
              <CandidateCard
                candidates={candidates}
                incrementVoteCount={(candidateId) => incrementVoteCount(candidateId)}
              />
            </Col>
          );}
        })}
      </Row>
      <br></br>
      <h1>Deputy secretary general</h1>
      
      <Row>
        {candidates.map((candidates) => {
          if(candidates.type==="Deputy secretary general"){
          return (
            <Col md={4}>
              <CandidateCard
                candidates={candidates}
                incrementVoteCount={(candidateId) => incrementVoteCount(candidateId)}
              />
            </Col>
          );}
        })}
      </Row>
      
      <br></br>
      <h1>University council treasurer</h1>
      
      <Row>
        {candidates.map((candidates) => {
          if(candidates.type==="University council treasurer"){
          return (
            <Col md={4}>
              <CandidateCard
                candidates={candidates}
                incrementVoteCount={(candidateId) => incrementVoteCount(candidateId)}
              />
            </Col>
          );}
        })}
      </Row>
      <br></br>
      <h1>Student council spokesperson</h1>
      
      <Row>
        {candidates.map((candidates) => {
          if(candidates.type==="Student council spokesperson"){
          return (
            <Col md={4}>
              <CandidateCard
                candidates={candidates}
                incrementVoteCount={(candidateId) => incrementVoteCount(candidateId)}
              />
            </Col>
          );}
        })}
      </Row>
    </Container>
    </div>
  );
}
export default App;