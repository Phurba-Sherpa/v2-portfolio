import { FC, ReactNode } from "react"
import styled from "styled-components"

type ILink = {
    children: ReactNode
}

const StyledLink = styled.a`
    &:link,
    &:visited {
        text-decoration: none;
        display: inline-block;
        color: var(--color-green);
    }
`

const Link:FC<ILink> = ({children}) => {
    return <StyledLink href="#">
        {children}
    </StyledLink>
}
export default Link