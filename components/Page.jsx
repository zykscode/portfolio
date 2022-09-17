import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import cs from 'classnames'
import { useRouter } from 'next/router'
import { useSearchParam } from 'react-use'
import BodyClassName from 'react-body-classname'

// components
import { Loading } from './Loading'
import { Page404 } from './Page404'
import { PageHead } from './PageHead'
import { PageAside } from './PageAside'
import { Footer } from './Footer'
import { NotionPageHeader } from './NotionPageHeader'
import { GitHubShareButton } from './GitHubShareButton'