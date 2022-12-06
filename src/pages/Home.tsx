import TokohCard from "../components/Card/TokohCard";
import WartaCard from "../components/Card/WartaCard";
import Carousel from "../components/Carousel/Carousel";
import { backgroundList, Container } from "../components/Container";
import { Header } from "../components/Header/Header";
import SepartorsContent from "../components/SepartorsContent";

function Home() {
  return (
    <>
      <Header />
      <Container padding="px-4 py-20 pb-20 w-full min-h-screen">
        <Carousel />
        <SepartorsContent
          theme={backgroundList.primary}
          title="Warta"
          ButtonIconLink="/warta"
        />
        <WartaCard />
        <SepartorsContent
          theme={backgroundList.primary}
          title="Tokoh Nahdlatul Ulama"
          ButtonIconLink="/tokoh"
        />
        <TokohCard />
      </Container>
    </>
  );
}

export { Home };
