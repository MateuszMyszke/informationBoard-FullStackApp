import { Routes, Route } from 'react-router-dom';
import Container from './components/layout/Container/Container';
import Home from './components/pages/Home/Home';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';


const App = () => {
  return(
    <main>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </Container>
        <Footer />      
    </main>
  )
};

export default App;
