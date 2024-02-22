import { Stack } from "@mui/material";
import { logo } from "../../Utils/constants";
import SearchBar from "./SearchBar";
import Courses from "./Courses";
import HireFromUs from "./HireFromUs";
import ExploreCourses from "./ExploreCourses";
import Login from "./Login";
import CorporateTraining from "./CorporateTraining";

const NavBar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#f3f3f3",
      top: 0,
      justifyContent:'space-between'
    }}
  >
    <img src={logo} alt="logo" height={45} />
    <Courses />
    <SearchBar />
    <CorporateTraining/>
    <HireFromUs/>
    <ExploreCourses/>
    <Login/>
  </Stack>
);

export default NavBar;
