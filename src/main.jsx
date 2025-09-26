import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import Wrapper from "./components/wrapper/Wrapper.jsx";
import Header from "./components/header/Header.jsx";
import Quickaccess from "./components/quickacces/Quickaccess.jsx";
import Quickaccessitens from "./components/quickacces/quickacessitens.jsx";
import Home from "./assets/home.svg";
import Reels from "./assets/reels.svg";
import Person from "./assets/person.svg";
import Marketplace from "./assets/market.svg";
import Notificacao from "./assets/notificacao.svg";
import Options from "./assets/options.svg";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Wrapper>
      <Header />
      <Quickaccess>
        <Quickaccessitens icone = {Home}/>
        <Quickaccessitens icone = {Reels}/>
        <Quickaccessitens icone = {Person}/>
        <Quickaccessitens icone = {Marketplace}/>
        <Quickaccessitens icone = {Notificacao}/>
        <Quickaccessitens icone = {Options}/>
      </Quickaccess>
      <p>
        Quick Acess - [home, amigos, mensagens, reels, notificacao, marktplace]
      </p>
      <p>
        Area de postar - inclui foto de perfil, input para escrever a postagem
        icone/btn para postar foto
      </p>
      <p>Storys</p>
      <p>feed</p>
    </Wrapper>
  </StrictMode>
);
