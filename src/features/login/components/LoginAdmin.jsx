function Loginadmin() {
    return(
        <>
        <div className="flex justify-center font-medium mr-5 mb-5">
            Login
        </div>
        <form>
            <div className="flex justify-center">
                <div className="flex flex-col gap-[2vw]">
                    <input
                        type="text"
                        placeholder="Username"
                        className="
                        border rounded px-2 py-1
                        text-center
                        focus:outline-none
                        focus:border-sky-500
                        focus:outline-sky-500
                        focus:ring-2 
                        focus:ring-sky-500
                        w-64 shrink"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="
                        border rounded px-3 py-1
                        text-center
                        focus:outline-none
                        focus:border-sky-500
                        focus:outline-sky-500
                        focus:ring-2 focus:ring-sky-500
                        w-64 shrink"
                    />

                    <button
                        type="submit"
                        className="
                        self-center
                        bg-orange-600 
                        hover:bg-blue-600 
                        w-32 
                        rounded-lg text-sm py-2 
                        text-white cursor-pointer"
                    >
                        Login
                    </button>
                </div>

            </div>
        </form>
        </>
    )
}

export default Loginadmin;