import styled from 'styled-components'
import Title from '../components/Title'
import { FormEvent } from 'react'
import Link from '../components/Link'
import { EXP } from '../data'

const StyledSection = styled.section`
    padding-block: 9.6rem;
    width: 90%;
    margin-inline: auto;

    .tab-container {
        display: flex;
        gap: 5rem;
        align-items: baseline;
    }
`
const Experience = () => {
    return (
        <StyledSection>
            <Title>Where I've worked</Title>
            <div className="tab-container">
                <TabHeader />
                <TabContent />
            </div>
        </StyledSection>
    )
}

//////////////////
/* TAB HEADER */
//////////////////

const StyledHeader = styled.div`
    width: 180px;
    display: flex;
    flex-direction: column;
    border-left: 2px solid var(--color-brand-200);
    font-family: var(--ff-mono);
    position: relative;
    font-size: var(--fs-xs);

    [aria-selected='true'] {
        background-color: var(--color-brand-300);
    }

    &::after {
        content: '';
        position: absolute;
        width: 2px;
        height: 100%;
        background-color: var(--color-green);
        top: 0;
        left: 0;
        bottom: 0;
        scale: 1 var(--_height, 0.33);
        transform-origin: top;
        translate: 0 var(--_down, 0px);
        transition: scale 0.3s, translate 0.3s;
    }

    button {
        padding: 1.25em 0.5em;
        background-color: transparent;
        border: none;
        color: inherit;
        font-family: inherit;

        &:hover {
            background-color: var(--color-brand-300);
            color: var(--color-green);
        }

        &:focus {
        }
    }
`
const TabHeader = () => {
    const handleClickCompany = (e: FormEvent) => {
        const targetElement = e.target as HTMLElement
        const newSelectedPanelId = targetElement.getAttribute('aria-controls')

        // ** tabs and panels
        const tabList = document.querySelectorAll('[role="tab"]')
        const panelList = document.querySelectorAll(
            '[role = "tab-panels"] > div'
        )

        // ** old and new tab
        const oldTab = document.querySelector(
            '[aria-selected="true"]'
        ) as HTMLElement
        const newTab = targetElement.closest('button')

        tabList.forEach((tab) => {
            tab.setAttribute('aria-selected', 'false')
        })
        panelList.forEach((panel) => {
            if (newSelectedPanelId === panel.getAttribute('id')) {
                panel.removeAttribute('hidden')
            } else {
                panel.setAttribute('hidden', 'true')
            }
        })
        newTab?.setAttribute('aria-selected', 'true')

        moveIndicator(oldTab, newTab)
    }

    return (
        <StyledHeader className="tab-list">
            <button
                onClick={handleClickCompany}
                role="tab"
                aria-controls="tab-1"
                aria-selected="true"
            >
                Wow Fintsack
            </button>
            <button
                onClick={handleClickCompany}
                role="tab"
                aria-controls="tab-2"
                aria-selected="false"
            >
                IT Village
            </button>
            <button
                onClick={handleClickCompany}
                role="tab"
                aria-controls="tab-3"
                aria-selected="false"
            >
                Asarfi
            </button>
        </StyledHeader>
    )
}

//////////////////
/* TAB HEADER */
//////////////////
const StyledMain = styled.div`
    flex-grow: 1;

    h3 {
        font-size: var(--fs-xl);
        font-weight: 500;
        color: var(--color-slate-200);
        margin-bottom: 0.5em;
        & > span {
            color: var(--color-green);
        }
    }

    .exp-date {
        font-family: var(--ff-mono);
        font-size: var(--fs-xs);
        margin-bottom: 1.5em;
    }

    ul {
        list-style: none;
        > li {
            margin-bottom: 0.5em;
            position: relative;
            max-width: 55ch;
            &::before {
                content: '▹';
                position: absolute;
                top: 0;
                left: -3rem;
                color: var(--color-green);
            }
        }
    }
`
const TabContent = () => {
    return (
        <StyledMain role="tab-panels">
            {EXP.map((exp, index) => (
                <TabContentItem key={index} {...exp} id={`tab-${index + 1}`} />
            ))}
        </StyledMain>
    )
}

type IExp = {
    company: string
    role: string
    duration: string
    tasks: string[]
    id: string
}
const TabContentItem = ({ role, company, duration, tasks, id }: IExp) => {
    return (
        <div id={id} hidden={id !== 'tab-1'}>
            <h3>
                {role} <span>@</span>
                <span>
                    <Link>{company}</Link>
                </span>
            </h3>
            <p className="exp-date">{duration}</p>
            <ul>
                {tasks.map((desc, i) => (
                    <li key={i}>{desc}</li>
                ))}
            </ul>
        </div>
    )
}

//////////////////
/* UTILS */
//////////////////
const moveIndicator = (
    oldTab: HTMLElement,
    newTab: HTMLButtonElement | null
) => {
    const _DIR_DOWN = 4,
        _DIR_UP = 2

    const tabListContainer = document.querySelector('.tab-list') as HTMLElement

    if (newTab !== null && oldTab) {
        let transitionWidth
        const newTabPosition = oldTab.compareDocumentPosition(newTab)

        switch (newTabPosition) {
            case _DIR_DOWN:
                transitionWidth =
                    newTab.offsetTop - oldTab.offsetTop + newTab.offsetHeight
                break

            case _DIR_UP:
                transitionWidth =
                    oldTab.offsetTop - newTab.offsetTop + newTab.offsetHeight
                tabListContainer.style.setProperty(
                    '--_down',
                    newTab.offsetTop + 'px'
                )
                break
        }

        if (transitionWidth) {
            tabListContainer.style.setProperty(
                '--_height',
                (transitionWidth / tabListContainer.offsetHeight).toString()
            )
        }

        setTimeout(() => {
            tabListContainer.style.setProperty(
                '--_down',
                newTab.offsetTop + 'px'
            )
            tabListContainer.style.setProperty(
                '--_height',
                (newTab.offsetHeight / tabListContainer.offsetHeight).toString()
            )
        }, 300)
    }
}
export default Experience
