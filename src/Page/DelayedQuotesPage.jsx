import { useState } from "react";

export default function DelayedQuotesPage() {
  const [tableContent, setTableContent] = useState(0);
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
              <th
                onClick={() => setTableContent(0)}
                className={`border-r-2 px-8 text-right border-b-2 ${
                  tableContent == 0
                    ? "border-blue-600 text-blue-600"
                    : " border-slate-200"
                }`}
              >
                Top <br /> Volume
              </th>
              <th
                onClick={() => setTableContent(1)}
                className={`border-r-2 px-8 text-right border-b-2 ${
                  tableContent == 1
                    ? "border-blue-600 text-blue-600"
                    : " border-slate-200"
                }`}
              >
                Top <br /> Gainers
              </th>
              <th
                onClick={() => setTableContent(2)}
                className={`border-r-2 px-8 text-right border-b-2 ${
                  tableContent == 2
                    ? "border-blue-600 text-blue-600"
                    : " border-slate-200"
                }`}
              >
                Top <br /> Losers
              </th>
              <th
                onClick={() => setTableContent(3)}
                className={`border-r-2 px-8 text-right border-b-2 ${
                  tableContent == 3
                    ? "border-blue-600 text-blue-600"
                    : " border-slate-200"
                }`}
              >
                Top % <br /> Gainer
              </th>
              <th
                onClick={() => setTableContent(4)}
                className={` px-8 text-right border-b-2 ${
                  tableContent == 4
                    ? "border-blue-600 text-blue-600"
                    : " border-slate-200"
                }`}
              >
                Top % <br /> Loser
              </th>
            </tr>
            <tr className=" text-slate-500 border-b-[1px] border-gray-600">
              <th className="px-4 pt-2 text-left">
                <div className=" font-normal">Stock</div>
                <div className=" font-normal"> Code</div>
              </th>
              <th className="px-4 pt-2 text-right">
                <div className=" font-normal">Last</div>
                <div className="font-normal"> Vol</div>
              </th>
              <th className="px-4 pt-2 text-right">
                <div className=" font-normal"> +/-</div>
                <div className="font-normal"> %Chng</div>
              </th>
              <th className="px-4 pt-2 text-right">
                <div className=" font-normal"> Buy</div>
                <div className="font-normal"> Buy Vol</div>
              </th>
              <th className="px-4 pt-2 text-right">
                <div className=" font-normal"> Sell</div>
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
