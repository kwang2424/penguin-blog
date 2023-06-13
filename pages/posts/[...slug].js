import { MDXProvider } from '@mdx-js/react'
// import { Heading, InlineCode, Pre, Table, Text } from 'my-components'
import styled from 'styled-components'


const Title = styled.h1`
    font-size: 40px;
    color: blue;
`

const components = {
    h1: Title
}

export default function Post(props) {
    return (
      // <MDXProvider components={components}>
      <>
        <p>bob</p>
        <main {...props} />
      </>
      // </MDXProvider>
    )
  }

export async function getStaticProps() {
  console.log('poggers')
  return {
    props: {
        
    }
  }
}