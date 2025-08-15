export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-background text-white flex items-center justify-center p-6">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-600/20 rounded-full blur-3xl"></div>
            <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
        </div>
    
        <div className="relative z-10 w-full max-w-md">
            {/* Dashboard Content */}
            <h1 className="text-3xl font-light mb-2 text-center">Dashboard</h1>
            <p className="text-gray-400 text-center mb-8">Gerencie seu estoque de forma eficiente</p>
            
            {/* Add your dashboard components here */}
        </div>
        </div>
    );
    }