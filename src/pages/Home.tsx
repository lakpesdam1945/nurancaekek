import Carousel from "../components/Carousel/Carousel";
import { Container } from "../components/Container";
import { Header } from "../components/Header/Header";

function Home() {
  return (
    <>
      <Header />
      <Container padding="px-4 py-20 pb-20">
        <Carousel />
      </Container>
    </>
  );
}

export { Home };
