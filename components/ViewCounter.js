import { useEffect } from 'react'
import useSWR from 'swr'
import styled from 'styled-components'

async function fetcher(...args) {
  const res = await fetch(...args)
  return res.json()
}


export default function ViewCounter({ slug, blogPage = false }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher)
  const views = new Number(data?.total)


  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      })


    if (blogPage) {
      registerView()
    }
  }, [slug])


  return `${views > 0 ? views : '–––'} views`
}

