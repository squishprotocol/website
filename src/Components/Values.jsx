import React from 'react'

const Values = () => {
    return (
        <div className=" py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-white">
                        Our Values
                    </h2>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-20 md:grid-cols-3">
                        {/* Card 1 */}
                        <div className="rounded-lg shadow-lg overflow-hidden bg-gray-900">
                            <div className="px-6 py-8 sm:p-10">
                                <div>
                                    <span className="inline-flex items-center justify-center px-2 py-1 mb-4 rounded-full bg-purple-600 text-white">
                                        Accessibility
                                    </span>
                                </div>
                                <p className="mt-6 text-lg leading-7 text-white">
                                    We believe in creating digital experiences that are accessible to all. Our team is dedicated to ensuring that our products meet or exceed the highest standards for accessibility and usability.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-lg shadow-lg overflow-hidden bg-gray-900">
                            <div className="px-6 py-8 sm:p-10">
                                <div>
                                    <span className="inline-flex items-center justify-center px-2 py-1 mb-4 rounded-full bg-purple-600 text-white">
                                        Transparency
                                    </span>
                                </div>
                                <p className="mt-6 text-lg leading-7 text-white">
                                    We believe in being open and transparent with our clients and partners. We believe that clear communication and honesty are the foundation of strong relationships and successful projects.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-lg shadow-lg overflow-hidden bg-gray-900">
                            <div className="px-6 py-8 sm:p-10">
                                <div>
                                    <span className="inline-flex items-center justify-center px-2 py-1 mb-4 rounded-full bg-purple-600 text-white">
                                        Security
                                    </span>
                                </div>
                                <p className="mt-6 text-lg leading-7 text-white">
                                    We take security seriously. Our team follows the latest industry best practices to ensure that your data and information is protected at all times.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Values;
