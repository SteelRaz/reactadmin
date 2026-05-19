import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function ContentAdmin({nav,onSave,setfoto,datafoto}) {
    
    const { register, handleSubmit } = useForm();

    const BackContent = () => {
        nav("/Content")
    }

    const handleupload = (e) => {
        const foto = e.target.files[0]
        console.log("Data Foto",foto)

        const sizeMB = foto.size / (1024 * 1024);
        console.log("sizeMB",sizeMB)
        
        const reader = new FileReader();
        reader.onloadend = () => {
            console.log(reader)
            const base64Full = reader.result;
            console.log("base64Full",base64Full)
            const base64Only = base64Full.split(",")[1];
            console.log("base64Only",base64Only)
            setfoto(base64Only)
            
        }
        reader.readAsDataURL(foto)
    }

    const handlesubmitcontent = (data) => {
        console.log("datafoto",datafoto)
        if(data.Content != "" && data.Description != "" && datafoto != ""){
            Swal.fire({
                title: "Apakah Anda Yakin Ingin Menyimpan Data ?",
                showCancelButton: true,
                confirmButtonText: "Save",
                icon: "question"
            }).then((result)=> {
                if (result.isConfirmed){
                    Swal.fire({
                    title: "Berhasil Menyimpan Data Telah Tersimpan",
                    icon: "success",
                    }).then((result) => {
                        if (result.isConfirmed){
                            const confirmdata = {
                                ...data,
                                FotoContent: datafoto
                            }
                            console.log("Data Dari ConfirmData",confirmdata)
                            onSave(confirmdata)
                            nav("/Content")
                        }
                    })
                }
            })
        } else (
            Swal.fire({
                title: "Data Ada Yang Belum Terisi !",
                text: "Mohon Lengkapi Data !",
                icon: "warning"
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

                    {/* <input
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
                    /> */}

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
                        onChange={handleupload}
                    />

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