
type Interface = {
    label: string,
}

export default function ButtonForm({label}: Interface) {
    return (
        <input type="submit" value={label} className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition" />
    )
}