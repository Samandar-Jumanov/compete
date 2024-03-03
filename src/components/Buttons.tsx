import { Grid, Button, Stack } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Buttons = () => {
    return (
        <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
        >
            <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Button
                        variant="contained"
                        color="success"
                        fullWidth
                        startIcon={<GitHubIcon />}
                        sx={{ fontSize: '0.8rem' }} // Adjusting font size for smaller buttons
                    >
                        GitHub
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button
                        variant="contained"
                        color="success"
                        fullWidth
                        startIcon={<GoogleIcon />}
                        sx={{ fontSize: '0.8rem' }} // Adjusting font size for smaller buttons
                    >
                        Google
                    </Button>
                </Grid>
            </Grid>
        </Stack>
    )
}
