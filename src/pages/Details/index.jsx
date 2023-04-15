import { Container, Links, Content } from "./style"

import { useNavigate, useParams } from 'react-router-dom';

import { useState, useEffect } from "react";

import { api } from "../../services/api";

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

export function Details() {
  const [data, setData] = useState(null)
  const params = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data);
    }

    fetchNote();

  }, [])

  function handleBack() {
    navigate('/')
  }
  
  async function handleRemove() {
    const confirm = window.confirm("Deseja remover está nota?")

    await api.delete(`/notes/${params.id}`)
    navigate("/")
  }

  return (

    <Container>
      <Header />

      {
        data &&
        <main>
          <Content>
            <ButtonText
              title="Excluir nota"
              onClick={handleRemove}
            />

            <h1>
              {data.tittle}
            </h1>

            <p>
              {data.description}
            </p>

            {
              data.links &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a target="_blank" href="{link.url}">{link.url}</a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    < Tag
                      key={String(tag.id)}
                      title={tag.name}
                    />
                  ))
                }
              </Section>
            }

            <Button
              title="Voltar"
              onClick={handleBack}
            />

          </Content>
        </main>
      }

    </Container >
  )
}