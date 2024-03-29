import { Container, Form } from "./style";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { useState } from "react";
import { api } from "../../services/api";
import { ButtonText } from "../../components/ButtonText";

export function New() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function handleBack() {
    navigate(-1)
  }
 
  const navigate = useNavigate()

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  async function handleNewNote() {
    if(!title) {
      return alert('Adicione um título a sua nota.')
    }

    if(newLink) {
      return alert('Você esqueceu de adicionar um link.')
    }

    if(newTag) {
      return alert('Você esqueceu de adicionar uma tag.')
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })

    alert("Nota criada com sucesso!")
    navigate(-1)
  }

  return(
    <Container>
        <Header/>
        
      <main>
          <Form>
            <header>
              <h1>Criar nota</h1>
              <ButtonText 
                 title="voltar"
                 onClick={handleBack}
              />
            </header>
            <Input 
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />
            <Textarea 
              placeholder="Observações"
              onChange={e => setDescription(e.target.value)}
            />
            
            <Section title="Links úteis" >
              {
                links.map((link, index) => (
                  <NoteItem  
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
                ))
              }

              <NoteItem 
                isNew 
                placeholder="Novo link" 
                value={newLink}
                onChange={e => setNewLink(e.target.value)}
                onClick={handleAddLink}
              />
            </Section>

            <Section title="Marcadores" >
              <div className="tags">
                {
                  tags.map((tag, index) => (
                    <NoteItem 
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}
                    />
                  ))
                }

                <NoteItem 
                  isNew 
                  placeholder="Nova tag"
                  onChange={e => setNewTag(e.target.value)}
                  value={newTag}
                  onClick={handleAddTag}
                />
              </div>
            </Section>
            <Button 
              title='Salvar'
              onClick={handleNewNote}
            />
          </Form>
      </main>
    </Container>
  )
}