import { PageSEO } from '../components/SEO'
// import { getAllFilesFrontMatter } from '../lib/mdx'
import siteMetadata from '../data/siteMetadata'
import { GraphQLClient } from 'graphql-request'
import PostCard from '../components/PostCard'
import { getPosts, getPostsPhotos, getOwnersDetails } from '../services'
import { getPlaiceholder } from 'plaiceholder'
import { Footer } from '../components/Footer'
import IconHero from '../components/IconHero'
import CoverWrapper from '../components/CoverWrapper'
import { Navbar } from '../components/Navbar'
import { FaPython } from '@react-icons/all-files/fa/FaPython'

import Avatar from '../public/static/images/zyk.jpg'
import styles from '../components/styles.module.css'
const MAX_DISPLAY = 6

const blurImages = async (photos) => {
    const images = await Promise.all(
        photos.map(async (image) => {
            const { base64, img } = await getPlaiceholder(image.coverPhoto.url)
            return {
                ...img,
                base64,
                postId: image.id,
            }
        })
    )
    return images
}

export async function getStaticProps() {
    const { posts } = await getPosts()
    const { authors } = await getOwnersDetails()
    const responsePhotos = await getPostsPhotos()
    const photos = responsePhotos.posts
    const navs = ['blog', 'about']
    const blurredPhotos = await blurImages(photos)
    return {
        props: {
            posts,
            blurredPhotos,
            navs,
            authors,
        },
    }
}

export default function Home({ posts, blurredPhotos, navs, authors }) {
    return (
        <>
            <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
            <div className="notion-frame">
                <Navbar navLinks={navs} />
                <div className="notion-page-scroller ">
                    <div className="notion-page-cover-wrapper">
                        <CoverWrapper />
                    </div>
                    <main
                        className={`${styles.main} notion-page notion-page-has-cover notion-page-has-icon notion-page-has-image-icon notion-full-page index-page`}
                    >
                        <IconHero img={Avatar} />
                        <h1 className="notion-title">Zykson.com</h1>
                        <article className="notion-page-content-inner">
                            <div className="notion-text notion-block-30cc6462233a474a8cc0e55f9889c70b">
                                Hello World 👋
                            </div>
                            <div className="notion-text notion-block-0a42cbbb52964edbb5b15df3af09fc6f">
                                {' '}
                                I am{' '}
                                <span className="notion-yellow_background">
                                    <b>{authors[0].name}</b>
                                </span>
                                , {authors[0].bio}
                            </div>

                            {authors[0].stacks}

                            <div className="notion-collection notion-block-f917892e0b8c4dbeb1743620de57a0ec">
                                <div className="notion-collection-header">
                                    <div className="notion-collection-header-title">Blog Posts</div>
                                </div>
                                <div className="notion-gallery">
                                    <div className="notion-gallery-view">
                                        <div className="notion-gallery-grid notion-gallery-grid-size-medium">
                                            {posts.map((post) => (
                                                <PostCard
                                                    key={post.slug}
                                                    post={post}
                                                    coverImage={blurredPhotos}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    )
}
