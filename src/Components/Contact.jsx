import React from "react";

function Contact(){
    return<React.Fragment>
        <div className="mt-24 h-[30rem] flex mb-16">
            <div className="w-[50vw]">
                <img className="object-cover w-[50vw] h-[30rem]" src="src/assets/Images/contact_.avif" alt="" />
            </div>
            <div className="flex justify-center items-center w-[50vw] overflow-hidden bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full">
                <h2 className="text-3xl font-bold mb-8 text-center overflow-hidden">Submit your Query?</h2>

                <form className="space-y-6">
                {/* First Row: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                    type="text"
                    placeholder="Name"
                    className="p-4 border border-gray-300 rounded-lg w-full"
                    />
                    <input
                    type="email"
                    placeholder="E-mail address"
                    className="p-4 border border-gray-300 rounded-lg w-full"
                    />
                </div>

                {/* Second Row: Phone and Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                    type="text"
                    placeholder="Phone"
                    className="p-4 border border-gray-300 rounded-lg w-full"
                    />
                    <select className="p-4 border border-gray-300 rounded-lg w-full">
                    <option value="" disabled selected>
                        Subject
                    </option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Support">Support</option>
                    <option value="Feedback">Feedback</option>
                    </select>
                </div>

                {/* Third Row: Message */}
                <div>
                    <textarea
                    placeholder="Message"
                    rows="4"
                    className="p-4 border border-gray-300 rounded-lg w-full"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                    type="submit"
                    className="bg-[#0a0c6a] text-white font-semibold py-4 px-8 rounded-lg w-full md:w-auto"
                    >
                    Send Message
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </React.Fragment>
}
export default Contact;