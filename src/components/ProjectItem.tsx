import styled from 'styled-components'
import TechStackList from './TechStackList'
import ProjectLinkList from './ProjectLinkList'
import v2url from '../assets/v2-personal-website.png'

const StyledProject = styled.li`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);

    .feature-text {
        font-family: var(--ff-mono);
        color: var(--color-green);
        font-size: var(--fs-base);
        margin-bottom: .8125em;
    }

    .project-details {
        grid-column: 1/-1;
        grid-row: 1/-1;
        .project__desc {
            background-color: var(--color-brand-300);
            padding: 1.5em;
            border-radius: var(--rounded-xs);
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

const ProjectItem = () => {
    return (
        <StyledProject>
            <div className="project-details">
                <p className="feature-text">Featured Project</p>
                <h2>Personal Website</h2>
                <p className="project__desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Alias, earum asperiores fugiat rem odio obcaecati excepturi
                    sunt dicta! Impedit quo cupiditate architecto commodi
                    laborum ex cum fugiat vel harum doloremque.
                </p>
                <TechStackList
                    techs={['React', 'Typescript', 'Styled Components', 'Vite']}
                />
                <ProjectLinkList />
            </div>
            <div className="project-img">
                <img src={v2url} alt="personal website" />
            </div>
        </StyledProject>
    )
}

export default ProjectItem
