import {
    Navbar,
    Typography,
    Button,
  } from "@material-tailwind/react";
const NavBar = () => {
    return (
        <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto from-blue-gray-900 to-blue-gray-800 px-4 py-3"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Tv-Shows
        </Typography>
          <Typography className="space-x-6">
            <a href="/">Home</a>
            <a href="/">Page</a>
            <a href="/">About</a>
          </Typography>
          <Button
            size="sm"
            color="white"
            className="rounded"
          >
            Search
          </Button>
        </div>
    </Navbar>
    );
};

export default NavBar;