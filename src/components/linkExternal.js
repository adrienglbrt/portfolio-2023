import Link from "next/link";
import clsx from "clsx";

export default function LinkExternal({children, href, format}) {
    const isSmall = format === "small"
    const isMedium = format === "medium"
    const isLarge = format === "large"

    return (
        <Link href={href} target="_blank" className={clsx("inline-block font-medium after:content-['_↗'] after:font-black  hover:text-pink transition duration-500", 
            {
                "text-2xl md:text-4xl after:text-xl after:md:text-2xl": isLarge,
                "text-xl md:text-2xl after:text-lg after:md:text-xl": isMedium
            }
        )}
        >
            {children}
        </Link>
    )
}