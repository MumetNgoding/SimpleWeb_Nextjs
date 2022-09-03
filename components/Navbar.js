import Link from 'next/link';
import styled from 'styled-components'

const Nav = styled.nav`
    height: 80px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;


const StyledLink = styled.a`
    padding: 0rem 2rem;`


const Navbar = () => {
  return (
    <Nav>
        <div>
            <Link href="/" passHref>
                <StyledLink>NXT</StyledLink>
            </Link>
        </div>
        <div>
            <Link href="/" passHref>
                <StyledLink>Home</StyledLink>
            </Link>
        </div>
        <div>
            <Link href="/about" passHref>
                <StyledLink>About</StyledLink>
            </Link>
        </div>
        <div>
            <Link href="/contact" passHref>
                <StyledLink>Contact</StyledLink>
            </Link>
        </div>
    </Nav>
  )
}

export default Navbar