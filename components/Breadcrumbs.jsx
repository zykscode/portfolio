import React from 'react'
import Link from 'next/link'

function Breadcrumbs() {
    return (
        <div>
            <div className="breadcrumbs">
                <Link href="/" passHref>
                    <span className="breadcrumb">
                        <div className="notion-page-icon-inline notion-page-icon-image">h</div>
                        <span className="title">TransitiveBullsh.it</span>
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Breadcrumbs
