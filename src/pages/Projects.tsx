import styled from 'styled-components'
import Title from '../components/Title'
import ProjectItem from '../components/ProjectItem'
import { PROJECTS } from '../data'

const StyledProjectSection = styled.section`
    padding-block: 9.6rem;
    > ul {
        > li:not(:last-child) {
            margin-bottom: 9.6rem;
        }
    }
`
const Projects = () => {
    return (
        <StyledProjectSection>
            <Title>Some Things I’ve Built</Title>
            <ul>
                {PROJECTS.map((project, index) => <ProjectItem key={index} {...project} />)}
               
            </ul>
        </StyledProjectSection>
    )
}
export default Projects
