export default function DelayedQuotesPage() {
  return (
    <>
      <div className="overflow-x-auto  bg-white drop-shadow-md  dark:bg-gray-800">
        <div className="w-full flex items-center justify-between py-2 bg-gray-100 px-4">
          <h1 className=" text-xl font-bold">DELAYED QUOTES</h1>
          <h1>SGX</h1>
        </div>
        <table className="min-w-full ">
          <thead>
            <tr>
              <th className="border-r-2 px-2 border-blue-700 text-blue-700 border-b-2 ">
                Top <br /> Volume
              </th>
              <th className="border-r-2 px-2 border-slate-200 border-b-2 ">
                Top <br /> Gainers
              </th>
              <th className="border-r-2 px-2 border-slate-200 border-b-2 ">
                Top <br /> Losers
              </th>
              <th className="border-r-2 px-2 border-slate-200 border-b-2 ">
                Top % <br /> Gainer
              </th>
              <th className=" px-2 border-slate-200 border-b-2 ">
                Top % <br /> Loser
              </th>
            </tr>
            <tr className=" text-slate-500">
              <th className="px-4 pt-2 text-left">
                <div className=" font-normal">Stock</div>
              </th>
              <th className="px-4 pt-2 text-right">
                <div className=" font-normal">Last</div>
              </th>
              <th className="px-4 pt-2 text-right">
                <div className=" font-normal"> +/-</div>
              </th>
              <th className="px-4 pt-2 text-right">
                <div className=" font-normal"> Buy</div>
              </th>
              <th className="px-4 pt-2 text-right">
                <div className=" font-normal"> Sell</div>
              </th>
            </tr>
            <tr className="text-slate-500 ">
              <th className="px-4 pb-2 text-left">
                <div className=" font-normal"> Code</div>
              </th>
              <th className="px-4 pb-2 text-right">
                <div className="font-normal"> Vol</div>
              </th>
              <th className="px-4 pb-2 text-right">
                <div className="font-normal"> %Chng</div>
              </th>
              <th className="px-4 pb-2 text-right">
                <div className="font-normal"> Buy Vol</div>
              </th>
              <th className="px-4 pb-2 text-right">
                <div className="font-normal"> Sell Vol</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 border-b-2 ">
              <td className=" px-4 py-2 text-left">
                <strong>Sembocomap</strong>
                <div>s51</div>
              </td>
              <td className=" px-4 py-2 text-right">
                <div>0.111</div>
                <div>78.48M</div>
              </td>
              <td className=" px-4 py-2 text-right">
                <div>-0.020</div>
                <div>-15.3%</div>
              </td>
              <td className=" px-4 py-2 text-right">
                <div>0.11</div>
                <div>9.11M</div>
              </td>
              <td className=" px-4 py-2 text-right">
                <div>0.11</div>
                <div>2.71M</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
