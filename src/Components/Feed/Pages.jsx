import { Box, Stack, Typography, Paper, Button } from "@mui/material";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Pages = () => {
  return (
    <Stack>
      <Box
        className="background-image"
        sx={{
          height: "420px",
          direction:'row'
        }}
      >
        <Typography
          variant="h4"
          sx={{ mt: "10px", ml: "250px", fontWeight: "bold", color: "#063A55" }}
        >
          Accelerate Your Carrer Growth
        </Typography>

        <Typography
          variant="h3"
          sx={{
            mt: "10px",
            ml: "250px",
            fontWeight: "bolder",
            color: "#ff7701",
          }}
        >
          & Upskill Yourself
          <Typography sx={{ textAlign: "left" }}>
            <hr
              style={{
                marginTop: "10px",
                marginLeft: "10px",
                background: "#ff7701",
                color: "#ff7701",
                border: " 2px solid #ff7701",
                width: "380px",
              }}
            />
          </Typography>
        </Typography>
        <Typography
          variant="subtitle"
          sx={{
            mt: "15px",
            ml: "260px",
            fontWeight: "bolder",
            color: "#063A55",
          }}
        >
          World Class Degree And Certification Program
          </Typography>
       
          <Typography variant="h5"
          sx={{
            mt: "15px",
            ml: "260px",
            fontWeight: "bolder",
            color: "#063A55",
            opacity:'0.7'
          }} >10 Million Learners</Typography>

<Paper sx={{
        backgroundColor:'#ff7701',
        width:'165px',
        mt: "15px",
        ml: "260px",
    }}>
    <Button >
    <Typography sx={{
      color:'#063A55',
      fontWeight:'bold',
     
  }} >Explore Courses</Typography>
  </Button>
  </Paper>

  <Paper sx={{
    width:'800px',
    ml:'260px',
    mt:'30px',
    textAlign:'center',
    color:'#063A55',
    borderRadius:'50px'
    
  }}>
    <Typography variant="h6" sx={{fontWeight:'bolder', }}>Process Advisors
    <Typography> <ShowChartIcon/> </Typography> </Typography>
    <Typography sx={{fontWeight:'bolder', }}> 500% Salary Hike Received By A Working Professional Post Completion Of The Course</Typography>
    
  </Paper>
        
      </Box>
    </Stack>
  );
};

export default Pages;
