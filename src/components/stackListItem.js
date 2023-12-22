
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function StackListItem({ gifPath, children }) {
    const [isHovered, setIsHovered] = useState(false)
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })


    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener('mousemove', mouseMove)
        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    const variants = {
        hovered: {
            x: mousePosition.x,
            y: mousePosition.y,
        },
    }

    return (
        <li
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative cursor-none"
        >
            <p className="block pt-2 md:pt-4 pb-2 md:pb-4">{children}</p>
            {isHovered ? (
                <motion.div
                style={{
                    backgroundImage: `url(${gifPath})`,
                    backgroundSize: 'cover',
                }}
                className="h-60 w-80 fixed top-0 left-0 z-50"
                initial={false}
                variants={variants}
                animate={isHovered ? "hovered" : "default"}
            />
            ) : null}
        </li>
        )
}