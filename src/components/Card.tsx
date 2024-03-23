import { FC } from 'react'
import { FiExternalLink, FiFolder, FiGithub } from 'react-icons/fi'
import styled from 'styled-components'

const StyledCard = styled.li`
    padding: 3.2rem 2.4rem;
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    background-color: var(--color-brand-300);
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    > header {
        .ext-link {
            a > svg {
                color: var(--color-slate-300);
            }
        }
        > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2.4rem;
            stroke-width: 1px;

            stroke: red;

            > a > svg {
                color: var(--color-green);
                stroke-width: 1;
            }

            .github {
                margin-right: 1rem;
            }
        }

        > h3 {
            margin-bottom: 1rem;
            font-size: var(--fs-xxl);
            > a {
                &:link,
                &:visited {
                    text-decoration: none;
                    color: var(--color-slate-200);
                }
                &:hover {
                    color: var(--color-green);
                }
            }
        }

        > p {
            font-size: 1.4rem;
            margin-bottom: 1.5 em;
        }
    }
    > footer {
        margin-top: auto;
        > ul {
            display: flex;
            flex-wrap: wrap;
            list-style: none;
            column-gap: 1rem;
            font-size: var(--fs-xxs);
            font-family: var(--ff-mono);
        }
    }
`

type ICard = {
    title: string
    desc: string
    github?: string
    live: string
}
const Card: FC<ICard> = ({ title, desc, github, live }) => {
    return (
        <StyledCard>
            <header className="project-header">
                <div>
                    <a href={live}>
                        <FiFolder width={1} size={40} />
                    </a>
                    <div className="ext-link">
                        {github && (
                            <a href={github}>
                                <FiGithub className="github" size={20} />
                            </a>
                        )}
                        <a href={live}>
                            <FiExternalLink size={20} />
                        </a>
                    </div>
                </div>
                <h3>
                    <a href={live}>{title}</a>
                </h3>
                <p>{desc}</p>
            </header>
            <footer>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>GitHub</li>
                </ul>
            </footer>
        </StyledCard>
    )
}

export default Card
