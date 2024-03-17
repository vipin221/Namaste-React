

const Contact = () => {
    const styleFormDiv = "flex flex-col relative  rounded-md shadow-lg shadow-slate-400";
    const styleFormLabel = "absolute top-0 left-1 transform -translate-y-1/2 px-2 text-xs font-semibold rounded-lg  bg-white text-gray-600";
    return (
        <div className="flex flex-col justify-start py-10 w-full bg-blue-200 items-center h-screen gap-10  rounded-md ">
            <h1 className="text-3xl font-semibold">Reach Us through Below Form</h1>
            <form action="" className="w-[400] rounded-lg shadow-md shadow-gray-400 flex gap-5 flex-col bg-opacity-30 bg-white p-10 hover:shadow-lg hover:shadow-gray-400 ">
                <div className={styleFormDiv}>
                    <label className={styleFormLabel}> Name </label> 
                    <input className="w-full h-11 p-4   rounded-md focus:outline-none focus:border-blue-700   " type="text" placeholder="Ex: Vipin Maurya" />

                </div>
                <div className={styleFormDiv}>
                    <label className={styleFormLabel}> Email </label> 
                    <input className="w-full h-11 p-4   rounded-md focus:outline-none focus:border-blue-700" type="text" placeholder="Your@gmail.com" />
                </div>

                <div className={styleFormDiv}>
                    <label className="absolute top-0 left-1 transform -translate-y-1/2 px-2 text-xs font-semibold rounded-lg  bg-white text-gray-600"> Message </label>
                    <textarea type="text"  rows="4" cols="4"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"

                     placeholder="Enter your message here..." />

                </div>
                <div >
                    <button className="py-2 px-3 rounded-lg text-white shadow-lg shadow-slate-400 bg-blue-700 ">Submit</button>
                </div>
            </form>
        </div>
    )



}

export default Contact;