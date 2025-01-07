import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { RiInstagramLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="flex mt-8 relative mb-[500px] md:mb-10">
            <div className=" flex-1 min-h-[550px] bg-slate-200">
                
            </div>
            <div className=" flex-1 bg-amber-700">
                
            </div>
            <div className="absolute md:w-[550px] lg:w-[1000px] top-10 md:top-12 right-0 md:right-24 bg-white ">
                <div className="w-4/5 md:ml-28 lg:ml-48 py-7 px-4">
                    <h1 className="text-xl font-semibold text-amber-700">Send a message</h1>
                    <form className="space-y-4">
                        <div className="flex justify-between gap-5">
                            <div className="w-full">
                                <label className="form-control w-full  border-b-2 mt-2">
                                    <div className="label py-0">
                                        <span className="label-text py-0 text-amber-700">First Name</span>
                                    </div>
                                    <input type="text" placeholder="Write your name" className="input  w-full" />
                                </label>
                            </div>
                            <div className="w-full">
                                <label className="form-control w-full  border-b-2 mt-2">
                                    <div className="label py-0">
                                        <span className="label-text py-0 text-amber-700">Last Name</span>
                                    </div>
                                    <input type="text" placeholder="Write your name" className="input  w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-between gap-5">
                            <div className="w-full">
                                <label className="form-control w-full  border-b-2 mt-2">
                                    <div className="label py-0">
                                        <span className="label-text text-xl py-0 text-amber-700">Email Address</span>
                                    </div>
                                    <input type="email" placeholder=" your email" className="input  w-full" />
                                </label>
                            </div>
                            <div className="w-full">
                                <label className="form-control w-full  border-b-2 mt-2">
                                    <div className="label py-0">
                                        <span className="label-text py-0 text-xl text-amber-700">Mobile Number</span>
                                    </div>
                                    <input type="number" placeholder=" your number" className="input  w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="border-b-2">
                            <p className="text-2xl">Write your message here...</p>
                        <textarea
                            placeholder=""
                            className="textarea  textarea-md w-full"></textarea>
                        </div>
                        <div className="">
                        <button onClick={(e)=> e.preventDefault()} className="btn bg-amber-700 px-8 text-white">Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="absolute  h-[396px] md:w-[250px] lg:w-[300px]  md:left-32 text-white px-6 py-6 bg-amber-700 top-[560px] md:top-20 space-y-6">
                <h3 className="text-xl font-bold text-white">Contact info</h3>
                <p className="flex items-start gap-2 py-2" ><span className="text-2xl font-bold"><IoLocationOutline></IoLocationOutline></span> 29/12 Dampara railway station, Habib Tower, 2nd floor</p>
                <p className="flex items-start gap-2 py-2" ><span className="text-2xl font-bold"><MdOutlineMail></MdOutlineMail></span>habibChy50@gmail.com</p>
                <p className="flex items-start gap-2 py-2" ><span className="text-2xl font-bold"><FiPhoneCall></FiPhoneCall></span>01613516358</p>
                <div className="flex gap-5 text-2xl items-end">
                    <span><FiFacebook></FiFacebook></span>
                    <span><CiTwitter></CiTwitter></span>
                    <span><RiInstagramLine></RiInstagramLine></span>
                    <span><FaLinkedinIn></FaLinkedinIn></span>
                </div>
            </div>
        </div>
    );
};

export default Contact;