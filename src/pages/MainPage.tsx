import styled from 'styled-components'

// ** Layout
import TopNav from '../layout/top-nav'
import LeftNav from '../layout/left-nav'
import RightNav from '../layout/right-nav'
import LandingPage from './LandingPage'

const StyledMainPage = styled.div`
    height: 100dvh;
    display: grid;
    grid-template-columns: 20rem 1fr 20rem;
    grid-template-rows: 9rem 1fr;
    grid-template-areas:
        'header header header'
        'leftnav content rightnav';
`
export default function MainPage() {
    return (
        <StyledMainPage>
            <TopNav />
            <LeftNav />
            <RightNav />
            <main>
                <LandingPage />
            </main>
        </StyledMainPage>
    )
}
