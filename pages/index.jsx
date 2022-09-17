import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'
import React, { useState } from 'react'
import styles from '../components/PageSocial.module.css'
import MyPortfolioHead from '@/components/PortfolioHead'

import { PageSocial } from '@/components/PageSocial'
import syles from '../components/layout.module.css'
import LayoutAnimation from '@/components/LayoutAnimation'
import Typewritter from '@/components/Typewritter'
import Link from 'next/link'

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
    position: absolute;
    top: ${(props) => (props.click ? '85%' : '50%')};
    left: ${(props) => (props.click ? '92%' : '50%')};
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;

    &>: first-child {
        animation: ${rotate} infinite 1.5s linear;
    }

    &>: last-child {
        display: ${(props) => (props.click ? 'none' : 'inline-block')};
        padding-top: 1rem;
    }
`

export default function MyComponent() {
    const [click, setClick] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const setOpen = () => setIsOpen(!isOpen)

    const handleClick = () => setClick(!click)

    return (
        <div className=" h-screen flex flex-col justify-between">
            <MyPortfolioHead />
            <div className="flex gap-2  justify-between  ">
                <div className="bg-pink-200 my-auto">
                    <h2>Blog</h2>
                </div>
                <div className={` ${syles.div} bg-pink-300`}>
                    {isOpen ? (
                        <Typewritter />
                    ) : (
                        <LayoutAnimation setOpen={setOpen} isOpen={isOpen} />
                    )}
                </div>
                <div className=" my-auto">
                    <Link href="/blog" passHref>
                        <div className=" md:text-5xl text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
                            <h2>Blog</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div
                className={`${styles.pageSocial}fixed  w-full mb-2 bottom-0 p-4 flex items-end justify-between flex-row  `}
            >
                <PageSocial />
                <div className=" md:text-5xl text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
                    <motion.h2
                        initial={{
                            y: 200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 },
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 },
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        About
                    </motion.h2>
                </div>
                <div className="  md:text-5xl text-3xl">
                    <motion.h2
                        initial={{
                            y: 200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 },
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 },
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Skills
                    </motion.h2>
                </div>
            </div>
        </div>
    )
}
