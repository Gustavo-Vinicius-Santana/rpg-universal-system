
type Interface = {
    label: string,
    placeholder: string
}

export default function InputPassword({label, placeholder}: Interface) {
    return(
        <>
            <label htmlFor="password" className="block text-gray-300 mb-1">
                {label}
            </label>
            <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder={placeholder}
            />
        </>
    )
}