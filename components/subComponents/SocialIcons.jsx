import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'

import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import styles from '../styles.module.css'

import { DarkTheme } from '../Themes'

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index: 3;

    & > *:not(:last-child) {
        margin: 0.5rem 0;
    }
`

const Line = styled(motion.span)`
    width: 2px;
    height: 8rem;
    background-color: ${(props) => (props.color === 'dark' ? DarkTheme.text : DarkTheme.body)};
`

const SocialIcons = (props) => {
    const github = 'zykson'
    const youtube = 'zykson'
    const facebook = 'zykson'
    const twitter = 'zykson'
    const newsletter = 'zykson'
    const author = 'zykson'
    const zhihu = null
    const linkedin = null
    return (
        <Icons>
            <motion.div
                initial={{ transform: 'scale(0)' }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1 }}
            >
                <a
                    className={styles.github}
                    href={`https://github.com/${github}`}
                    title={`GitHub @${github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub style={{ height: '3rem', width: '3rem' }} />
                </a>
            </motion.div>
            <motion.div
                initial={{ transform: 'scale(0)' }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.2 }}
            >
                <a
                    style={{ color: 'inherit' }}
                    target="_blank"
                    href="https://twitter.com/code_bucks"
                    rel="noreferrer"
                >
                    <FaTwitter
                        style={{ height: '3rem', width: '3rem' }}
                        fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
                    />
                </a>
            </motion.div>
            <motion.div
                initial={{ transform: 'scale(0)' }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.4 }}
            >
                <a
                    style={{ color: 'inherit' }}
                    target="_blank"
                    href="https://facebook.com/codebucks27"
                    rel="noreferrer"
                >
                    <FaLinkedin
                        style={{ height: '3rem', width: '3rem' }}
                        fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
                    />
                </a>
            </motion.div>
            <motion.div
                initial={{ transform: 'scale(0)' }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.6 }}
            >
                <a
                    style={{ color: 'inherit' }}
                    target="_blank"
                    href="https://youtube.com"
                    rel="noreferrer"
                >
                    <FaYoutube
                        style={{ height: '3rem', width: '3rem' }}
                        fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
                    />
                </a>
            </motion.div>

            <Line
                color={props.theme}
                initial={{
                    height: 0,
                }}
                animate={{
                    height: '8rem',
                }}
                transition={{
                    type: 'spring',
                    duration: 1,
                    delay: 0.8,
                }}
            />
        </Icons>
    )
}

export default SocialIcons
