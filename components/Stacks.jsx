import * as React from 'react'
import { SiMongodb } from '@react-icons/all-files/si/SiMongodb'
import { GrGraphQl } from '@react-icons/all-files/gr/GrGraphQl'
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript'
import { FaNodeJs } from '@react-icons/all-files/fa/FaNodeJs'
import { FaPython } from '@react-icons/all-files/fa/FaPython'
import { FaReact } from '@react-icons/all-files/fa/FaReact'
import { SiDjango } from '@react-icons/all-files/si/SiDjango'
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss'
import { useTheme } from 'next-themes'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaZhihu } from '@react-icons/all-files/fa/FaZhihu'
import { useDarkMode } from '../lib/use-dark-mode'

import styles from './styles.module.css'
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaEnvelopeOpenText } from '@react-icons/all-files/fa/FaEnvelopeOpenText'

const github = 'zykson'
const youtube = 'zykson'
const facebook = 'zykson'
const twitter = 'zykson'
const newsletter = 'zykson'
const author = 'zykson'
const zhihu = null
const linkedin = null

export const FooterImpl = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>copyright 2022 zyk</div>

            <div className={styles.social}>
                {twitter && (
                    <a
                        className={styles.twitter}
                        href={`https://twitter.com/${twitter}`}
                        title={`Twitter @${twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter />
                    </a>
                )}

                {zhihu && (
                    <a
                        className={styles.zhihu}
                        href={`https://zhihu.com/people/${zhihu}`}
                        title={`Zhihu @${zhihu}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaZhihu />
                    </a>
                )}

                {github && (
                    <a
                        className={styles.github}
                        href={`https://github.com/${github}`}
                        title={`GitHub @${github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>
                )}

                {linkedin && (
                    <a
                        className={styles.linkedin}
                        href={`https://www.linkedin.com/in/${linkedin}`}
                        title={`LinkedIn ${author}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                )}

                {newsletter && (
                    <a
                        className={styles.newsletter}
                        href={`${newsletter}`}
                        title={`Newsletter ${author}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaEnvelopeOpenText />
                    </a>
                )}

                {youtube && (
                    <a
                        className={styles.youtube}
                        href={`https://www.youtube.com/${youtube}`}
                        title={`YouTube ${author}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaYoutube />
                    </a>
                )}
            </div>
        </footer>
    )
}

export const Footer = React.memo(FooterImpl)
