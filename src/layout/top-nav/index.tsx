import styled from 'styled-components'
import logoUrl from '../../assets/logo.svg'
import NavItem from './NavItem'
import Button from '../../components/Button'

const StyledNav = styled.nav`
    padding-inline: 6rem;
    font-size: var(--fs-xs);
    grid-area: header;
    font-family: 'Fira Code', monospace;
    color: var(--color-slate-200);
    display: flex;
    justify-content: space-between;
    align-items: center;
    > img {
        width: 8rem;
    }

    .nav-container {
        display: flex;
        align-items: center;
        gap: 2rem;
        > ul {
            display: flex;
            gap: 2rem;
        }
    }
`

export default function TopNav() {
    return (
        <StyledNav>
            <img src={logoUrl} alt="logo" />
            <div className="nav-container">
                <ul>
                    <NavItem index="01" menuName="About" key="about" />
                    <NavItem
                        index="02"
                        menuName="Experience"
                        key="experience"
                    />
                    <NavItem index="03" menuName="Work" key="work" />
                    <NavItem index="04" menuName="Contact" key="contact" />
                </ul>
                <div>
                    <Button>Resume</Button>
                </div>
            </div>
        </StyledNav>
    )
}
