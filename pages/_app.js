import '@/styles/globals.css'
import Layout from '@/components/Layout'
import FontStyles from '@/fontStyles'
import MDXComponents from '@/components/MDXComponents'
import { MDXProvider } from '@mdx-js/react'
import { useEffect } from 'react'
import { useRouter } from "next/router";
// import Blog from '@/models/Blog.js'

export default function App({ Component, pageProps }) {

    // const path = useRouter().asPath
    // console.log('path:', path)
    // useEffect(() => {
    //     console.log('should work')
    //     const updateViews = async () => {
    //         let title = path.split('/')[-1]
    //         title = title.split('-').map(word => {
    //             return word.charAt(0).toUpperCase() + word.slice(1)
    //         })
    //         console.log(title)
    //         const res = await fetch('/api/blogs', {
    //             method: 'PUT',
    //             headers: {
    //                 Accept: contentType,
    //                 'Content-Type': contentType,
    //               },
    //               body: JSON.stringify(title),
    //         })
    //     }
    //     console.log('updating')
    //     updateViews()   
    //     .catch(err => console.log(err))
    // }, [path.pathname])
    return (
    <MDXProvider components={MDXComponents}>
        <Layout>
            <FontStyles />
            <Component {...pageProps} />
        </Layout>
    </MDXProvider>
    )
}
