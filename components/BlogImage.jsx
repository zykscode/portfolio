import React from 'react'
import Image from 'next/image'
import grpahCMSImageLoader from '../utils'

function BlogImage({ src, alt }) {
    return (
        <Image
            loader={grpahCMSImageLoader}
            alt={alt}
            width={src.width}
            height={src.height}
            src={src.src}
            optimized="true"
            placeholder="blur"
            blurDataURL={src.base64}
        />
    )
}

export default BlogImage
