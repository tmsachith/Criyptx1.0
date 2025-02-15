import React from 'react';
import { Container } from '@material-ui/core';
import LanguageTranslation from '../components/LanguageTranslation/LanguageTranslation';

function Translate() {
  return (
    <Container maxWidth="md">
      <LanguageTranslation />
    </Container>
  );
}

export default Translate;