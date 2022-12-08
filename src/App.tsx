import Layout from "./Layouts";
import Container from "./Layouts/Container";
import Footer from "./Layouts/Footer/Index";
import Header from "./Layouts/Header/Header";
import Main from "./Layouts/Main/Index";

function App() {
  return (
    <>
      <Layout>
        <Container padding="px-4 py-4" fixed position={"top"} borderBottom>
          <Header />
        </Container>
        <Container>
          <Main>
            <p className="text-xl w-full leading-relaxed overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              eveniet quasi, sed similique reiciendis optio nulla sunt,
              accusamus eum neque at beatae fugiat alias illo dignissimos
              tenetur aliquid ea ad stop.
            </p>
          </Main>
        </Container>
        <Container padding="px-4 py-4" fixed position={"bottom"} borderTop>
          <Footer />
        </Container>
      </Layout>
    </>
  );
}

export default App;
