import Box from '@mui/material/Box';
import { DataGrid, GridActionsCell, GridActionsCellItem } from "@mui/x-data-grid";
import { Navigate } from 'react-router-dom';


function ActionsCell(props) {
  const { deleteUser, toggleAdmin, duplicateUser } =
    React.useContext(ActionHandlersContext);

  return (
    <GridActionsCell {...props}>
      <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Delete"
        onClick={() => deleteUser(props.id)}
      />
    </GridActionsCell>
  );
}

function ListAdmin({nav, data}) {

    console.log("Data content",data)

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
                        rows={data}
                        getRowId={(row) => row.Id}
                        columns={[
                            { field: 'Id', headerName: 'No' },
                            { field: 'Contet', headerName:'Nama Content',width: 200 }, 
                            { field: 'Description',headerName:'Deskripsi',width: 200 },
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