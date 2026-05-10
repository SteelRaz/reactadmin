import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function ContentAdmin({nav,onSave}) {
    
    const { register, handleSubmit } = useForm();

    const BackContent = () => {
        nav("/Content")
    }

    const handlesubmitcontent = (data) => {
        if(data.Content != ""){
            onSave(data)
            nav("/Content")
        } else (
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
            })
        )
    }

    return(
        <>
            <div class="ml-5">
                <button
                    onClick={() => BackContent()}
                    class="
                    dark: bg-orange-600
                    dark:hover:bg-blue-600
                    w-30
                    rounded-lg
                    text-sm
                    py-2
                    text-white"
                >
                    Back
                </button>
        </div>

        <div class="flex justify-center font-medium mr-5 mb-5">
            Input Content
        </div>
        <form onSubmit={handleSubmit(handlesubmitcontent)}>
            <div class="flex justify-center">
                <div class="flex flex-col gap-[2vw]">
                    <input
                        {...register("Content")}
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
                        {...register("Description")}
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
                        {...register("FotoContent")}
                        type="text"
                        placeholder="FotoContent"
                        class="
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
                    /> */}

                    <button
                        type="submit"
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
                        Save
                    </button>
                </div>

            </div>
        </form>

        </>
    )
}

export default ContentAdmin;