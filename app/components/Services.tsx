import Image from "next/image";
import pic1 from '@/public/assets/images/lawpics1.jpg'
const Services = () => {
    return (
        <div className="bg-white">
        <section className="py-10" id="services ">
            <div className="container mx-auto px-4 bg-white">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <Image
                            src={pic1}
                            alt="Wheat Flour Grinding"
                            width={600}
                            height={256}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Wheat Flour Grinding</h3>
                            <h1 className="text-gray-700 text-base">
                                Our wheat flour grinding service provides fresh, high-quality flour to businesses and individuals in the area. We use state-of-the-art equipment to grind wheat into flour, and we offer a variety of flours to meet the needs of our customers.
                            </h1>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <Image
                            src={pic1}
                            alt="Gram Flour Grinding"
                            width={600}
                            height={256}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Gram Flour Grinding</h3>
                            <h1 className="text-gray-700 text-base">
                                Our gram flour is perfect for a variety of uses, including baking, cooking, and making snacks. It is also a good source of protein and fiber. Our gram flour grinding service is a convenient and affordable way to get the freshest gram flour possible.
                            </h1>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <Image
                            src={pic1}
                            alt="Jowar Flour Grinding"
                            width={600}
                            height={256}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Jowar Flour Grinding</h3>
                            <h1 className="text-gray-700 text-base">
                                Our jowar grinding service is a convenient and affordable way to get fresh, high-quality jowar flour. We use state-of-the-art equipment to grind jowar into a fine powder, which is perfect for making roti, bread, and other dishes.
                           
                            </h1>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <Image
                            src={pic1}
                            alt="Chilli Pounding"
                            width={600}
                            height={256}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Chilli Pounding</h3>
                            <h1 className="text-gray-700 text-base">
                                We specialize in the production of high-quality chili powder. Our chili powder is made from the finest, freshest chilies, and we use traditional pounding methods to ensure that our chili powder retains its full flavor and aroma.
                             
                            </h1>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full">
                        <div className="text-center text-white font-medium">Special Product</div>
                        <Image
                            src={pic1}
                            alt="Flavoured Spaghetti"
                            width={600}
                            height={256}
                            className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-6 bg-white text-center rounded-b-lg md:min-h-full">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Flavoured Spaghetti</h3>
                            <h1 className="text-gray-700 text-base">
                                <span className="font-medium underline">Our speciality is</span> Bappa Flour Mill offers a variety of flavored spaghetti dishes that are sure to tantalize your taste buds. We use only the freshest ingredients. Our flavors include Mango and Spinach.
                            </h1>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <Image
                            src={pic1}
                            alt="Rice Papad"
                            width={600}
                            height={256}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Rice Papad</h3>
                            <h1 className="text-gray-700 text-base">
                                Our company produces high-quality rice papad that is made with the finest ingredients. We use traditional methods to make our papad, which gives it a unique flavor and texture. Our papad is also gluten-free and vegan.
                   
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Services;
