import { Container } from "./style";

export function ButtonText({title, isActive = false, ...rest}) {
  return (
    <Container 
      type="button"
      isActive={isActive} 
      {...rest} 
      >
      {title}
    </Container>
  )
}