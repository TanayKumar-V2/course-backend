function Features(){
    return(
        <>
        <h1 className="text-5xl font-extrabold text-green-400 pt-10 flex items-center justify-center">OUR FEATURES</h1>
            <div className="grid grid-cols-3 p-20 gap-20">
                <div className="border max-w-80 h-100 p-4 rounded-lg shadow-xl border-gray-50 hover:scale-102 transition duration-600 ease-in-out hover:bg-green-100">
                    <img src="https://cdn-icons-png.freepik.com/512/6389/6389595.png" className="w-40 h-40 items-center justify-center ml-10 pb-7"></img>
                    <p className="text-2xl font-bold text-green-600 mt-7">One stop Solution for all the study materials and course content curated for students</p>
                </div>
                <div className="border max-w-80 h-100 p-4 rounded-lg shadow-xl border-gray-50 hover:scale-102 transition duration-600 ease-in-out hover:bg-green-100">
                    <img src="https://cdn-icons-png.flaticon.com/512/3429/3429149.png" className="w-40 h-40 items-center justify-center ml-13 pb-7"></img>
                    <p className="text-2xl font-bold text-green-600 mt-7">Huge Database of resources of which contains almost every course available in the market</p>
                </div>
                <div className="border max-w-80 h-100 p-4 rounded-lg shadow-xl border-gray-50 hover:scale-102 transition duration-600 ease-in-out hover:bg-green-100">
                    <img src="https://static.thenounproject.com/png/2339926-200.png" className="w-40 h-40 items-center justify-center ml-13 pb-7"></img>
                    <p className="text-2xl font-bold text-green-600 mt-7">Courses curated by expert faculties of IITs and NITs and other ivy league university mentors</p>
                </div>
            </div>
        </>
    )
}

export default Features