import { type FC, type PropsWithChildren } from "react"
import styled from "styled-components"

const StyledButton = styled.a`
  &:link,
  &:visited {
    display: inline-block;
    color: var(--color-green);
    text-decoration: none;
    border: 1px solid var(--color-green);
    padding: .5em 1.5em;
  }

  &::before {
    /* content: '01';
    display: table;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 2; */
  }
`


const Button: FC<PropsWithChildren> = ({children}) => {
  return (
    <StyledButton href="#">
      {children}
    </StyledButton>
  )
}

export default Button
