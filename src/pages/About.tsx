import styled from 'styled-components'
import Title from '../components/Title'
import { PropsWithChildren } from 'react'
import Link from '../components/Link'
import meUrl from '../assets/me.JPG'

const StyledAboutSection = styled.section`
    /* height: 100%; */
    width: 90%;
    margin: 0 auto;
    padding-block: 6rem;
    .section-title {
    }
    ul {
        list-style: none;
        font-size: var(--fs-xs);
        font-family: var(--ff-mono);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        max-width: 60ch;
        row-gap: 0.625em;
        margin-top: 2em;
    }

    .section-about__content {
        display: grid;
        grid-template-columns: 1fr 27rem;

        picture {
            height: 30rem;
            align-self: self-start;
            position: relative;
            > div {
                height: 100%;
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: all 0.3s;
                border-radius: 9px;
                filter: brightness(80%);
            }

            &::after {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                top: 1rem;
                left: 1rem;
                border: 1px solid var(--color-green);
                z-index: -1;
                transition: all 0.3s;
                border-radius: 9px;
            }

            &:hover {
                img {
                    transform: translate(-2px, -2px);
                }
                &::after {
                    transform: translate(2px, 2px);
                }
            }
        }
    }
    @media (max-width: 1024px) {
        width: 100%;

        .section-about__content {
            grid-template-columns: 1fr;
            row-gap: 8rem;
            picture {
                width: 30rem;
                height: 35rem;
                justify-self: center;
            }
        }
    }
`
const About = () => {
    return (
        <StyledAboutSection>
            <Title>About me</Title>
            <div className="section-about__content">
                <section>
                    <p>
                        Hello! I am Phurba Sherpa, a&nbsp;
                        <Link> React Developer based in Pokhara, Nepal</Link>. I
                        building the Front-end of Websites and Web Applications
                        that leads to the success of the overall product.
                    </p>
                    <p>
                        I have serious passion for UI effects, animations and
                        creating intuitive, dynamic user experiences. I also
                        like&nbsp;
                        <Link>sharing content</Link> related to the stuff that I
                        have learned over the years in Web Development so it can
                        help other people of the Dev Community.
                    </p>
                    <p>
                        I'm open to Job opportunities where I can contribute,
                        learn and grow. If you have a good opportunity that
                        matches my skills and experience then don't hesitate to
                        contact me.
                    </p>
                    <p>Below are a few technologies I've had worked so far:</p>
                    <SkillList />
                </section>
                <picture>
                    <div>
                        <img src={meUrl} alt="selfie" />
                    </div>
                </picture>
            </div>
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
