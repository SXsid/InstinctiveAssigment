export default function Skeleton(){
    return (
      <div className="w-full mt-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-xs text-black font-sans font-bold uppercase">
              <tr className="h-12 border-b border-greyDivide">
                <th>
                  <span className="lg:hidden">Name</span>
                  <span className="hidden lg:inline">Student Name</span>
                </th>
                <th className="px-8 hidden md:table-cell">Cohort</th>
                <th className="lg:px-10 pl-8">Courses</th>
                <th className="px-6 hidden lg:table-cell">Date Joined</th>
                <th className="px-6 hidden lg:table-cell">Last Login</th>
                <th className="lg:px-6 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-greyDivide">
             
              {Array.from({ length: 10 }).map((_, index) => (
                <tr key={index} className="bg-white hover:bg-gray-50 h-8 animate-pulse">
                  <td className="font-normal text-black text-xs font-sans">
                    <div className="w-full bg-gray-300 h-4 rounded-md"></div>
                  </td>
                  <td className="px-8 hidden md:table-cell font-normal text-black text-xs font-sans">
                    <div className="w-full bg-gray-300 h-4 rounded-md"></div>
                  </td>
                  <td className="lg:px-10 px-2">
                    <div className="grid md:grid-cols-2 gap-y-1">
                      {Array.from({ length: 2 }).map((_, index) => (
                        <div key={index} className="md:bg-greyCourse md:flex gap-x-2 w-[134px] rounded-md py-[2px] px-3">
                          <div className="bg-gray-300 h-3 w-full rounded-md"></div>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 hidden lg:table-cell font-normal text-black text-xs font-sans">
                    <div className="w-full bg-gray-300 h-4 rounded-md"></div>
                  </td>
                  <td className="px-6 hidden lg:table-cell font-normal text-black text-xs font-sans">
                    <div className="w-full bg-gray-300 h-4 rounded-md"></div>
                  </td>
                  <td className="lg:px-6 px-4 text-right">
                    <div className="flex lg:justify-end">
                      <div className="w-[14.4px] h-[14px] bg-gray-300 rounded-full" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  