import  "./index.css"; 
import { Button, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";




// general landing page
// email news letter +social media

const Landing = () => {

  return (
    <Container className="main" sx= {{

      "width": "100vw;",
      "height": "100vh",
    "backgroundImage": 'url("https://img.freepik.com/free-vector/frame-with-dogs-vector-white-background_53876-127700.jpg?w=2000") ' ,
    "backgroundSize": "cover",
    "color": "rgb(24, 163, 243)",
    }}>

    <Box className= "navbar" sx= {{
      "display": "flex",
      "flexDirection": "row",
      "justify-content": "flex-end",
      "border": "10px solid rgb(86, 85, 85)",
      "background-color": "rgb(86, 85, 85)"
    }}>
    
    <nav className="nav" sx= {{
      "display": "flex",
      "padding": "10px",
      "gap": "10px",
    }}>
      <Link to= "/signin"><Button variant="contained">Sign In</Button></Link> 

      <Link to= "/signup"><Button variant="contained">Log In</Button></Link>
      
      
    </nav>
    </Box>
    <Container sx= {{
      "line-height": "30px",
      "margin-top": "50px",
      "min-height": "150px",
      "min-width": "400px",
      "text-align": "center",
      "border-radius": "50%",
      "padding": "30px"

    }} >
     
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
