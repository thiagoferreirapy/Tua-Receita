import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useScroll } from "../../services/context/ScrollContext";
import { HeaderContainer, HeaderContent, Logo, LinkHeader, ButtonAccountUser} from "./style";

import logo from "../../assets/images/logos/logo.svg";
// import iconuser from '../../assets/images/icons/user-white.svg';

export default function Header() {
  const location = useLocation();

  useEffect(() => {
    console.log("Current page:", location.pathname);
    // Você pode fazer algo com a localização atual, como definir o estado atual da página
  }, [location]);
  const currentPage =
    location.pathname === "/" ? "home" : location.pathname.substring(1);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src={logo} />

      <nav>
        <LinkHeader to="/" $isCurrentPage={currentPage === "home"}>
          Início
        </LinkHeader>
        <LinkHeader to="/publish-recipe" $isCurrentPage={currentPage === "publish_recipe"}>
        Públicar receita
        </LinkHeader>
        <LinkHeader to="/favorite" $isCurrentPage={currentPage === "favorite"}>
          Minhas receitas
        </LinkHeader>
        <LinkHeader to="/contacts" $isCurrentPage={currentPage === "contacts"}>
          Contatos
        </LinkHeader>
        <LinkHeader to="/help" $isCurrentPage={currentPage === "help"}>
          Ajuda
        </LinkHeader>
      </nav>
      <ButtonAccountUser>
        Login
      </ButtonAccountUser>
      </HeaderContent>
    </HeaderContainer>
  );
}
