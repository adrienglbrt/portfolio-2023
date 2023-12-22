export default function FooterLink({ email, children }) {
    return (
        <li className="mb-10 overflow-hidden h-6">
            <div className="relative flex flex-col gap-0 translate-y-0 hover:-translate-y-6 transition duration-300 cursor-pointer">
                <p>{children}</p>
                <p>{email}</p>
            </div>
        </li>
        )
}