import React from 'react';
import { Typography, Container } from '@material-ui/core';
import Map from '../components/Map/Map';

function Explore() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom>Explore Sri Lanka</Typography>
      <Map />
    </Container>
  );
}

export default Explore;