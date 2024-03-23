import styled from 'styled-components'
import { FaGithub, FaMedium, FaLinkedin } from 'react-icons/fa6'

import SocialLinkItem from './SocialLinkItem'

const StyledNav = styled.nav`
    height: 100%;
    display: flex;
    padding-bottom: 170px;
    position: fixed;
    left: 6rem;
    bottom: 0;

    > ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        position: relative;
        margin-top: auto;
        margin-inline: auto;

        &::before {
            content: '';
            width: 1px;
            height: 145px;
            top: 115%;
            left: 50%;
            background-color: var(--color-slate-300);

            position: absolute;
        }
    }

    @media (max-width: 1200px) {
        left: 3rem;
    }
    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export default function LeftNav() {
    return (
        <StyledNav>
            <ul>
                <SocialLinkItem Icon={FaGithub} />
                <SocialLinkItem Icon={FaLinkedin} />
                <SocialLinkItem Icon={FaMedium} />
            </ul>
        </StyledNav>
    )
}
