import Image from "next/image";
import Pic4 from '@/public/assets/images/Law.png'
import Pic5 from '@/public/assets/images/Share.png'
import Pic6 from '@/public/assets/images/Partnership.png'
import Pic7 from '@/public/assets/images/Pics7.png'


const Whyus = () => {
    return (
       <div className=" bg-white">

        <section className="text-gray-700 body-font">
            <div className="flex justify-center text-3xl font-bold text-gray-800 text-center pt-10">
                Why Us?
            </div>
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap text-center justify-center">
                    <div className="p-4 md:w-1/3 sm:w-1/2">
                        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                            <div className="flex justify-center">
                                <Image
                                    src={Pic4}
                                    alt="Latest Milling Machinery"
                                    width={128}
                                    height={128}
                                    className="w-32 mb-3"
                                />
                            </div>
                            <h2 className="title-font font-bold  font-regular text-md text-gray-900">บริการให้คำปรึกษาทางด้านกฎหมายครบทุกด้าน
</h2>
                        </div>
                    </div>


                    <div className="p-4 md:w-1/3 sm:w-1/2">
                        <div className="px-4 mt-20  transform transition duration-500 hover:scale-110">
                            <div className="flex justify-center">
                                <Image
                                    src={Pic6}
                                    alt="Time Efficiency"
                                    width={150}
                                    height={150}
                                    className="w-32 mb-3"
                                />
                            </div>
                            <h2 className="title-font font-bold  font-regular text-md text-gray-900">ซื่อสัตย์ ไว้วางใจได้</h2>
                        </div>
                    </div>

                    <div className="mt-1 p-4 md:w-1/3 sm:w-1/2">
                        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                            <div className="flex justify-center">
                                <Image
                                    src={Pic5}
                                    alt="Reasonable Rates"
                                    width={70}
                                    height={70}
                                    className="w-32 mb-3"
                                />
                            </div>
                            <h2 className="title-font font-bold font-regular text-md text-gray-900">Check up คดีคอยติดตามรายงานคดีสม่ำเสมอ</h2>
                        </div>
                    </div>



                </div>
            </div>
        </section>
       </div>
    );
};

export default Whyus;
