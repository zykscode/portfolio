import * as React from 'react'
import cs from 'classnames'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import Header from './Header'
import Breadcrumbs from './Breadcrumbs'
import Search from './Search'
import Avatar from '../public/static/images/zyk.jpg'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import { useDarkMode } from '../lib/use-dark-mode'

import BodyClassName from 'react-body-classname'

import styles from './styles.module.css'

import BlogImage from './BlogImage'

const navigationStyle = 'defaults'

const isSearchEnabled = true

const ToggleThemeButton = () => {
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
            {hasMounted && (
                <a
                    className={styles.toggleDarkMode}
                    href="#"
                    role="button"
                    onClick={onToggleDarkMode}
                    title="Toggle dark mode"
                >
                    {isDarkMode ? <IoSunnyOutline /> : <IoMoonSharp />}
                </a>
            )}
        </>
    )
}

export const Navbar = ({ block, navLinks }) => {
    if (navigationStyle === 'default') {
        return <Header block={block} />
    }

    return (
        <header className="notion-header">
            <div className="notion-nav-header">
                <div className="breadcrumbs">
                    <a href="" className="breadcrumb active">
                        <div className="notion-page-icon-inline notion-page-icon-image">
                            <Image
                                src={Avatar}
                                className="rounded-full"
                                placeholder="blur"
                                width={Avatar.width}
                                height={Avatar.height}
                                alt="Zyk"
                            />
                        </div>
                        <span className="title">zyk.com</span>
                    </a>
                </div>

                <div className="notion-nav-header-rhs breadcrumbs">
                    {navLinks.map((link) => {
                        return (
                            <a
                                href={`/${link}`}
                                key={link}
                                className="breadcrumb button capitalize"
                            >
                                {link}
                            </a>
                        )
                    })}

                    <ToggleThemeButton />

                    {isSearchEnabled && <Search block={block} title={null} />}
                </div>
            </div>
        </header>
    )
}
