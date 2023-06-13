import styled from "styled-components"

const Title = styled.h1`
    font-size: 40px;
    color: blue;
    text-align: center;
    `

const Paragraph = styled.p`
    margin: 0 20%;
    margin-bottom: 20px;`

const MDXComponents = {
    h1: ({ children }) => <Title>{children}</Title>,
    p: ({ children }) => <Paragraph>{children}</Paragraph>
}

export default MDXComponents