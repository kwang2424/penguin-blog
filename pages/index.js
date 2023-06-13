// import home from './home.mdx'
import { getPosts } from "@/scripts/utils"
import Link from "next/link"
import Meta from "@/components/Meta"
import PostItem from "@/components/PostItem"
import styled from "styled-components"
import Blog from "@/models/Blog.js"
import dbConnect from "@/lib/dbConnect"

const BlogHeader = styled.h2`
    font-size: 30px;
`

const BlogsContainer = styled.div`
    // display: flex;
    `

const LatestBlogs = styled.div`
    margin-left: 120px;
    margin-right: 40px;
    width: 40%`

const PopularBlogs = styled.div`
    margin-right: 80px;
    margin-left: 40px;`
    
function Home({ posts }) {
    return (
        <BlogsContainer>
        <Meta />
        <LatestBlogs>
            {/* {console.log('post here:' ,posts)} */}
            <BlogHeader>Blogs</BlogHeader>
            {posts.map((post) =>
            <PostItem key={post.slug} post={post} />
            )}
        </LatestBlogs>
        {/* <PopularBlogs>
            <BlogHeader>Popular Content</BlogHeader>
            {posts.map((post) =>
            <PostItem key={post.slug} post={post} />)}
        </PopularBlogs> */}
        </BlogsContainer>
  )
}

export async function getStaticProps(context) {
    await dbConnect()
    const months = {
        January: '01',
        February: '02',
        March: '03',
        April: '04',
        May: '05',
        June: '06',
        July: '07',
        August: '08',
        September: '09',
        October: '10',
        November: '11',
        December: '12',
    }
    const posts = getPosts(1)
    for (const post in posts) {
        const exists = await Blog.exists({ title: posts[post].data.title })
        // console.log(tmp)
        if (!exists) {
            const publishedDate = posts[post].data.published.split(' ')
            
            const year = months[publishedDate[2]]
            const month = publishedDate[0]
            const day = publishedDate[1].substring(0, publishedDate[1].length-3)
            
            let date = year + '-' + month + '-' + day
            date = new Date(date)
            
            const newBlog = new Blog({
                title: posts[post].data.title,
                published: date
            })
            
            await newBlog.save()
        }
    }
    return {
        props: {
            posts,
        }
}
}

export default Home