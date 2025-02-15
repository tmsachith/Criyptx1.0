import React from 'react';
import { Container } from '@material-ui/core';
import BudgetTracker from '../components/BudgetTracker/BudgetTracker';

function Budget() {
  return (
    <Container maxWidth="md">
      <BudgetTracker />
    </Container>
  );
}

export default Budget;