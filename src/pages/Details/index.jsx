import { Container, Links } from "./style"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"

export function Details() {
  return(
    <Container>
      <Header/>

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

      <Button title="Entrar" loading />
      
    </Container>
  )
}