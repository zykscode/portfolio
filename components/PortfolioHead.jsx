import { motion } from 'framer-motion'

import * as React from 'react'

import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { useTheme } from 'next-themes'

import Me from '../public/static/images/zyk.jpg'

import { useDarkMode } from '../lib/use-dark-mode'

import styles from '../components/styles.module.css'
import Image from 'next/image'
import { GitHubShareButton } from '@/components/GitHubShareButton'

export default function MyPortfolioHead() {
    const [hasMounted, setHasMounted] = React.useState(false)
    const { isDarkMode, toggleDarkMode } = useDarkMode()

    const { systemTheme, theme, setTheme } = useTheme()

    const currentTheme = theme === 'system' ? systemTheme : theme

    const onToggleDarkMode = React.useCallback(
        (e) => {
            e.preventDefault()
            if (isDarkMode) {
                setTheme('light')
            } else {
                setTheme('dark')
            }
            toggleDarkMode()
        },
        [toggleDarkMode]
    )

    React.useEffect(() => {
        setHasMounted(true)
    }, [])
    return (
        <>
            <header className="notion-header portfolio-header">
                <div className="portfolio-nav-header">
                    <div className="breadcrumbs">
                        <a href="" className="breadcrumb active">
                            <div className="portfolio-page-icon-inline">
                                <Image
                                    src={Me}
                                    className="rounded-full"
                                    placeholder="blur"
                                    width={Me.width}
                                    height={Me.height}
                                    alt="Zyk"
                                />
                            </div>
                        </a>
                    </div>
                    <div>
                        <motion.a
                            className={` ${styles.toggleDarkMode}`}
                            href="#"
                            role="button"
                            onClick={onToggleDarkMode}
                            title="Toggle dark mode"
                        >
                            {isDarkMode ? (
                                <IoSunnyOutline style={{ height: '3rem', width: '3rem' }} />
                            ) : (
                                <IoMoonSharp style={{ height: '3rem', width: '3rem' }} />
                            )}
                        </motion.a>
                    </div>

                    <div className="notion-nav-header-rhs breadcrumbs">
                        <GitHubShareButton
                            className="hidden sm:block"
                            style={{
                                fill: '#70B7FD',
                                color: '#fff',
                                position: 'absolute',
                                zIndex: 1001,
                                top: 0,
                                height: '6rem',
                                width: 'rem',
                                right: 0,
                                border: 0,

                                transform: 'scale(1, 1)',
                            }}
                        />
                        <GitHubShareButton
                            className="sm:hidden"
                            style={{
                                fill: '#70B7FD',
                                color: '#fff',
                                position: 'absolute',
                                zIndex: 1001,
                                top: 0,
                                height: '6rem',
                                width: '3em',
                                right: 0,
                                border: 0,

                                transform: 'scale(1, 1)',
                            }}
                        />
                    </div>
                </div>
            </header>
        </>
    )
}
