import styled from 'styled-components'
import { ElementType } from 'react'

type INavItem = {
  Icon: ElementType
}
const StyledItem = styled.li`
    > a {
        &:link,
        &:visited {
            display: inline-block;
            transition: all 0.2s ease-in;
            > .social-link {
                color: var(--color-slate-300);
            }
        }

        &:hover {
            transform: translateY(-2px);
            > .social-link {
                color: var(--color-green);
            }
        }
    }
`

const SocialLinkItem = ({Icon}: INavItem) => {
    return (
        <StyledItem>
            <a href="#">
                <Icon size={24} className="social-link" />
            </a>
        </StyledItem>
    )
}
export default SocialLinkItem
