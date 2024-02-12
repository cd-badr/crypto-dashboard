
import './firstSection.scss'
import { IoMdMore } from "react-icons/io";
export const FirstSection = () => {
    return (
        <>
            <div className="p-5">
                <div className="flex w-full flex-row justify-between px-10">
                    <h1 className='text-white text-3xl'>Ethereum Market</h1>
                    <input className='rounded-md h-12 w-80 bg-[#ffffff27] text-white  p-5  outline-none border-[1px] border-[#ffffff17]' type="text" name="" id="" placeholder='searche...' />
                </div>

                {/* divs row */}
                <div className="flex flex-row  justify-between pt-10 px-6 ">

                    <div className="w-[400px] bg-[#ffffff12] text-white rounded-lg p-5 border-[1px] border-[#ffffff17]">
                        <div className="flex flex-row justify-between items-center w-full border-b-[1px]  border-[#ffffff17] p-3">
                            <div className="flex flex-row gap-2">
                                <div className="flex justify-center items-center w-[50px] f-[50px] bg-[#fff42d6c] rounded-md">logo</div>
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

                    <div className="w-[400px] bg-[#ffffff12] text-white rounded-lg p-5 border-[1px] border-[#ffffff17]">
                        <div className="flex flex-row justify-between items-center w-full border-b-[1px]  border-[#ffffff17] p-3">
                            <div className="flex flex-row gap-2">
                                <div className="flex justify-center items-center w-[50px] f-[50px] bg-[#fff42d6c] rounded-md">logo</div>
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

                    <div className="w-[400px] bg-[#ffffff12] text-white rounded-lg p-5 border-[1px] border-[#ffffff17]">
                        <div className="flex flex-row justify-between items-center w-full border-b-[1px]  border-[#ffffff17] p-3">
                            <div className="flex flex-row gap-2">
                                <div className="flex justify-center items-center w-[50px] f-[50px] bg-[#fff42d6c] rounded-md">logo</div>
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

                    <div className="w-[400px] bg-[#ffffff12] text-white rounded-lg p-5 border-[1px] border-[#ffffff17]">
                        <div className="flex flex-row justify-between items-center w-full border-b-[1px]  border-[#ffffff17] p-3">
                            <div className="flex flex-row gap-2">
                                <div className="flex justify-center items-center w-[50px] f-[50px] bg-[#fff42d6c] rounded-md">logo</div>
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

            {/* coins */}
            <div className="flex  justify-center px-10 text-white">
                <div className=" w-full rounded-lg bg-[#ffffff12] p-5 border-[1px] border-b-[1px] border-[#ffffff17]">
                    <div className='border-b-[1px] border-[#ffffff17] '>
                        <div className="flex w-full flex-row justify-between items-center px-10 pb-5">
                            <h1 className='text-white text-3xl'>Assets To Supplies</h1>
                            <div className='rounded-md h-12 w-12 flex justify-center items-center bg-[#ffffff27] text-white  p-5  outline-none border-[1px] border-[#ffffff17]'>icon</div>
                    </div>
                    </div>

                    <div className="flex flex-row justify-evenly pt-5">
                        <div className="flex flex-row">
                            <img width={30} src="" alt="" />
                            <p className='font-bold'>BTC</p>
                        </div>

                        <p>47,554$</p>

                        <div className="flex flex-row gap-5">
                            <div className='rounded-md h-7 w-23 flex justify-center items-center bg-[#00c32161] text-white  p-5  outline-none border-[1px] border-[#ffffff17]'>BUY</div>
                            <div className='rounded-md h-7 w-23 flex justify-center items-center bg-[#c3000061] text-white  p-5  outline-none border-[1px] border-[#ffffff17]'>SELL</div>

                        </div>

    
                    </div>

                </div>
            </div>

            <div className='pt-5 px-5  flex flex-row items-end justify-evenly backdrop-filter blur-4xl'>
                <div className="opacity-50 w-[650px] h-[300px] bg-[#4d39a7] rounded-tl-full rounded-tr-full blur-[100px] absolute right-[60%] "></div>
                <div className="opacity-50 w-[350px] h-[600px] bg-[#602481] rounded-tl-full rounded-tr-full blur-[100px]  absolute left-[60%]"></div>
            </div>

        </>
    );
}
