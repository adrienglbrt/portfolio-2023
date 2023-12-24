import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavEntry({ href, children }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <li className={clsx("group ml-12 overflow-hidden h-6 before:content-['•'] before:absolute before:text-3xl before:-translate-y-[7px] before:transition duration-300", {
            "before:opacity-100": isActive,
            "before:-translate-x-6": isActive,
            "before:opacity-0" : !isActive,
            "before:-translate-x-4": !isActive,
            "hover:before:opacity-100": !isActive,
            "hover:before:-translate-x-6": !isActive,
        }
        )}>
            <div className="relative flex flex-col gap-0 translate-y-0 hover:-translate-y-6 transition duration-300">
                <Link href={href}>{children}</Link>
                <Link href={href}>{children}</Link>
            </div>
        </li>
    )
}