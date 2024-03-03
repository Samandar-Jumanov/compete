"use client";

import { Paper, Typography, Stack, Grid } from '@mui/material';
import { useRouter } from "next/navigation";
import { Buttons } from "./Buttons";
import Logo from './Logo';


export const HomePageComponent = () => {
    const router = useRouter();

    return (
        <Stack
            sx={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "white", 
                padding: "20px",
                backgroundColor :"black"

            }}
        >
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Logo />
                </Grid>
            </Grid>
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    width: { xs: '90%', sm: '80%', md: '60%' },
                    color: "white", 
                    borderRadius: 2,
                    marginBottom: "10px",
                    background : "black"
                }}
            >
                <Typography variant="h5" gutterBottom> 
                     HOW IMPROVING YOURSELF SHOULD WORK
                </Typography>

                <Typography variant="h5" gutterBottom> 
                      HOW TO CHALLANGE YOURSLEF 
                </Typography>

                <Typography  variant="h5" gutterBottom > 
                     HOW TO FIND A SOLUTION TO YOUR PROBLEM
                </Typography>
            </Paper>
            <Buttons />
        </Stack>
    );
};

export default HomePageComponent;
