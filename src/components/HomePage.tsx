import { Paper, Typography, Stack, Button } from '@mui/material';

export const HomePageComponent = () => {
  return (
    <Stack
      sx={{
        marginTop: 4,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#ffcc00" // Changed text color to yellow
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          width: { xs: '90%', sm: '80%', md: '60%' },
          background: 'rgba(0, 0, 0, 0.8)', // Adjust alpha value for better readability
          color: "#ffcc00", // Text color changed to yellow
          borderRadius: 2,
          marginBottom: "10px"
        }}
      >
        <Typography variant="h5" gutterBottom>
          Welcome to <strong>COMPETE</strong>, where the world of <strong>programming</strong> becomes a dynamic arena for <strong>competition</strong> and skill honing!
        </Typography>
        <Typography variant="body1" paragraph>
          At <strong>COMPETE</strong>, we offer a unique platform where users can engage in thrilling <strong>programming challenges</strong>, pushing their boundaries and sharpening their <strong>coding prowess</strong>. Our innovative approach allows users to not only showcase their talents but also learn from others in an exhilarating <strong>competitive environment</strong>.
        </Typography>
        <Typography variant="body1" paragraph>
          With a diverse community of programmers from all skill levels, users can find suitable competitors to test their abilities and match their knowledge and expertise.
        </Typography>
        <Typography variant="body1" paragraph>
          What sets us apart is our emphasis on building a comprehensive portfolio through competition. As users engage in various challenges and emerge victorious, they craft a robust portfolio that highlights their achievements and skills, making them stand out in the <strong>competitive landscape</strong> of the programming world.
        </Typography>
        <Typography variant="body1">
          Whether you're a seasoned coder looking for new challenges or a novice eager to learn and improve, <strong>COMPETE</strong> provides the perfect platform to thrive and excel. Join us today and embark on an exciting journey of <strong>competition</strong>, <strong>learning</strong>, and <strong>growth</strong> in the realm of programming!
        </Typography>
      </Paper>
      <Button variant="contained" style={{ backgroundColor: '#ffcc00', color: 'black' }}>
        Get started
      </Button>
    </Stack>
  );
};
