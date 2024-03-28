import styled from 'styled-components'
import Title from '../components/Title'
import ProjectItem from '../components/ProjectItem'

const StyledProjectSection = styled.section`
    /* border: 1px solid orangered; */

    > ul {
        >li:not(:last-child) {
            margin-bottom: 6.4rem;
        }
    }
`
const Projects = () => {
    return (
        <StyledProjectSection>
            <Title>Some Things I’ve Built</Title>
            <ul>
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </ul>
        </StyledProjectSection>
    )
}
export default Projects
