import { globalStyles } from "@/styles/global";
import { AppProps } from "next/app";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";

import logoImg from "../assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
