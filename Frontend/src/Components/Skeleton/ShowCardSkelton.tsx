

const ShowCardSkeleton = () => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">

<div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg relative p-6">
        <div className="flex items-center mb-4">
          <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
          <div className="ml-3 h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
        </div>

    
        <div className="space-y-3">
          
          <div>
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div>
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="flex flex-wrap gap-2 mt-1">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"
                ></div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div>
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <div className="flex-1 h-10 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="flex-1 h-10 bg-gray-200 rounded-md animate-pulse"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ShowCardSkeleton;