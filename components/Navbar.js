import Link from "next/link"
import styled from "styled-components"

const Title = styled.h1`
        font-size: 25px;
        text-align: center;
        margin-top: 50px;`

const StyledLink = styled.a`
        text-decoration: none;
        color: black;`

function Navbar() {
    
    return (
    <>
        <Title><Link href="/" passHref legacyBehavior>
            <StyledLink>Penguin Blog</StyledLink>
        </Link></Title>
    </>
    )
}

export default Navbar