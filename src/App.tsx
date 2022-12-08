import Layout from "./Layouts";
import Container from "./Layouts/Container";
import Footer from "./Layouts/Footer/Index";
import Header from "./Layouts/Header/Header";
import Main from "./Layouts/Main/Index";

function App() {
  return (
    <>
      <Layout>
        <Container padding="px-4 py-4" borderBottom position="top" fixed>
          <Header />
        </Container>
        <Container>
          <Main>
            <p>Hallo</p>
          </Main>
        </Container>
        <Container padding="px-4 py-4" borderTop position="bottom" fixed>
          <Footer />
        </Container>
      </Layout>
    </>
  );
}

export default App;
