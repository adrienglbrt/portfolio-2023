
import { useState } from "react"
import { motion } from "framer-motion"
import useMousePosition from "@/utils/hooks/useMousePosition"

export default function StackListItem({ gifPath, children }) {
    const [isHovered, setIsHovered] = useState(false)

    const variants = {
        hovered: {
            x: useMousePosition().x,
            y: useMousePosition().y,
        },
    }

    return (
        <li
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative cursor-crosshair"
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