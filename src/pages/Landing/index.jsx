import  "./index.css"; 
import { Button, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";




// general landing page
// email news letter +social media

const Landing = () => {

  return (
    <Container className="main">

    <Box>
    
    <nav>
      
    
      <Link to= "/signin"><Button variant="contained">Sign In</Button></Link>
      <Link to= "/signup"><Button variant="contained">Log In</Button></Link>
      
      
    </nav>
    </Box>
    <Container>
    <h1 className="intro">Welcome to PetCare App!</h1>
      
    <section className="landing">
    <h3 className="first-section">
    Welcome to PetCareApp! <br />

    The Ultimate Pet Care Companion

  Are you a dedicated pet parent who wants to provide the best care for your furry friends? Look no further! Introducing PetCareApp, the all-in-one solution for pet owners like you. Our revolutionary mobile application brings convenience and peace of mind to your fingertips, ensuring your beloved pets receive the love and attention they deserve.


    </h3>
    <h3 className="second-section">

    Track Your Pet's Health <br />


Never miss an important appointment again! With PetCareApp, you can effortlessly keep track of your pet's medical schedule. From routine check-ups to vaccinations, our app conveniently reminds you of upcoming appointments, ensuring your pet stays healthy and happy. Say goodbye to sticky notes and hello to organized pet care.
    </h3>

    </section>
    </Container>
    </Container>

  )
}

export default Landing
