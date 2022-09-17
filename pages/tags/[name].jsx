import React from 'react'
import { getTagPosts, getTagsPaths } from '../../services'
import { Navbar } from '../../components/Navbar'
import { PageSEO } from '../../components/SEO'
import CoverWrapper from '../../components/CoverWrapper'
import Avatar from '../../public/static/images/zyk.jpg'
import styles from '../../components/styles.module.css'
import IconHero from '../../components/IconHero'
import { Footer } from '../../components/Footer'
import { getPlaiceholder } from 'plaiceholder'
import PostCard from '../../components/PostCard'

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

export async function getStaticPaths() {
    const slugRes = await getTagsPaths()
    const slugs = slugRes.tags

    return {
        paths: slugs.map((slug) => ({
            params: {
                name: slug.name,
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const { tag } = await getTagPosts(params)
    const { posts } = tag
    const blurredPhotos = await blurImages(posts)
    return {
        props: {
            posts,
            tag,
            blurredPhotos,
        },
    }
}

const Tags = ({ posts, tag, blurredPhotos }) => {
    return (
        <>
            <PageSEO title={tag.name} description={tag.description} />

            <div className="notion-page-cover-wrapper">
                <CoverWrapper />
            </div>
            <main
                className={`${styles.main} notion-page notion-page-has-cover notion-page-has-icon notion-page-has-image-icon notion-full-page index-page`}
            >
                <IconHero img={Avatar} />
                <h1 className={`notion-title `}>{tag.name} blog posts</h1>
                <article className="notion-page-content-inner">
                    <div className="notion-collection notion-block-f917892e0b8c4dbeb1743620de57a0ec">
                        <div className="notion-collection-header">
                            <div
                                className={`notion-collection-header-title capitalize notion-item-${tag.colors}`}
                            >
                                {tag.name}
                            </div>
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
        </>
    )
}

export default Tags
