import React from 'react'
import FlipCounter from "../Components/FlipCounter"
import logo from "../../public/logo.png"
const Hero = () => {
    return (
        <div>
            <section><FlipCounter/>
                <div className="grid h-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Stake Your $SQUISH and earn BNB,BUSD and more</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">The native token of the Squish Protocol, Squish Token, is a utility token that provides access to the farming platform.</p>

                        <a href="https://cz.cash/#/swap?inputCurrency=BNB&outputCurrency=0xcfa661975D9b3f6bc7fcb60642c366A12E856348" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-red-400 border border-red-400 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                            BUY NOW
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                        <a href="https://squish-finance.gitbook.io/squish-protocol/" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-red-400 border border-red-400 rounded-lg hover:bg-gray-600 focus:ring-4 focus:ring-gray-100">
                            Docs
                        </a>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-4 lg:flex">
                        <img src={logo} alt="mockup"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
