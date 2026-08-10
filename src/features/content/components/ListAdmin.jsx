import Box from '@mui/material/Box';
import { DataGrid, GridActionsCell, GridActionsCellItem, GridDeleteIcon, GridEditDateCell } from "@mui/x-data-grid";
import { createContext, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import Swal from 'sweetalert2';


function ListAdmin({nav, data, onEdit, onDelete}) {

    console.log("Data content",data)

    const Addnav = () => {
        nav("/Content-admin")
    }

    const Editnav = (row) => {
        onEdit(row)
    }

    const DeleteData = (row) => {
        Swal.fire({
            title: "Apakah Anda Yakin Ingin Melakukan Delete Data ?",
            showCancelButton: true,
            confirmButtonText: "Delete",
            icon: "warning"
        }).then((result)=> {
            if (result.isConfirmed){
                Swal.fire({
                title: "Berhasil Melakukan Delete Data !",
                icon: "success",
                }).then((result) => {
                    if (result.isConfirmed){
                    console.log("Delete Data")
                        onDelete(row)
                    }
                })
            }
        })
        
    }
    
      const columns = [
            { field: 'Id', headerName: 'No', width: 90 },
            { field: 'Contet', headerName: 'Nama Content', width: 200 },
            { field: 'Description', headerName: 'Deskripsi', width: 200 },
            {
            field: 'actions',
            type: 'actions',
            headerName: 'Action',
            width: 200,
            getActions: (params) => [
                <GridActionsCellItem
                icon={<EditIcon />}
                label="Edit"
                onClick={() => Editnav(params.row)}
                />,
                <GridActionsCellItem
                icon={<GridDeleteIcon />}
                label="Delete"
                onClick={() => DeleteData(params.row.Id)}
                />
            ],
        },
    ];

    return(
        <>
            <div className="flex justify-end mr-5">
                <button
                    onClick={() => Addnav()}
                    className="
                    bg-orange-600 
                    hover:bg-blue-600 
                    w-32 
                    rounded-lg text-sm py-2 
                    text-white cursor-pointer"
                >
                    Add
                </button>
            </div>
            <div className="mt-5">
                <Box sx={{ height: 1080, width: '100%' }}>
                    <DataGrid
                        rows={data}
                        getRowId={(row) => row.Id}
                        columns={columns}
                    >
                        
                    </DataGrid>
                </Box>
            </div>
        </>
        
    )
}
export default ListAdmin;