import { Container, Links } from "./style"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

export function Details() {
  return(
    <Container>
      <Header/>

      <ButtonText title="Excluir nota"/>

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="https://www.instagram.com/alex_jjunio/">https://www.instagram.com/alex_jjunio/</a>
            </li>
          <li>
            <a href="https://www.linkedin.com/in/alex-junio-3a6b00214/">https://www.linkedin.com/in/alex-junio-3a6b00214/</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express"/>
        <Tag title="nodejs"/>
      </Section>


      <Button title="Voltar" />
      
    </Container>
  )
}