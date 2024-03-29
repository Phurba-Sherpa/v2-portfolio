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
type ILink = {
    code: string
    live: string
}
const ProjectLinkList = ({ code, live }: ILink) => {
    return (
        <StyledProjectLink>
            <li>
                <a href={code}>
                    <FiGithub className="github" size={20} />
                </a>
            </li>

            <li>
                <a href={live}>
                    <FiExternalLink size={20} />
                </a>
            </li>
        </StyledProjectLink>
    )
}

export default ProjectLinkList
