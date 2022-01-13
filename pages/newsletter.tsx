
import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Dsll from "../component/nl-navbar";
import Story from "../component/newsletter/story";
import Edit from "../component/newsletter/edit";
import CreateNesletter from "../component/forms";
import HeaderSeaction from "../component/newsletter/header-section";

export default function Home() {
    return (
        <>
            <Dsll />
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='10' bg='blue.500'>
                    <Edit />
                    <HeaderSeaction />
                    <Story />
                    <CreateNesletter />
                </GridItem>
            </Grid>
        </>
    )
}

