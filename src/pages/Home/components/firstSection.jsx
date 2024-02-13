
import { useEffect, useState } from 'react';
import './firstSection.scss'
import { IoMdMore } from "react-icons/io";
import axios from 'axios';
import { IoIosArrowUp } from "react-icons/io";

export const FirstSection = () => {

    const [crypto, setCrypto] = useState([])

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline-false")
            .then((res) => {
                console.log(res.data)
                setCrypto(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    let btc = crypto.filter((element) => element.name == "Bitcoin")
    let eth = crypto.filter((element) => element.name == "Ethereum")
    let sol = crypto.filter((element) => element.name == "Solana")
    let usdt = crypto.filter((element) => element.name == "Tether")
    console.log(btc);
    return (
        <>
            <div className='pt-5 px-5  flex flex-row items-end justify-evenly backdrop-filter blur-4xl fixed '>
                <div className="opacity-50 w-[650px] h-[300px] bg-[#4d39a7] rounded-tl-full rounded-tr-full blur-[100px] absolute right-[60%] "></div>
                <div className="opacity-50 w-[350px] h-[600px] bg-[#602481] rounded-tl-full rounded-tr-full blur-[100px]  absolute left-[60%]"></div>
            </div>

            <div className="p-5">
                <div className="flex w-full flex-row justify-between px-10">
                    <h1 className='text-white text-3xl'>Hot Market</h1>
                    <input className='rounded-md h-12 w-80 bg-[#ffffff27] text-white  p-5  outline-none border-[1px] border-[#ffffff17] bg-blur' type="text" name="" id="" placeholder='searche...' />
                </div>



                {/* divs row */}
                <div className="flex flex-row  justify-between pt-10 px-6 ">

                    <div className="w-[350px]  text-white rounded-lg p-5 border-[1px] border-[#ffffff17] bg-blur ">
                        <div className="flex flex-row justify-between items-center w-full border-b-[1px]  border-[#ffffff17] p-3 ">
                            <div className="flex flex-row gap-2">
                                <div className="flex justify-center items-center w-[50px] f-[50px] bg-[#fff42d6c] rounded-md">
                                    <img width={30} src={btc[0]?.image} alt="" />
                                </div>
                                <div className="flex flex-col ">
                                    <h3 className='text-md font-bold'>{btc[0]?.name}</h3>
                                    <p className='text-xs font-light opacity-55'>{btc[0]?.name} USD</p>
                                </div>
                            </div>

                            <div className="text-3xl">
                                <IoMdMore />
                            </div>

                        </div>

                        <h1 className='text-4xl p-3'>{btc[0]?.current_price} $</h1>

                    </div>

                    <div className="w-[350px] bg-[#ffffff12] text-white rounded-lg p-5 border-[1px] border-[#ffffff17] bg-blur">
                        <div className="flex flex-row justify-between items-center w-full border-b-[1px]  border-[#ffffff17] p-3">
                            <div className="flex flex-row gap-2">
                            <div className="flex justify-center items-center w-[50px] f-[50px] bg-[#9f9f9f6c] rounded-md">
                                    <img width={30} src={eth[0]?.image} alt="" />
                                </div>
                                <div className="flex flex-col ">
                                    <h3 className='text-md font-bold'>{eth[0]?.name}</h3>
                                    <p className='text-xs font-light opacity-55'>{eth[0]?.name} USD</p>
                                </div>
                            </div>

                            <div className="text-3xl">
                                <IoMdMore />
                            </div>
                        </div>

                        <h1 className='text-4xl p-3'>{eth[0]?.current_price} $</h1>

                    </div>

                    <div className="w-[350px] bg-[#ffffff12] text-white rounded-lg p-5 border-[1px] border-[#ffffff17] bg-blur">
                        <div className="flex flex-row justify-between items-center w-full border-b-[1px]  border-[#ffffff17] p-3">
                            <div className="flex flex-row gap-2">
                            <div className="flex justify-center items-center w-[50px] f-[50px] bg-[#9663d96c] rounded-md">
                                    <img width={30} src={sol[0]?.image} alt="" />
                                </div>
                                <div className="flex flex-col ">
                                    <h3 className='text-md font-bold'>{sol[0]?.name}</h3>
                                    <p className='text-xs font-light opacity-55'>{sol[0]?.name} $ USD</p>
                                </div>
                            </div>

                            <div className="text-3xl">
                                <IoMdMore />
                            </div>
                        </div>

                        <h1 className='text-4xl p-3'>{sol[0]?.current_price} $</h1>

                    </div>

                    <div className="w-[350px] bg-[#ffffff12] text-white rounded-lg p-5 border-[1px] border-[#ffffff17] bg-blur">
                        <div className="flex flex-row justify-between items-center w-full border-b-[1px]  border-[#ffffff17] p-3">
                            <div className="flex flex-row gap-2">
                            <div className="flex justify-center items-center w-[50px] f-[50px] bg-[#71e3556c] rounded-md">
                                    <img width={30} src={usdt[0]?.image} alt="" />
                                </div>
                                <div className="flex flex-col ">
                                    <h3 className='text-md font-bold'>{usdt[0]?.name}</h3>
                                    <p className='text-xs font-light opacity-55'>{usdt[0]?.name} USD</p>
                                </div>
                            </div>

                            <div className="text-3xl">
                                <IoMdMore />
                            </div>
                        </div>

                        <h1 className='text-4xl p-3'>{usdt[0]?.current_price} $</h1>

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
                            <div className='rounded-md h-12 w-16 flex justify-center items-center bg-[#ffffff27] text-white  p-5  outline-none border-[1px] border-[#ffffff17] '>
                                <div className="text-xl opacity-50 flex flex-row ">
                                    <p className='text-sm'>Hide</p>
                                    <IoIosArrowUp />
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        crypto.map((element, index) =>
                            <>
                                <div>
                                    <table className="flex flex-row justify-evenly pt-5 ">

                                        <tr className="flex flex-row justify-evenly items-center pt-5 w-full text-center">
                                            <td className=' w-[200px]'>
                                                <div className="flex flex-row items-center gap-5">
                                                    <img className='w-10 ' src={element.image} alt="" />
                                                    <p className='font-bold'>{element.id}</p>
                                                </div>

                                            </td>

                                            <td className=' w-[150px]'>
                                                <p>{element.current_price}</p>

                                            </td>

                                            <td className=''>
                                                <div className="flex flex-row gap-5 ">
                                                    <div className='rounded-md h-7 w-23 flex justify-center items-center bg-[#00c32161] text-white  p-5  outline-none border-[1px] border-[#ffffff17]'>BUY</div>
                                                    <div className='rounded-md h-7 w-23 flex justify-center items-center bg-[#c3000061] text-white  p-5  outline-none border-[1px] border-[#ffffff17]'>SELL</div>

                                                </div>

                                            </td>

                                        </tr>
                                    </table>



                                </div>
                            </>
                        )
                    }


                </div>
            </div>



















        </>
    );
}
