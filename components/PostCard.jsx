import React from 'react'

import BlogImage from './BlogImage'
import Link from 'next/link'
import moment from 'moment'
function PostCard({ post, coverImage }) {
    const passingImages = () => {
        return coverImage.find((img) => img.postId === post.id)
    }
    const blurImg = passingImages()

    return (
        <Link href={`/blog/${post.slug}`}>
            <a className="notion-collection-card notion-collection-card-size-medium">
                <div className="notion-collection-card-cover">
                    <BlogImage src={blurImg} alt={post.title} />
                </div>
                <div className="notion-collection-card-body">
                    <div className="notion-collection-card-property">
                        <span className="notion-property notion-property-title">
                            <span className="notion-page-link">
                                <span className="notion-page-title">
                                    <div className="notion-page-icon-inline notion-page-icon-image">
                                        <svg
                                            className="notion-page-title-icon notion-page-icon"
                                            alt={post.title}
                                            viewBox="0 0 30 30"
                                            width="16"
                                        >
                                            <path d="M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"></path>
                                        </svg>
                                    </div>
                                    <span className="notion-page-title-text">{post.title}</span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <div className="notion-collection-card-property">
                        <span className="notion-property notion-property-text">{post.summary}</span>
                    </div>
                    <div className="notion-collection-card-property">
                        <span className="notion-property notion-property-date">
                            <time dateTime={post.createdAt}>
                                {moment(post.createdAt).format('MMMM Do YYYY')}{' '}
                            </time>
                        </span>
                    </div>
                    <div className="notion-collection-card-property">
                        <span className="notion-property notion-property-multi_select">
                            {post.tags.map((tag) => {
                                return (
                                    <div
                                        key={tag.name}
                                        className={`notion-property-multi_select-item notion-item-${tag.colors}`}
                                    >
                                        {tag.name}
                                    </div>
                                )
                            })}
                        </span>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default PostCard
