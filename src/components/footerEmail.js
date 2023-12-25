import useCopyToClipboard from "@/utils/hooks/useCopyToClipboard"

export default function FooterLink({ email, children }) {

    const [copyToClipboard, result] = useCopyToClipboard();

    const handleCopyClick = () => {
        const textToCopy = email;
        copyToClipboard(textToCopy);
      };

    return (
        <li className="group flex mb-10 overflow-hidden h-6">
            <div className="relative flex flex-col gap-0 translate-y-0 hover:-translate-y-6 transition duration-300 cursor-pointer">
                <p>{children}</p>
                <p onClick={handleCopyClick}>{email}</p>
            </div>
            <div className>
                <p className="opacity-0 ml-4 font-sans normal-case text-pink group-hover:opacity-100 transition duration-300">{result ? (result.message) : "Copy to clipboard?" }</p>
            </div>
        </li>
    )
}