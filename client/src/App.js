import { Routes, Route } from 'react-router-dom';
import Container from './components/layout/Container/Container';
import Home from './components/pages/Home/Home';


const App = () => {
  return(
    <main>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>      
    </main>
  )
};

export default App;
