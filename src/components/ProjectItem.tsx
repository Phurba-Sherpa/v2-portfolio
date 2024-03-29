import styled from 'styled-components'
import TechStackList from './TechStackList'
import ProjectLinkList from './ProjectLinkList'

const StyledProject = styled.li`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);

    .feature-text {
        font-family: var(--ff-mono);
        color: var(--color-green);
        font-size: var(--fs-base);
        margin-bottom: .5em;
    }

    .project-details {
        grid-column: 1/-1;
        grid-row: 1/-1;
        .project__desc {
            background-color: var(--color-brand-300);
            padding: 1.5em;
            border-radius: var(--rounded-xs);
        }

        &>h2 {
            margin-bottom: 1.25em;
        }
        &>.tech-container {
            padding: .5em 0 1em 0;
        }
    }

    .project-img {
        grid-column: 1/-1;
        grid-row: 1/-1;
        z-index: -1;
        background: linear-gradient(0.4turn, #64ffda, #64ff8d);
        border-radius: var(--rounded-sm);

        > img {
            position: relative;
            object-fit: cover;
            height: 100%;
            z-index: 1;
            filter: grayscale(100%) contrast(0.5);
            mix-blend-mode: multiply;
            border-radius: var(--rounded-sm);
        }
    }

    @media (min-width: 840px) {
        .project-details {
            grid-column: 1/7;
        }
        .project-img {
            grid-column: 6/-1;
        }
        &:nth-child(even) {
        & > .project-details {
            display: flex;
            flex-direction: column;
            align-items: end;
            grid-column: 6/-1;
        }

        & > .project-img {
            grid-column: 1/7;
        }
    }
    }
`

type IProject = {
    title: string,
    desc: string,
    techList: string[],
    codePreview: string,
    sitePreview: string,
    imageUrl: string,
}

const ProjectItem = ({title, desc, techList, codePreview, sitePreview, imageUrl}: IProject) => {
    return (
        <StyledProject>
            <div className="project-details">
                <p className="feature-text">Featured Project</p>
                <h2>{title}</h2>
                <p className="project__desc">
                   {desc}
                </p>
                <div className='tech-container'>
                <TechStackList
                    techs={techList}
                />
                </div>
                <ProjectLinkList code={codePreview} live={sitePreview} />
            </div>
            <div className="project-img">
                <img src={imageUrl} alt="website screenshot" />
            </div>
        </StyledProject>
    )
}

export default ProjectItem
