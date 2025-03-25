type Interface = {
    label: string
}

export default function Button({label}: Interface) {
    return (
        <button className="w-full bg-blue-600 text-white px-6 py-2 font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300">
            {label}
        </button>
    )
}