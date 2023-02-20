import { Container } from "./style";

export function Tag({title, ...rest}) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
}