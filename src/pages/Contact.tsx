import styled from 'styled-components'
import Button from '../components/Button'

const StyledContactPage = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 9.6rem;
    padding-bottom: 2rem;
    text-align: center;

    .section-contact__main {
        > h2 {
            font-family: var(--ff-mono);
            color: var(--color-green);
            font-size: var(--fs-md);
            font-weight: 400;
            margin-bottom: 1em;
            letter-spacing: 3px;
        }

        > h3 {
            font-size: clamp(40px, 5vw, 60px);
            font-family: var(--ff-sans);
            font-weight: 600;
            margin-bottom: 0.4em;
        }

        > p {
            margin-bottom: 3em;
        }
    }

    > .aside {
        margin-top: auto;

        > p {
            margin-bottom: 0;
            font-family: var(--ff-mono);
            font-size: var(--fs-xxs);
            letter-spacing: 1px;
        }
    }
`
const Contact = () => {
    return (
        <StyledContactPage>
            <div className="section-contact__main">
                <h2>04. What's Next?</h2>
                <h3>Get In Touch</h3>
                <p>
                    Although I’m not currently looking for any new
                    opportunities, my inbox is always open. Whether you have a
                    question or just want to say hi, I’ll try my best to get
                    back to you!
                </p>
                <Button>Say Hello</Button>
            </div>
            <div className="aside">
                <p>Designed by Brittany Chiang & built by Phurba Sherpa</p>
                <p className="">Copyright &copy; Phurba Sherpa 2024 </p>
            </div>
        </StyledContactPage>
    )
}

export default Contact
