import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CandidateCard from "../Components/CandidateCard";
import candidatesJson from "../lib/candidates.json";
import "bootstrap/dist/css/bootstrap.css";
import { Paper } from "@mui/material";


function Voting() {
  
    let [candidates, setCandidates] = useState([]);

    useEffect(() => {
      setCandidates(candidatesJson);
    }, []);
  
    function incrementVoteCount(candidateId) {
      candidates = candidates.map((candidates) => {
        if (candidates._id === candidateId) {
          candidates.votes = candidates.votes + 1;
          return candidates;
        }
        return candidates;
      });
      setCandidates(candidates);
    }
  
    return (
      <div>
            
  
      
      <Container className="app">
  
        <h1>President</h1>
        <Paper sx={{padding: 2}}>
        
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
            return <></>
          }
          )}
        </Row>
        </Paper>
        <br></br>
        <h1>Vice-President</h1>
        <Paper sx={{padding: 2}}>
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
            return <></>
          })}
        </Row>
        </Paper>
        <br></br>
        <h1>University Secretary Seneral</h1>
        <Paper sx={{padding: 2}}>
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
            return <></>
          })}
        </Row>
        </Paper>
        <br></br>
        <h1>Deputy Secretary General</h1>
        <Paper sx={{padding: 2}}>
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
            return <></>
          })}
        </Row>
        </Paper>
        <br></br>
        <h1>University Council Treasurer</h1>
        <Paper sx={{padding: 2}}>
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
            return <></>
          })}
        </Row>
        </Paper>
        <br></br>
        <h1>Student Council Spokesperson</h1>
        <Paper sx={{padding: 2}}>
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
            return <></>
          })}
        </Row>
        </Paper>
      </Container>
      </div>
    );
}

export default Voting