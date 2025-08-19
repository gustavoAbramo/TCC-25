export default function Sidebar() {
    return (
        <div className="w-64 bg-background-secondary text-white h-full flex flex-col min-h-screen">
        <div className="p-4 text-center text-2xl font-semibold">Smart Storage</div>
        <nav className="flex-1 p-4">
            <ul className="space-y-2">
            <li>
                <a href="/" className="block px-4 py-2 hover:bg-gray-700 rounded">
                Dashboard
                </a>
            </li>
            <li>
                <a href="/" className="block px-4 py-2 hover:bg-gray-700 rounded">
                About
                </a>
            </li>
            {/* Add more links as needed */}
            </ul>
        </nav>
        </div>
    );
}