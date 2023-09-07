import Link from "next/link"


const Logo = ({ text }) => {
    return (
        <>
            <Link href={'/'} className="font-bold text-4xl uppercase tracking-wider text-blue-500 drop-shadow-md">
                {text}
            </Link>
        </>
    )
}

export default Logo