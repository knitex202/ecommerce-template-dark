
import Image from "next/image";
import Container from "./components/Container";
import Banner from "./components/banner/Banner";

export default function Home() {
  return (
    <div className="w-screen h-full">
      <Banner />
      <Container>
        container
      </Container>
    </div>
  );
}
