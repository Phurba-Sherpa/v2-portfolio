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
        position: relative;
        &::after {
            content: '';
            width: 100%;
            height: 1px;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: currentColor;
            transition: transform .3s ease-in;
            transform: scaleX(0);
            transform-origin: right;

        }
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }
`

const Link:FC<ILink> = ({children}) => {
    return <StyledLink href="#">
        {children}
    </StyledLink>
}
export default Link