import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

// ** Layout
import TopNav from '../layout/top-nav'
import LeftNav from '../layout/left-nav'
import RightNav from '../layout/right-nav'

const StyledAppLayout = styled.div`
    height: 100dvh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 9rem 1fr;
    grid-template-areas:
        'header'
        'content';
`

const StyledContentSection = styled.main`
    max-width: 100rem;
    width: 90%;
    margin: 0 auto;
    height: calc(100vh - 90px);
`

export default function AppLayout() {
    return (
        <StyledAppLayout>
            <TopNav />
            <LeftNav />
            <RightNav />
            <StyledContentSection>
                <Outlet />
            </StyledContentSection>
        </StyledAppLayout>
    )
}
