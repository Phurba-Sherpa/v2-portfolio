import styled from 'styled-components'

const StyledNav = styled.div`
    font-size: var(--fs-xxs);
    font-family: var(--ff-mono);
    color: var(--color-slate-300);
    
    position: fixed;
    right:6rem;
    bottom: 145px;
    
    > .email-block {
      display: flex;
      flex-direction: column;
      margin-top: auto;
      margin-inline: auto;
      > a {
        &:link,
        &:visited {
          letter-spacing: .1em;
          writing-mode: vertical-lr;
          display: inline-block;
          color: inherit;
          text-decoration: none;
          position: relative;
          transition: all .25s ease;
        }

        &:hover {
          transform: translateY(-3px);
          color: var(--color-green)
        }

        &:hover {
          &::after {
          transform: translateY(3px);
        }
        }
        &::after {
          content: '';
          position: absolute;
          width: 1px;
          height: 145px;
          top: 115%;
          left: 50%;
          background-color: var(--color-slate-300);
          transition: all .25s ease-in;
        }
      }
    }

    @media screen and (max-width: 1024px) {
      display: none;
    }
`
export default function RightNav() {
    return (
        <StyledNav>
            <div className='email-block'>
                <a href="#">phurba1404@gmail.com</a>
            </div>
        </StyledNav>
    )
}
