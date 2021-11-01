import Image from 'next/image'
import { SparklesIcon } from '@heroicons/react/outline';

export default function Home() {
  return (
    <div className={"grid grid-rows-6 grid-cols-1 md:grid-cols-4 md:grid-rows-1 w-11/12 h-full gap-y-2 md:gap-x-2"}>
        {/* HOME EXPLORE SECTION*/}
      <div className={"row-span-1 md:col-span-1 flex items-center justify-center pt-5 md:py-10"}>
        <div className={"flex flex-col justify-around md:justify-start md:gap-2 items-center bg-primary-0 h-full w-full rounded-lg relative"}>
          {/* HOME EXPLORE HEADING*/}
          <div className={"flex w-full justify-center items-center bg-primary-400 rounded-lg h-max md:h-1/6 pb-px"}>
            EXPLORE HEADING
          </div>
          {/* HOME EXPLORE OPTIONS*/}
          <div className={"flex flex-nowrap gap-2 w-full justify-around items-center md:flex-col h-max overflow-x-auto"}>
            <div className={"flex bg-primary-400 rounded-lg p-1"}>
              <span className={"h-6 w-6 text-primary-0 mr-2"}><SparklesIcon /></span>
              <button>FEATURED</button>
            </div>
            <div className={"flex bg-primary-400 rounded-lg p-1"}>
              <span className={"h-6 w-6 text-primary-0 mr-2"}><SparklesIcon /></span>
              <button>CLOTHING</button>
            </div>
            <div className={"flex bg-primary-400 rounded-lg p-1"}>
              <span className={"h-6 w-6 text-primary-0 mr-2"}><SparklesIcon /></span>
              <button>SHOES</button>
            </div>
            <div className={"flex bg-primary-400 rounded-lg p-1"}>
              <span className={"h-6 w-6 text-primary-0 mr-2"}><SparklesIcon /></span>
              <button>ACCESSORIES</button>
            </div>
          </div>
        </div>
      </div>
      {/* HOME PRODUCTS SECTION*/}
      <div className={"row-span-5 md:row-span-1 md:col-span-3 flex flex-col space-y-2 items-center justify-start pb-5 md:py-10"}>
        {/* HOME SORT OPTIONS*/}
        <div className={"bg-primary-0 flex flex-col md:flex-row items-center justify-around md:justify-between px-4 w-full h-1/5 rounded-lg"}>
          <span>HEADING</span>
          <div className={"flex space-x-1"}>
            <button className={"items-center justify-center bg-gray-300 rounded-lg w-max p-2"}>Men</button>
            <button className={"items-center justify-center bg-gray-300 rounded-lg w-max p-2"}>Women</button>
            <button className={"items-center justify-center bg-gray-300 rounded-lg w-max p-2"}>Sort Drop Down</button>
          </div>
        </div>
        {/* HOME PRODUCTS GRID*/}
        <div className={"bg-primary-0 w-full h-full rounded-lg overflow-y-auto"}>
          PRODUCTS GRID
        </div>
      </div>
    </div>
  )
}
