import React from 'react'
import CoverWrapper from './CoverWrapper'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { BodyClassName } from 'react-body-classname'
import IconHero from './IconHero'
import { useDarkMode } from '../lib/use-dark-mode'

import styles from './styles.module.css'

const LayoutWrapper = ({ children }) => {
    const { isDarkMode } = useDarkMode()
    return (
        <>
            <div className="notion notion-app notion-block-78fc5a4b88d74b0e824e29407e9f1ec1">
                <div className="notion-viewport"></div>
                {children}
            </div>
        </>
    )
}

export default LayoutWrapper
