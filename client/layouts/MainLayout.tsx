import Navbar from 'components/Navbar'
import React from 'react'
import Container from '@mui/material/Container';

const MainLayout: React.FC = ({}) => {
  return (
    <>
     <Navbar />
     <Container style={{margin: '90px 0'}}>
      {children}
     </Container>
    </>
  )
}

export default MainLayout