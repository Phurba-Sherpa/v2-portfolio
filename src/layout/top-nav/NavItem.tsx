import { FC } from 'react'
import styled from 'styled-components'

type INavItem = {
    index: string
    menuName: string
}
const StyledNavItem = styled.li<{ index: string }>`
    list-style: none;
    &::before {
        content: '${(props) => props.index}';
        display: 'table';
        margin-right: 0.5rem;
        color: var(--color-green);
    }

    > a {
        &:link,
        &:visited {
            display: inline-block;
            color: inherit;
            text-decoration: none;
            transition: all .3s;
        }

        &:hover {
            color: var(--color-green);
        }
    }
`
const NavItem: FC<INavItem> = ({ index, menuName }) => {
    return (
        <StyledNavItem index={`${index}.`}>
            <a className="" href="#">
                {menuName}
            </a>
        </StyledNavItem>
    )
}
export default NavItem
