import styled from "styled-components"

const StyledNav = styled.nav`
 grid-area: leftnav;
 background-color: orangered;
 
`

export default function LeftNav() {
  return (
    <StyledNav>
        <p>header</p>
    </StyledNav>
  )
}
