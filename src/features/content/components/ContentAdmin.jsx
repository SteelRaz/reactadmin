
function ContentAdmin() {
    x
    return(
        <>
        
        <div>
            <button>
                
            </button>
        </div>

        <div class="flex justify-center font-medium mr-5 mb-5">
            Input Content
        </div>
        
        <div class="flex justify-center">
            <div class="flex flex-col gap-[2vw]">
                <input
                    type="text"
                    placeholder="Name Content"
                    class="
                    border rounded px-2 py-1
                    focus:outline-none
                    focus:border-sky-500
                    focus:outline-sky-500
                    focus:ring-2 focus:ring-sky-500
                    w-64 shrink"
                />

                <input
                    type="text"
                    placeholder="Description"
                    class="
                    border rounded px-3 py-1
                    focus:outline-none
                    focus:border-sky-500
                    focus:outline-sky-500
                    focus:ring-2 focus:ring-sky-500
                    w-64 shrink"
                />

                <input
                    type="file"
                    class="
                    file:mr-4
                    file:rounded-full
                    file:border-0
                    file:bg-orange-100
                    file:px-4 
                    file:py-2
                    file:text-sm
                    file:font-semibold
                    dark:file:bg-orange-600
                    dark:file:text-violet-100
                    dark:hover:file:bg-blue-600"
                />

                <button
                    class="
                    dark: bg-orange-600
                    dark:hover:bg-blue-600
                    rounded-full
                    w-42
                    ml-10
                    text-sm
                    px-4
                    py-2
                    text-white"
                >
                    Send
                </button>
            </div>

        </div>

        </>
    )
}

export default ContentAdmin;