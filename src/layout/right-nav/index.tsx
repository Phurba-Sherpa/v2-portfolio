import styled from 'styled-components'

const StyledNav = styled.div`
    grid-area: rightnav;
    font-size: var(--fs-xxs);
    font-family: 'Fira Code', monospace;
    color: var(--color-slate-300);

    
    > .email-block {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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
          height: 180px;
          top: 115%;
          left: 50%;
          background-color: var(--color-slate-300);
          transition: all .25s ease-in;
        }
      }
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
