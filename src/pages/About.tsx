import styled from 'styled-components'

const StyledAboutSection = styled.section`
    height: 100%;
    width: 90%;
    background-color: orangered;
    margin: 0 auto;
    /* padding-block: 2em;     */
    > .section-title {
        font-weight: 800;
        font-size: clamp(2.6rem, 5vw, var(--fs-head));
        font-family: var(--ff-mono);
        position: relative;
        &::before {
            counter-increment: section 1;
            content: "0" counter(section) ".";
            color: var(--color-green);
            font-weight: 400;
            margin-right: .825em;
            font-size: clamp(var(--fs-md), 8vw, var(--fs-lg));
        }

        &::after {
            content: '';
            width: 50%;
            height: 1px;
            transform-origin: right;
            background-color: var(--color-brand-200);
            display: inline-block;
            margin-left: 2rem;
            margin-bottom: .5rem;

        }
    }

    @media (max-width: 1024px) {
        width: 100%;
    }
`
const About = () => {
    return <StyledAboutSection>
        <h2 className='section-title'>About me</h2>
    </StyledAboutSection>
}
export default About
