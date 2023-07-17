import  "./index.css"; 
import { Button, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";



// general landing page
// email news letter +social media

const Landing = () => {

  return (
    <Container>
      <Box>
    <h1 className="intro">Welcome to PetCare App!</h1>
    <nav>
      <Link to= "/"><Button variant="contained">About</Button></Link>
      <Link to= "/signin"><Button variant="contained">Sign In</Button></Link>
      <Link to= "/signup"><Button variant="contained">Log In</Button></Link>
      
      
    </nav>
    </Box>
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
    <h3 className="third-section">
    Securely Store Pet Documents <br />

Tired of rummaging through stacks of papers to find your pet's vital documents? Our app offers a secure and centralized storage system for all your pet's important records. You can easily upload and access documents such as vaccination records, medical history, and insurance details, all in one place. Rest assured, your pet's information is safe and accessible whenever you need it.
    </h3>

    <h3 className="fourth-section">
    Annual Health Tracking <br />


Maintaining your pet's overall well-being has never been easier. PetCareApp allows you to monitor your pet's annual health progress effortlessly. From weight management to dental care, our app provides you with insightful data and reminders, helping you stay proactive in your pet's long-term health. Keep track of milestones, set goals, and celebrate your pet's achievements together.
    </h3>

    <h3 className=" fifth-section">
    Interactive Pet Experience <br />

We understand the importance of bonding and spending quality time with your pets. With PetCareApp, you can take your interaction with your furry companion to the next level. Engage in a variety of interactive features, including virtual pet games, exercise challenges, and even video calls. Whether you're at work or on the go, you can always stay connected with your pet, ensuring they feel loved and cared for, even when you're apart.
    </h3>

    <h3 className="sixth-section">Download PetCareApp Today! <br />


Join thousands of pet owners who have already discovered the joys of using PetCareApp. Our user-friendly interface, comprehensive features, and dedication to pet care excellence set us apart from the rest. Download our app now and embark on a journey of seamless pet care management.

Give your pets the love and care they deserve with PetCareApp - your trusted companion for all things pet care. Together, we can create a healthier, happier world for our furry friends!

Note: This is a fictional landing page description created for illustrative purposes only.</h3>

    </section>
    </Container>

  )
}

export default Landing
