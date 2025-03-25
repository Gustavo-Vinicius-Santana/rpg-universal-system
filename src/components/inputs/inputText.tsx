
type Interface = {
    label: string, 
    placeholder: string
}

export default function InputText({label, placeholder}: Interface) {
    return(
        <>
            <label htmlFor="text" className="block text-gray-300 mb-1">
                {label}
            </label>
            <input
                type="text"
                id="text"
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder={placeholder}
            />
        </>
    )
}