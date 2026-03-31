export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl animate-pulse">
      <div className="h-6 bg-gray-100 rounded-lg w-32 mb-8"></div>
      
      <header className="mb-12 space-y-4">
        <div className="h-6 bg-orange-100 rounded-full w-24"></div>
        <div className="h-16 bg-gray-200 rounded-2xl w-full"></div>
        <div className="h-16 bg-gray-200 rounded-2xl w-2/3"></div>
        
        <div className="flex gap-4 pt-6">
           <div className="h-8 bg-gray-100 rounded-full w-32"></div>
           <div className="h-8 bg-gray-100 rounded-full w-32"></div>
        </div>
      </header>

      <div className="aspect-video bg-gray-200 rounded-3xl mb-12 w-full"></div>

      <div className="space-y-6">
        <div className="h-4 bg-gray-100 rounded w-full"></div>
        <div className="h-4 bg-gray-100 rounded w-full"></div>
        <div className="h-4 bg-gray-100 rounded w-3/4"></div>
        <div className="h-4 bg-gray-100 rounded w-full"></div>
        <div className="h-4 bg-gray-100 rounded w-1/2"></div>
      </div>
    </div>
  );
}
