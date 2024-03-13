import styled from 'styled-components'
import Button from '../components/Button'
import Link from '../components/Link'

const StyledPage = styled.div`
    height: 100%;
    width: 100%;
    h2 {
      margin-bottom: 1.5em;
    }
    .section-hero {
      &__content {
        padding-top: 6em;

      }
      &__greet {
        font-size: var(--fs-md);
        font-weight: 400;
        font-family: 'Fira Code', monospace;
        color: var(--color-green);
        margin-bottom: 1.5em;
      } 
      &__head,
      &__subhead {
        font-size: 7rem;
      }

      &__subhead {
        color: var(--color-slate-400);
      }
      &__subhead {}
      &__desc {
        max-width: 55ch;
        font-size: var(--fs-md);
        margin-bottom: 2.5em;
      }
    }
`
export default function LandingPage() {
    return (
        <StyledPage>
            <section className='section-hero__content'>
                <h1 className='section-hero__greet'>Hi, my name is</h1>
                <h2 >
                    <span className='section-hero__head'>Phurba Sherpa.</span> <br />
                    <span className='section-hero__subhead'>I build things for the web.</span>
                </h2>
                <p className='section-hero__desc'>
                    For over 2 years I've had experience with software
                    development. Currently, developing and maintaining robust and user-friendly
                    applications for the fintech industry at <Link>Wow Finstack Nepal</Link>.
                </p>
                <Button>phurba1404@gmail.com</Button>
            </section>
        </StyledPage>
    )
}
