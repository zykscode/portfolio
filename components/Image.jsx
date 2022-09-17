import React from 'react'
import Image from 'next/image'
import grpahCMSImageLoader from '../utils'

function Images({ src, alt }) {
    return (
        <Image
            loader={grpahCMSImageLoader}
            alt={alt}
            src={src.src}
            layout="fill"
            optimized="true"
            placeholder="blur"
            blurDataURL={src.base64}
        />
    )
}

export default Images
