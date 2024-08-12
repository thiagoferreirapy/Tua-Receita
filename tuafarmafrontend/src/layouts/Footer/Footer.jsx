import { FooterContainer, FooterContent, FooterDescription, ImageLogo, Text, FooterContact, Contact, ContentSupport, ImageSupport} from "./style";

import logo from "../../assets/images/logos/logo-white.svg";
import qrcode from "../../assets/images/svgs/qrcode.svg";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterDescription>
            <ImageLogo src={logo}/>
            <Text>Este projeto foi desenvolvido para cunhos educacionais entre desenvolvedores que estão buscabndo conhecimento.</Text>
        </FooterDescription>
        <FooterContact>
            <Contact>
                <Text><strong>Eetre em contato</strong></Text>
                <Text><a href="" target="_blank">(61) 994162084</a></Text>
                <Text><a href="" target="_blank">(98) 985225047</a></Text>
                <Text><a href="" target="_blank">tf938383@gmail.com</a></Text>
                <Text><a href="" target="_blank">deboracris54@gmail.com</a></Text>
            </Contact>
            <Contact>
                <Text><strong>Redes sociais</strong></Text>
                <Text><a href="https://www.linkedin.com/in/thiago-ferreirapy/" target="_blank">Linkedin: thiago-ferreirapy</a></Text>
                <Text><a href="" target="_blank">linkedin: </a></Text>
                <Text><a href="https://github.com/thiagoferreirapy" target="_blank">Github: thiagoferreirapy</a></Text>
                <Text><a href="" target="_blank">github:</a></Text>
            </Contact>
            <ContentSupport>
                <ImageSupport src={qrcode}/>
            </ContentSupport>
        </FooterContact>
      </FooterContent>
    </FooterContainer>
  );
}
