import { PropsWithChildren} from 'react'
import styled from 'styled-components'

const StyledH2 = styled.h2`
    font-weight: 800;
    font-size: clamp(2.6rem, 5vw, var(--fs-head));
    font-family: var(--ff-mono);
    position: relative;
    margin-bottom: 1em;
    &::before {
        counter-increment: section 1;
        content: '0' counter(section) '.';
        color: var(--color-green);
        font-weight: 400;
        margin-right: 0.825em;
        font-size: clamp(var(--fs-md), 8vw, var(--fs-lg));
    }

    &::after {
        content: '';
        width: 30%;
        height: 1px;
        transform-origin: right;
        background-color: var(--color-brand-200);
        display: inline-block;
        margin-left: 2rem;
        margin-bottom: 0.5rem;
    }
`
const Title = ({ children }: PropsWithChildren) => {
    return <StyledH2>{children}</StyledH2>
}
export default Title
