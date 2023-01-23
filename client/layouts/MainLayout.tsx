import Navbar from 'components/Navbar'
import React from 'react'
import Container from '@mui/material/Container';
import Player from 'components/Player';

const MainLayout: React.FC = ({}) => {
  return (
    <>
     <Navbar />
     <Container style={{margin: '90px 0'}}>
      {children}
     </Container>
     <Player />
    </>
  )
}

export default MainLayout