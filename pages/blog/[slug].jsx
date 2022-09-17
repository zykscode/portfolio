import React from 'react'
import CoverWrapper from '../../components/CoverWrapper'
import { Navbar } from '../../components/Navbar'
import { PageSEO } from '../../components/SEO'
import { getPost, getPostPaths } from '../../services'
import Avatar from '../../public/static/images/zyk.jpg'
import styles from '../../components/styles.module.css'
import IconHero from '../../components/IconHero'
import { Footer } from '../../components/Footer'
import Link from 'next/link'
import moment from 'moment'
import { getPlaiceholder } from 'plaiceholder'
import { getFileBySlug, writeMdx } from '../../lib/mdx'
import { MDXLayoutRenderer } from '../../components/MDXComponents'
import Image from 'next/image'

const blurImages = async (photo) => {
    const { base64, img } = await getPlaiceholder(photo.url)
    return {
        ...img,
        base64,
    }
}

export async function getStaticPaths() {
    const slugRes = await getPostPaths()
    const slugs = slugRes.posts

    return {
        paths: slugs.map((slug) => ({
            params: {
                slug: slug.slug,
            },
        })),
        fallback: false,
    }
}
export async function getStaticProps({ params }) {
    const { post } = await getPost(params)
    const { coverPhoto } = post
    const blurredPhoto = await blurImages(coverPhoto)
    const navs = ['blog', 'about']
    const contents = post.content.markdown
    await writeMdx(post.slug, contents)
    const content = await getFileBySlug(post.slug, contents)
    return {
        props: {
            navs,
            blurredPhoto,
            post,
            content,
        },
    }
}

const DEFAULT_LAYOUT = 'PostLayout'
export default function Home({ post, navs, blurredPhoto, content }) {
    const { mdxSource, frontMatter, toc } = content

    return (
        <>
            <PageSEO title={post.title} description={post.summary} />
            <div className="notion-page-cover-wrapper">
                <Image
                    placeholder="blur"
                    blurDataURL={blurredPhoto.base64}
                    src={blurredPhoto.src}
                    alt={post.title}
                    height={blurredPhoto.height}
                    width={blurredPhoto.width}
                />
            </div>
            <main
                className={`notion-page notion-page-has-cover notion-page-has-icon notion-page-has-image-icon notion-full-page `}
            >
                <IconHero img={Avatar} />
                <h1 className="notion-title">{post.title}</h1>
                <div className="notion-collection-page-properties">
                    <div className="notion-collection-row">
                        <div className="notion-collection-row-body">
                            <div className="notion-collection-row-property">
                                <div className="notion-collection-column-title">
                                    <svg
                                        viewBox="0 0 14 14"
                                        className="notion-collection-column-title-icon"
                                    >
                                        <path d="M4 3a1 1 0 011-1h7a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h7a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h7a1 1 0 110 2H5a1 1 0 01-1-1zM2 4a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2z"></path>
                                    </svg>
                                    <div className="notion-collection-column-title-body">Tags</div>
                                </div>
                                <div className="notion-collection-row-value">
                                    <span className="notion-property notion-property-multi_select">
                                        {post.tags.map((tag) => {
                                            return (
                                                <Link href={`/tags/${tag.slug}`} key={tag.name}>
                                                    <a>
                                                        {' '}
                                                        <div
                                                            className={`notion-property-multi_select-item notion-item-${tag.colors} button`}
                                                        >
                                                            {tag.name}
                                                        </div>
                                                    </a>
                                                </Link>
                                            )
                                        })}
                                    </span>
                                </div>
                            </div>
                            <div className="notion-collection-row-property">
                                <div className="notion-collection-column-title">
                                    <svg
                                        viewBox="0 0 14 14"
                                        className="notion-collection-column-title-icon"
                                    >
                                        <path d="M10.889 5.5H3.11v1.556h7.778V5.5zm1.555-4.444h-.777V0H10.11v1.056H3.89V0H2.333v1.056h-.777c-.864 0-1.548.7-1.548 1.555L0 12.5c0 .856.692 1.5 1.556 1.5h10.888C13.3 14 14 13.356 14 12.5V2.611c0-.855-.7-1.555-1.556-1.555zm0 11.444H1.556V3.944h10.888V12.5zM8.556 8.611H3.11v1.556h5.445V8.61z"></path>
                                    </svg>
                                    <div className="notion-collection-column-title-body">
                                        Published
                                    </div>
                                </div>
                                <div className="notion-collection-row-value">
                                    <span className="notion-property notion-property-date ">
                                        {' '}
                                        <span className="mr-2">Published</span>
                                        <time dateTime={post.createdAt}>
                                            {moment(post.createdAt).format('MMMM Do YYYY')}{' '}
                                        </time>
                                    </span>
                                </div>
                            </div>
                            <div className="notion-collection-row-property">
                                <div className="notion-collection-column-title">
                                    <svg
                                        viewBox="0 0 14 14"
                                        className="notion-collection-column-title-icon"
                                    >
                                        <path d="M7 4.568a.5.5 0 00-.5-.5h-6a.5.5 0 00-.5.5v1.046a.5.5 0 00.5.5h6a.5.5 0 00.5-.5V4.568zM.5 1a.5.5 0 00-.5.5v1.045a.5.5 0 00.5.5h12a.5.5 0 00.5-.5V1.5a.5.5 0 00-.5-.5H.5zM0 8.682a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V7.636a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5v1.046zm0 3.068a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-1.045a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5v1.045z"></path>
                                    </svg>
                                    <div className="notion-collection-column-title-body">
                                        Author
                                    </div>
                                </div>
                                <div className="notion-collection-row-value">
                                    <span className="notion-property notion-property-text">
                                        <b>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="notion-link capitalize"
                                                href="https://twitter.com/zyk"
                                            >
                                                {'Zykson' || post.author.name}
                                            </a>
                                        </b>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="notion-page-content notion-page-content-has-aside notion-page-content-has-toc">
                    <MDXLayoutRenderer
                        layout={DEFAULT_LAYOUT}
                        toc={toc}
                        mdxSource={mdxSource}
                        authorDetails={post.author}
                    />
                </div>
            </main>
        </>
    )
}
