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
                        focus:ring-2 
                        focus:ring-sky-500
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

                    {/* <input
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
                    /> */}

                    <input
                        type="file"
                        className="
                        w-64 
                        text-sm 
                        text-gray-500 
                        file:mr-4 
                        file:py-2 
                        file:px-4 
                        file:rounded-lg 
                        file:border-0 
                        file:text-sm 
                        file:font-semibold 
                        file:bg-orange-600 
                        file:text-white 
                        file:cursor-pointer 
                        hover:file:bg-blue-600 
                        file:transition-colors"
                        onChange={handleupload}
                    />

                    <button
                        type="submit"
                        className="
                        bg-orange-600 
                        hover:bg-blue-600 
                        w-32 
                        rounded-lg text-sm py-2 
                        text-white cursor-pointer"
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