import styled from 'styled-components'

const StyledTechStack = styled.ul`
    list-style: none;
    display: flex;
    font-family: var(--ff-mono);
    gap: 1.5em;
    align-items: center;
    font-size: var(--fs-xs);
    color: var(--color-slate-300);
`

type ITectStack = {
    techs: string[]
}
const TechStackList = ({ techs }: ITectStack) => {
    return (
        <StyledTechStack>
            {techs.map((tech, index) => (
                <li key={index}>{tech}</li>
            ))}
        </StyledTechStack>
    )
}

export default TechStackList
