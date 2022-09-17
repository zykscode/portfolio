import { motion } from 'framer-motion'
import styles from './layout.module.css'

/**
 * This is an example of scale correction in Framer Motion 2.
 *
 * Usually, when using scale to animate between two layouts of
 * different sizes, visual distortion will be incurred on child
 * elements and styles like borderRadius and boxShadow.
 *
 * Framer Motion 2 corrects for this. To see the distortion you'd
 * see using traditional FLIP techniques:
 *   - Remove `layout` from the child component
 *   - Remove borderRadius: 50 from the parent component and add
 *      border-radius: 50px; to the .parent definition in styles.css
 */

export default function LayoutAnimation({ isOpen, setOpen }) {
    return (
        <motion.div
            layout
            data-isOpen={isOpen}
            initial={{ borderRadius: 50 }}
            className={`${styles.parent} opacity-20`}
            onClick={setOpen}
        >
            <motion.div layout className={styles.child} />
        </motion.div>
    )
}
