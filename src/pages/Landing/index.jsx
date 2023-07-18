import  "./index.css"; 
import { Button, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";




// general landing page
// email news letter +social media

const Landing = () => {

  return (
    <Container className="main">

    <Box className= "navbar">
    
    <nav className="nav">
      <Link to= "/signin"><Button variant="contained">Sign In</Button></Link> 

      <Link to= "/signup"><Button variant="contained">Log In</Button></Link>
      
      
    </nav>
    </Box>
    <Container>
    <h1 className="intro">Welcome to PetCare App!</h1>
      
    <section className="landing">
    <h3 className="first-section">
     <br />

    The Ultimate Pet Care Companion

    Meet PetCareApp, the revolutionary mobile application that offers convenience and peace of mind to dedicated pet parents. Provide your furry friends with the best care they deserve, all in one place


    </h3>
    <h3 className="second-section">

    Track Your Pet's Health <br />


    Effortlessly track your pet's health with PetCareApp's convenient reminders for medical appointments, ensuring a healthy and happy pet without the need for sticky notes.





    </h3>

    </section>
    </Container>
    </Container>

  )
}

export default Landing
