import { Routes, Route } from "react-router-dom";
import Header from "./component/header/header";
import Sidebar from "./component/sidebar/sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./screen/homeScreen/HomeScreen";
import "./app.scss";
import WatchScreen from "./screen/watchSreen/WatchScreen";
import SearchScreen from "./screen/SearchScreen";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="app__container ">
        <Sidebar />
        <Container fluid className="app__main ">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }
      />
      <Route
        path="/search/:query"
        exact
        element={
          <Layout>
            <SearchScreen/>
          </Layout>
        }
      />
      <Route
        path="/watch/:id"
        exact
        element={
          <Layout>
            <WatchScreen/>
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
