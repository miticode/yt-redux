
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './component/header/header';
import Sidebar from './component/sidebar/sidebar';
import { Container } from 'react-bootstrap';
import HomeScreen from './screen/homeScreen/HomeScreen';
import './app.scss';


const Layout = ({ children }) => {
 
  return (
    <>
      <Header />
      <div className='app__container border border-info'>
        <Sidebar   />
        <Container fluid className='app__main border border-warning'>
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout><HomeScreen /></Layout>} />
      
        <Route path='/search' element={<Layout><h1>Search</h1></Layout>} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Router>
  );
};

export default App;
