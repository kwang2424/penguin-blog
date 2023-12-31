import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Blog from '../models/Blog.js'

export const getPosts = (pageIndex) => {
    const dirFiles = fs.readdirSync(path.join(process.cwd(), 'pages', 'posts'), {
      withFileTypes: true,
    })

    const posts = dirFiles

    .map((file) => {
        if (!file.name.endsWith('.mdx')) return

        const fileContent = fs.readFileSync(
            path.join(process.cwd(), 'pages', 'posts', file.name),
            'utf-8'
        )
        const { data, content } = matter(fileContent)

        const slug = file.name.replace(/.mdx$/, '')
        console.log(data.isPublished)
        if (data.isPublished) {
            return { data, content, slug }
        }
    })
    .filter((post) => post)

  return posts
}