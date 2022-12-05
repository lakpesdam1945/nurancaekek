import { Container, backgroundList } from "./components/Container";
import Layout from "./components/Layout";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";

function App() {
  return (
    <>
      <Layout>
        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/warta" element={<Home />}></Route>
            <Route path="/tokoh" element={<Home />}></Route>
            <Route path="*" element={<div>Not Found</div>}></Route>
          </Routes>
          <BottomNavigation />
        </Container>
      </Layout>
    </>
  );
}

export default App;
