
import './firstSection.scss'
import { IoMdMore } from "react-icons/io";
export const FirstSection = () => {
    return (
        <>
            <div className="p-5">
                <div className="flex w-full flex-row justify-between px-10">
                    <h1 className='text-white text-3xl'>Ethereum Market</h1>
                    <input className='rounded-md h-12 w-80 bg-[#ffffff27] text-white  p-5  outline-none border-[1px] border-[#ffffff7c]' type="text" name="" id="" placeholder='searche...' />
                </div>

                {/* divs row */}
            <div className="flex flex-row  justify-evenly pt-10">

                <div className="w-[400px] bg-[#ffffff12] text-white rounded-lg p-5">
                    <div className="flex flex-row justify-between items-center w-full border-b-[1px]  border-[#ffffff2a] p-3">
                        <div className="flex flex-row gap-2">
                            <div className="w-[50px] f-[50px] bg-[#fff42d6c] rounded-md">logo</div>
                            <div className="flex flex-col ">
                                <h3 className='text-md font-bold'>BTC-USD</h3>
                                <p className='text-xs font-light opacity-55'>Bitcoin USD</p>
                            </div>
                        </div>

                        <div className="text-3xl">
                            <IoMdMore />
                        </div>
                    </div>

                    <h1 className='text-4xl p-3'>47,5256.5</h1>

                </div>

                <div className="w-[400px] bg-[#ffffff12] text-white rounded-lg p-5">
                    <div className="flex flex-row justify-between items-center w-full border-b-[1px]  border-[#ffffff2a] p-3">
                        <div className="flex flex-row gap-2">
                            <div className="w-[50px] f-[50px] bg-[#fff42d6c] rounded-md">logo</div>
                            <div className="flex flex-col ">
                                <h3 className='text-md font-bold'>BTC-USD</h3>
                                <p className='text-xs font-light opacity-55'>Bitcoin USD</p>
                            </div>
                        </div>

                        <div className="text-3xl">
                            <IoMdMore />
                        </div>
                    </div>

                    <h1 className='text-4xl p-3'>47,5256.5</h1>

                </div>

                <div className="w-[400px] bg-[#ffffff12] text-white rounded-lg p-5">
                    <div className="flex flex-row justify-between items-center w-full border-b-[1px]  border-[#ffffff2a] p-3">
                        <div className="flex flex-row gap-2">
                            <div className="w-[50px] f-[50px] bg-[#fff42d6c] rounded-md">logo</div>
                            <div className="flex flex-col ">
                                <h3 className='text-md font-bold'>BTC-USD</h3>
                                <p className='text-xs font-light opacity-55'>Bitcoin USD</p>
                            </div>
                        </div>

                        <div className="text-3xl">
                            <IoMdMore />
                        </div>
                    </div>

                    <h1 className='text-4xl p-3'>47,5256.5</h1>

                </div>

                <div className="w-[400px] bg-[#ffffff12] text-white rounded-lg p-5">
                    <div className="flex flex-row justify-between items-center w-full border-b-[1px]  border-[#ffffff2a] p-3">
                        <div className="flex flex-row gap-2">
                            <div className="w-[50px] f-[50px] bg-[#fff42d6c] rounded-md">logo</div>
                            <div className="flex flex-col ">
                                <h3 className='text-md font-bold'>BTC-USD</h3>
                                <p className='text-xs font-light opacity-55'>Bitcoin USD</p>
                            </div>
                        </div>

                        <div className="text-3xl">
                            <IoMdMore />
                        </div>
                    </div>

                    <h1 className='text-4xl p-3'>47,5256.5</h1>

                </div>
            </div>


                {/* end divs row */}


            </div>

            <div className='pt-5 px-5  flex flex-row items-end justify-evenly backdrop-filter blur-4xl'>
                <div className="opacity-50 w-[400px] h-[400px] bg-[#41337f] rounded-tl-full rounded-tr-full blur-[100px] absolute right-[60%] "></div>
                <div className="opacity-50 w-[400px] h-[400px] bg-[#3d1553] rounded-tl-full rounded-tr-full blur-[100px]  absolute left-[60%]"></div>
            </div>
            <div className="h-screen bg-[#11121f] ">
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>

            </div>

        </>
    );
}
