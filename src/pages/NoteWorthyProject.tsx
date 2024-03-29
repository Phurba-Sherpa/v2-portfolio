import styled from 'styled-components'
import Card from '../components/Card'
import Link from '../components/Link'
import { noteWorthyProj } from '../data/note-worthy-projects'

const StyledContainer = styled.section`
padding-block: 9.6rem;
    > header {
        text-align: center;
        > h2 {
            font-size: clamp(24px, 5vw, var(--fs-head));
            margin-bottom: 1rem;
        }
        > a {
            font-size: var(--fs-sm);
            font-family: var(--ff-mono);
            margin-bottom: 5rem;
        }
    }

    > ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        list-style: none;

        @media (max-width: 980px) {
            grid-template-columns: 1fr 1fr;
        }
    }
`

const NoteWorthyProject = () => {
    return (
        <StyledContainer>
            <header>
                <h2>Other Noteworthy Projects</h2>
                <Link>view the archive</Link>
            </header>
            <ul>
                {noteWorthyProj.map((proj, index) => (
                    <Card
                        key={index}
                        desc={proj.desc}
                        title={proj.title}
                        github={proj.github}
                        live={proj.live}
                    />
                ))}
            </ul>
        </StyledContainer>
    )
}
export default NoteWorthyProject
