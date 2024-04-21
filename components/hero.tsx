import Balancer from "react-wrap-balancer";

import { ModeToggle } from "./mode-toggle";
import { Container } from "./ui/container";

const Hero = () => {
  return (
    <section id="hero" aria-label="Hero" className="py-10">
      <Container>
        <div className="flex justify-end mb-2">
          <ModeToggle />
        </div>
        <h1 className="text-center">Crypto Price Tracker App</h1>
        <h4 className="text-muted-foreground mt-2 text-center">
          Track the price of cryptocurrencies in real time
        </h4>
        <p className="text-center">
          <Balancer>
            This app will allow users to view the current prices of selected
            cryptocurrencies, all within a clean and intuitive user interface. I
            aim to demonstrate my skills in front-end development, TypeScript,
            and clean coding practices with this project.
          </Balancer>
        </p>
      </Container>
    </section>
  );
};

export default Hero;
