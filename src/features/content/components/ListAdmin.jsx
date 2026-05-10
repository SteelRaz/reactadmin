import Box from '@mui/material/Box';
import { DataGrid, GridActionsCell, GridActionsCellItem, GridDeleteIcon, GridEditDateCell } from "@mui/x-data-grid";
import { createContext, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';


function ListAdmin({nav, data, edit}) {

    console.log("Data content",data)

    const Addnav = () => {
        nav("/Content-admin")
    }

    const Editnav = (row) => {
        edit(row)
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
                onClick={() => deleteUser(params.id)}
                />
            ],
        },
    ];

    return(
        <>
            <div class="flex justify-end mr-5">
                <button
                    onClick={() => Addnav()}
                    class="
                    dark: bg-orange-600
                    dark:hover:bg-blue-600
                    w-30
                    rounded-lg
                    text-sm
                    py-2
                    text-white"
                >
                    Add
                </button>
            </div>
            <div class="mt-5">
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