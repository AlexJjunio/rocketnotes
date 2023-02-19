import { Container } from "./style";

export function ButtonText({title, ...rest}) {
  return (
    <Container type="button" {...rest} >
      {title}
    </Container>
  )
}