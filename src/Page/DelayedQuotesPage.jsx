import { useEffect, useRef, useState } from "react";
import Skeleton from "../Components/Skeleton";
import axios from "axios";

export default function DelayedQuotesPage() {
  const [tableContent, setTableContent] = useState(0);
  const [marketId, setMarketId] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const prevDataRef = useRef([]);

  const changeTable = (num) => {
    setIsLoading(true);
    setTableContent(num);
  };

  const changeMarket = (num) => {
    setIsLoading(true);
    setMarketId(num);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://livefeed3.chartnexus.com/Dummy/quotes?market_id=${marketId}&list=${tableContent}`
        );
        const newData = response.data;

        // Determine if there are changes compared to the previous data
        const updatedData = newData.map((item, index) => {
          const prevItem = prevDataRef.current[index];
          return {
            ...item,
            hasChanged: prevItem
              ? item.last !== prevItem.last ||
                item.volume !== prevItem.volume ||
                item.buy_price !== prevItem.buy_price ||
                item.sell_price !== prevItem.sell_price
              : true,
          };
        });
        console.log(
          ` https://livefeed3.chartnexus.com/Dummy/quotes?market_id=${marketId}&list=${tableContent}`
        );
        console.log(response.data ? "fetched success" : "not fetched");

        setData(updatedData);
        prevDataRef.current = newData;
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching data: ", error);
        setIsLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, [tableContent, marketId]);

  const formatMoney = (number) => {
    if (number >= 1_000_000) {
      return `${(number / 1_000_000).toFixed(1)}M`;
    } else if (number >= 1_000) {
      return `${(number / 1_000).toFixed(1)}K`;
    } else {
      return number.toString();
    }
  };

  const percentageChange = (last, prev) => {
    return prev !== 0 ? (100 * (last - prev)) / prev : 0;
  };

  return (
    <>
      <div className="overflow-x-auto bg-white drop-shadow-md dark:bg-gray-800">
        <div className="w-full flex items-center justify-between py-2 dark:bg-gray-700 bg-gray-100 px-4">
          <h1 className="text-xl font-bold">DELAYED QUOTES</h1>
          <div>
            <select
              onChange={(e) => changeMarket(e.target.value)}
              className="bg-gray-50 border w-fit border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="0" defaultValue>
                SGX
              </option>
              <option value="2">Bursa</option>
              <option value="3">Nasdaq</option>
            </select>
          </div>
        </div>
        <div className="w-full flex">
          <div
            onClick={() => changeTable(0)}
            className={`border-r-2 px-8 cursor-pointer text-right w-full border-b-2 ${
              tableContent === 0
                ? "border-blue-600 text-blue-600"
                : "border-slate-200"
            }`}
          >
            Top <br /> Volume
          </div>
          <div
            onClick={() => changeTable(1)}
            className={`border-r-2 px-8 cursor-pointer text-right w-full border-b-2 ${
              tableContent === 1
                ? "border-blue-600 text-blue-600"
                : "border-slate-200"
            }`}
          >
            Top <br /> Gainers
          </div>
          <div
            onClick={() => changeTable(2)}
            className={`border-r-2 px-8 cursor-pointer text-right w-full border-b-2 ${
              tableContent === 2
                ? "border-blue-600 text-blue-600"
                : "border-slate-200"
            }`}
          >
            Top <br /> Losers
          </div>
          <div
            onClick={() => changeTable(3)}
            className={`border-r-2 px-8 cursor-pointer text-right w-full border-b-2 ${
              tableContent === 3
                ? "border-blue-600 text-blue-600"
                : "border-slate-200"
            }`}
          >
            Top % <br /> Gainer
          </div>
          <div
            onClick={() => changeTable(4)}
            className={`px-8 text-right cursor-pointer w-full border-b-2 ${
              tableContent === 4
                ? "border-blue-600 text-blue-600"
                : "border-slate-200"
            }`}
          >
            Top % <br /> Loser
          </div>
        </div>
        <table className="min-w-full">
          <thead>
            <tr className="text-slate-500 border-b-[1px] border-gray-600">
              <th className="px-4 pt-2 dark:text-slate-300 text-left">
                <div className="font-normal">Stock</div>
                <div className="font-normal"> Code</div>
              </th>
              <th className="px-4 pt-2 dark:text-slate-300 text-right">
                <div className="font-normal">Last</div>
                <div className="font-normal"> Vol</div>
              </th>
              <th className="px-4 pt-2 dark:text-slate-300 text-right">
                <div className="font-normal"> +/-</div>
                <div className="font-normal"> %Chng</div>
              </th>
              <th className="px-4 pt-2 dark:text-slate-300 text-right">
                <div className="font-normal"> Buy</div>
                <div className="font-normal"> Buy Vol</div>
              </th>
              <th className="px-4 pt-2 dark:text-slate-300 text-right">
                <div className="font-normal"> Sell</div>
                <div className="font-normal"> Sell Vol</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <Skeleton />
            ) : (
              data.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700 border-b-2"
                >
                  <td className="px-4 py-2 text-left">
                    <strong
                      className={`${
                        item.hasChanged ? "flash" : ""
                      } transition-colors duration-500`}
                    >
                      {item.name}
                    </strong>
                    <div>{item.stockcode}</div>
                  </td>
                  <td
                    className={`px-4 py-2 text-right ${
                      item.hasChanged ? "flash" : ""
                    } transition-colors duration-500`}
                  >
                    <div>{item.last.toFixed(3)}</div>
                    <div>{formatMoney(item.volume)}</div>
                  </td>
                  <td
                    className={`px-4 py-2 text-right ${
                      item.hasChanged ? "flash" : ""
                    } transition-colors duration-500`}
                  >
                    <div
                      className={
                        item.last - item.previous < 0
                          ? "text-red-500"
                          : "text-green-500"
                      }
                    >
                      {(item.last - item.previous).toFixed(3)}
                    </div>
                    <div
                      className={
                        percentageChange(item.last, item.previous) < 0
                          ? "text-red-500"
                          : "text-green-500"
                      }
                    >
                      {percentageChange(item.last, item.previous).toFixed(1)}%
                    </div>
                  </td>
                  <td className="px-4 py-2 text-right">
                    <div>{item.buy_price.toFixed(3)}</div>
                    <div>{formatMoney(item.buy_volume)}</div>
                  </td>
                  <td className="px-4 py-2 text-right">
                    <div>{item.sell_price.toFixed(3)}</div>
                    <div>{formatMoney(item.sell_volume)}</div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
