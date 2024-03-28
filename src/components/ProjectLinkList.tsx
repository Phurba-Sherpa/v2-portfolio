import { FiExternalLink, FiGithub } from 'react-icons/fi'
import styled from 'styled-components'

const StyledProjectLink = styled.ul`
    list-style: none;
    display: flex;
    gap: 1.6rem;
    align-items: center;
    svg {
        color: var(--color-slate-300);
    }
`

const ProjectLinkList = () => {
    return (
        <StyledProjectLink>
            <li>
                <a href="#">
                    <FiGithub className="github" size={20} />
                </a>
            </li>

            <li>
                <a href="#">
                    <FiExternalLink size={20} />
                </a>
            </li>
        </StyledProjectLink>
    )
}

export default ProjectLinkList
