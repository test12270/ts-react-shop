export default function Loading() {
  const limit = 4;
  return (
    // <div className="alert shadow-lg flex justify-center">
    //   <div>
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       className="stroke-info flex-shrink-0 w-6 h-6"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    //       ></path>
    //     </svg>
    //     <span>Loading...</span>
    //   </div>
    // </div>
    <>
      <div className="pt-12 pb-8 px-2">
        <h1 className="text-center text-4xl font-bold mb-8">패션</h1>

        {0 < limit ? (
          Array(limit)
            .fill(0)
            .map((elm, index) => {
              return (
                <>
                  <div key={index} className="card bordered animate-pulse">
                    <div className="h-80 rounded bg-gray-100"></div>
                    <div className="card-body">
                      <div className="space-y-4">
                        <div className="h-6 bg-gray-100 rounded"></div>
                        <div className="h-6 bg-gray-100 rounded w-5/6"></div>
                        <div className="h-6 bg-gray-100 rounded w-1/4"></div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
        ) : (
          <div>제품이 없습니다.</div>
        )}
      </div>
      <div className="pt-12 pb-8 px-2">
        <h1 className="text-center text-4xl font-bold mb-8">악세서리</h1>
        {0 < limit ? (
          Array.from(Array(limit)).map((elm, index) => {
            return (
              <>
                <div key={index} className="card bordered animate-pulse">
                  <div className="h-80 rounded bg-gray-100"></div>
                  <div className="card-body">
                    <div className="space-y-4">
                      <div className="h-6 bg-gray-100 rounded"></div>
                      <div className="h-6 bg-gray-100 rounded w-5/6"></div>
                      <div className="h-6 bg-gray-100 rounded w-1/4"></div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <div>제품이 없습니다.</div>
        )}
      </div>
      <div className="pt-12 pb-8 px-2">
        <h1 className="text-center text-4xl font-bold mb-8">디지털</h1>
        {0 < limit ? (
          Array.from(Array(limit)).map((elm, index) => {
            return (
              <>
                <div key={index} className="card bordered animate-pulse">
                  <div className="h-80 rounded bg-gray-100"></div>
                  <div className="card-body">
                    <div className="space-y-4">
                      <div className="h-6 bg-gray-100 rounded"></div>
                      <div className="h-6 bg-gray-100 rounded w-5/6"></div>
                      <div className="h-6 bg-gray-100 rounded w-1/4"></div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <div>제품이 없습니다.</div>
        )}
      </div>
    </>
  );
}
