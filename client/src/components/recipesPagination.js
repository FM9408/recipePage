import React from "react"
import { Box, Pagination } from "@mui/material"
import { array, func } from "prop-types"


RecipesPagination.propTypes = {
    recipes: array,
    setPaginated: func
}




export default function RecipesPagination({setPaginated, recipes}) {
     const totalPages = Math.ceil(recipes.length / 6)
    const [page, setPage] = React.useState(1)
    

    
    function handlePaginationChange(e, value) {
        setPage(value)
        setPaginated(recipes.slice(6 * (value - 1), 6 * value))
    }
    return (
        <Box sx={{ margin: '1%', width: '100%', justifyItems: 'center' }}>
            <Pagination
                page={page}
                count={totalPages}
                showFirstButton
                showLastButton
                hideNextButton={page === totalPages}
                hidePrevButton={page === 1}
                onChange={(e, value) => {
                    handlePaginationChange(e, value)
                }}
            />
        </Box>
    )
}