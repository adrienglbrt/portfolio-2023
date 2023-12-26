export default function Tag({ tag }) {
    return (
       <div className="border-2 border-black rounded">
            <span className="inline-block pl-2 pr-2 md:text-lg">
                {tag}
            </span>
       </div>
    )
}