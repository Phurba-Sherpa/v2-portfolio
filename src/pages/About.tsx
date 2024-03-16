import styled from 'styled-components'
import Title from '../components/Title'
import { PropsWithChildren } from 'react'
import Link from '../components/Link'

const StyledAboutSection = styled.section`
    height: 100%;
    width: 90%;
    /* background-color: orangered; */
    margin: 0 auto;
    /* padding-block: 2em;     */
    .section-title {
    }
    > ul {
        list-style: none;
        font-size: var(--fs-xs);
        font-family: var(--ff-mono);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        max-width: 60ch;
        row-gap: 0.625em;
        margin-top: 1.5em;
    }

    @media (max-width: 1024px) {
        width: 100%;
    }
`
const About = () => {
    return (
        <StyledAboutSection>
            <Title>About me</Title>
            <section>
                <p>
                    Hello! I am Phurba Sherpa, a&nbsp;
                    <Link> React Developer based in Pokhara, Nepal</Link>. I
                    building the Front-end of Websites and Web Applications that
                    leads to the success of the overall product.
                </p>
                <p>
                    I have serious passion for UI effects, animations and
                    creating intuitive, dynamic user experiences. I also like&nbsp;
                    <Link>sharing content</Link> related to the stuff that I
                    have learned over the years in Web Development so it can
                    help other people of the Dev Community.
                </p>
                <p>
                    I'm open to Job opportunities where I can contribute, learn
                    and grow. If you have a good opportunity that matches my
                    skills and experience then don't hesitate to contact me.
                </p>
                <p>Below are a few technologies I've had worked so far:</p>
            </section>
            <SkillList />
        </StyledAboutSection>
    )
}

///////////////////////
/* SKILL */
///////////////////////
const StyledListItem = styled.li`
    &::before {
        content: '▹';
        display: inline-block;
        color: var(--color-green);
        margin-right: 0.75em;
    }
`
const SkillItem = ({ children }: PropsWithChildren) => {
    return <StyledListItem>{children}</StyledListItem>
}

const SkillList = () => {
    return (
        <ul>
            <SkillItem>HTML</SkillItem>
            <SkillItem>CSS</SkillItem>
            <SkillItem>JavaScript (ES6+)</SkillItem>

            <SkillItem>React</SkillItem>
            <SkillItem>Tailwind CSS</SkillItem>
            <SkillItem>Typescript</SkillItem>

            <SkillItem>Go Lang</SkillItem>
            <SkillItem>SCSS</SkillItem>
            <SkillItem>Postgres</SkillItem>
        </ul>
    )
}

export default About
