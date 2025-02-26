import React from "react"
import RelatedRecipeThumblr from "../components/relatedRecipeThumblr"
import { Stack, Typography, Box } from "@mui/material"
import {object} from "prop-types"

RelatedRecipesGallery.propTypes = {
    recipe: object
}


export default function RelatedRecipesGallery({recipe}) {
    const [tags, setTags] = React.useState([])
    

    React.useEffect(() => {
        if (recipe.tags) {
           setTags(recipe.tags)
        }
    }, [tags, recipe])

    return (
        <Box>
            {
                tags.length !== 0 ?
                    <Stack direction={"row"} gap={2}>
                        {
                            tags.map((tag) => {
                                return (
                                    <Typography key={tag.id}>{tag.name}</Typography>
                                )
                            })
                        }
                    </Stack>
                    : <>Loading...</>
            }
        </Box>
    )
}