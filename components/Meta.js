import Head from 'next/head'

const Meta = ({title}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name='keywords'
                content='react, blog, history'
            />
        </Head>
        )
}

export default Meta

Meta.defaultProps = {
    title: 'Penguin Blog - some random goon\'s thoughts'
}