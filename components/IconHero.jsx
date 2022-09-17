import Image from 'next/image'
import React from 'react'

export default function IconHero({ img }) {
    return (
        <div className="notion-page-icon-hero notion-page-icon-image">
            <Image
                src={img}
                width={img.width}
                height={img.height}
                placeholder="blur"
                alt="Zyk the freak"
            />
        </div>
    )
}
