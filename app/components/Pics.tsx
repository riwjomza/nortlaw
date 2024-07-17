'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import law1 from '@/public/assets/images/lawpics2.jpg';
import service from '@/public/assets/images/service.jpg';
import Pic1 from '@/public/assets/images/home1.jpg';


const Pics = () => {
    const images = [law1, service,Pic1]; // Array of images
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <div className="relative w-[520] h-[420px]" id="home">
            <div className="absolute inset-0 opacity-70">
                <Image
                    priority
                    src={images[currentImage]}
                    className="object-cover object-center w-full h-full"
                    alt="Background Image"
                    layout="fill" // Use layout="fill" to make the image cover the entire div
                    objectFit="cover" // Ensure the image covers the div
                />
            </div>
            <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <h1 className="text-gray-700 font-medium text-3xl md:text-5xl leading-tight mb-2">
                        มีปัญหาปรึกษาเราได้ทุกเมื่อ
                    </h1>
                    <div className="font-regular text-xl mb-8 mt-4">
                        นอรท์ลอว์เฟิรม์พรอ้มให้คำปรึกษาทางกฎหมายแก่ท่าน
                        <h1 className="font-regular text-xl">
                            Tel. 0889722244
                        </h1>
                    </div>
                    <a
                        href="#contactUs"
                        className="px-6 py-3 bg-[#1D2951] text-white font-medium rounded-full hover:bg-[#c09858] transition duration-200"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Pics;
