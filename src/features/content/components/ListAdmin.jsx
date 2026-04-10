import Box from '@mui/material/Box';
import { DataGrid } from "@mui/x-data-grid";
import { Navigate } from 'react-router-dom';

function ListAdmin({nav}) {

    const Addnav = () => {
        nav("/Content-admin")
    }
    
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
                        columns={[
                            { field: 'No' }, 
                            { field: 'Nama Content',width: 200 }, 
                            { field: 'Content',width: 200 },
                            { field: 'Edit',width: 200 },
                            { field: 'Delete',width: 200 },
                        ]}
                    >
                        
                    </DataGrid>
                </Box>
            </div>
        </>
        
    )
}
export default ListAdmin;