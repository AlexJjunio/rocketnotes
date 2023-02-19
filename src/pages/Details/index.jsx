import { Container, Links, Content } from "./style"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

export function Details() {
  return(

    <Container>
      <Header/>

      <main>
        <Content>
      <ButtonText title="Excluir nota"/>

      <h1>
        Introdução ao React
      </h1>
      
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos omnis amet dolorem et sunt quae quisquam optio cupiditate accusantium, placeat reiciendis ducimus neque, dolor necessitatibus voluptatem veniam rerum numquam non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex iste cupiditate eligendi vel fuga hic ad ab recusandae tenetur architecto provident, esse numquam, nam qui rem sequi in tempora.
      </p>

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

        </Content>
      </main>

    </Container>
  )
}