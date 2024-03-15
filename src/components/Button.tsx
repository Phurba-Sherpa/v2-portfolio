import { type FC, type PropsWithChildren } from 'react'
import styled from 'styled-components'

const StyledButton = styled.a`
    &:link,
    &:visited {
        display: inline-block;
        color: var(--color-green);
        text-decoration: none;
        border: 1px solid var(--color-green);
        padding: 0.75em 2.25em;
        transition: all 0.3s;
        position: relative;
        background-color: transparent;
        transition:  all .3s ease-in;

        box-shadow: 0px 0px 0 var(--color-green);
      }
      
      &:hover {
      transform: translate(-3px, -3px);
      box-shadow: 3px 3px 0 var(--color-green);
    }
`

const Button: FC<PropsWithChildren> = ({ children }) => {
    return <StyledButton href="#">{children}</StyledButton>
}

export default Button
