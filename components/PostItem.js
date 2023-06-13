import Link from "next/link"
import styled from "styled-components"

const PostLink = styled.a`
  text-decoration: black;
  &:visited {
    color: black;
  };
  &:hover {
    color: blue;
  }`

const PostItem = ({ post }) => {
    return (
        <div>
            <h3>
                <Link href={`/posts/${post.slug}`} passHref legacyBehavior><PostLink>{post.data.title}</PostLink></Link>
            </h3>
            <p>{post.data.excerpt}</p>
        </div>
      )
}

export default PostItem