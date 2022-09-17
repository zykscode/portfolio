import React from 'react'
import { PageSEO } from '../../components/SEO'
// import { getAllFilesFrontMatter } from '../lib/mdx'
import siteMetadata from '../../data/siteMetadata'
import { GraphQLClient } from 'graphql-request'
import PostCard from '../../components/PostCard'
import { getPosts, getPostsPhotos } from '../../services'
import { getPlaiceholder } from 'plaiceholder'
import { Footer } from '../../components/Footer'
import IconHero from '../../components/IconHero'
import CoverWrapper from '../../components/CoverWrapper'
import { Navbar } from '../../components/Navbar'
import Avatar from '../../public/static/images/zyk.jpg'
import styles from '../../components/styles.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

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
    const responsePhotos = await getPostsPhotos()
    const photos = responsePhotos.posts
    const blurredPhotos = await blurImages(photos)
    return {
        props: {
            posts,
            blurredPhotos,
        },
    }
}

const blog = ({ posts, blurredPhotos }) => {
    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }
    return (
        <>
            <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
            <div className="notion-page-cover-wrapper">
                <CoverWrapper />
            </div>
            <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <motion.main
                    variants={variants} // Pass the variant object into Framer Motion
                    initial="hidden" // Set the initial state to variants.hidden
                    animate="enter" // Animated state to variants.enter
                    exit="exit" // Exit state (used later) to variants.exit
                    transition={{ type: 'linear' }}
                    className={`${styles.main} notion-page notion-page-has-cover notion-page-has-icon notion-page-has-image-icon notion-full-page index-page`}
                >
                    <IconHero img={Avatar} />
                    <h1 className="notion-title">Zykson.com</h1>
                    <article className="notion-page-content-inner">
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
                </motion.main>
            </AnimatePresence>
        </>
    )
}

export default blog
