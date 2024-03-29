import styled from 'styled-components'
import Button from '../components/Button'
import Link from '../components/Link'

const StyledPage = styled.div`
    padding-block: 9.6rem;

    h2 {
        font-size: clamp(22px, 8vw, 70px);
        margin-bottom: 0.35em;
    }
    .section-hero {
        &__content {
            padding-block: 6em;
        }
        &__greet {
            font-size: var(--fs-md);
            font-weight: 400;
            font-family: var(--ff-mono);
            color: var(--color-green);
            margin-bottom: 1.5em;
        }

        &__subhead {
            color: var(--color-slate-400);
        }

        &__desc {
            max-width: 55ch;
            font-size: var(--fs-md);
            margin-bottom: 3em;
        }
    }
`
export default function LandingPage() {
    return (
        <StyledPage>
            <section className="section-hero__content">
                <h1 className="section-hero__greet">Hi, my name is</h1>
                <h2>
                    <span className="section-hero__head">Phurba Sherpa.</span>{' '}
                    <br />
                    <span className="section-hero__subhead">
                        I build things for the web.
                    </span>
                </h2>
                <p className="section-hero__desc">
                    For over 2 years I've had experience with software
                    development. Currently, developing and maintaining robust
                    and user-friendly applications for the fintech industry at{' '}
                    <Link>Wow Finstack Nepal</Link>.
                </p>
                <Button>phurba1404@gmail.com</Button>
            </section>
        </StyledPage>
    )
}
