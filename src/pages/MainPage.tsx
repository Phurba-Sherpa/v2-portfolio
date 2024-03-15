import styled from 'styled-components'

// ** Layout
import TopNav from '../layout/top-nav'
import LeftNav from '../layout/left-nav'
import RightNav from '../layout/right-nav'
import LandingPage from './LandingPage'

const StyledMainPage = styled.div`
    height: 100dvh;
    display: grid;
    grid-template-columns: 13rem 1fr 13rem;
    grid-template-rows: 9rem 1fr;
    grid-template-areas:
        'header header header'
        'leftnav content rightnav';
    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-template-areas:
            'header'
            'content';
    }
`

const StyledContentSection = styled.main`
    max-width: 100rem;
    width: 90%;
    margin: 0 auto;
`

export default function MainPage() {
    return (
        <StyledMainPage>
            <TopNav />
            <LeftNav />
            <RightNav />
            <StyledContentSection>
                <LandingPage />
            </StyledContentSection>
        </StyledMainPage>
    )
}
