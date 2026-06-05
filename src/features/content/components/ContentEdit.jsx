import { useForm } from "react-hook-form";

function ContentEdit({nav,onSave,editData}) {
    
    const { register, handleSubmit } = useForm();
    console.log("DataEdit",editData)
    
    const BackContent = () => {
        console.log("BackContent")
        nav("/Content")
    }

    const handlesubmitcontent = (data) => {
        console.log("handlesubmitcontent")
        onSave(data)
    }

    return(
        <>
            <div className="ml-5">
                <button
                    onClick={() => BackContent()}
                    className="
                    bg-orange-600 
                    hover:bg-blue-600 
                    w-32 
                    rounded-lg text-sm py-2 
                    text-white cursor-pointer"
                >
                    Back
                </button>
        </div>

        <div className="flex justify-center font-medium mr-5 mb-5">
            Input Content
        </div>
        <form onSubmit={handleSubmit(handlesubmitcontent)}>
            <div className="flex justify-center">
                <div className="flex flex-col gap-[2vw]">
                    <input
                        {...register("Content")}
                        type="text"
                        placeholder="Name Content"
                        className="
                        border rounded px-2 py-1
                        focus:outline-none
                        focus:border-sky-500
                        focus:outline-sky-500
                        focus:ring-2 focus:ring-sky-500
                        w-64 shrink"
                    />

                    <input
                        {...register("Description")}
                        type="text"
                        placeholder="Description"
                        className="
                        border rounded px-3 py-1
                        focus:outline-none
                        focus:border-sky-500
                        focus:outline-sky-500
                        focus:ring-2 focus:ring-sky-500
                        w-64 shrink"
                    />

                    <input
                        {...register("FotoContent")}
                        type="text"
                        placeholder="FotoContent"
                        className="
                        border rounded px-3 py-1
                        focus:outline-none
                        focus:border-sky-500
                        focus:outline-sky-500
                        focus:ring-2 focus:ring-sky-500
                        w-64 shrink"
                    />
{/* 
                    <input
                        {...register("FotoContent")}
                        type="file"
                        className="
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
                    /> */}

                    <button
                        type="submit"
                        className="
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
                        Edit
                    </button>
                </div>

            </div>
        </form>

        </>
    )
}

export default ContentEdit;