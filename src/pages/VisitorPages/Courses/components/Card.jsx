import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
  } from "@material-tailwind/react";
  import {
    BanknotesIcon,
    StarIcon,
    HeartIcon,
    WifiIcon,
    HomeIcon,
    TvIcon,
    FireIcon,
  } from "@heroicons/react/24/solid";
   
  export default function CourseCard() {
    return (
      <Card className="w-full max-w-full mt-[-50px] shadow-lg">
        <CardHeader floated={false} color="blue-gray">
          <img
            src="https://allcode.com/wp-content/uploads/2021/02/Group-169-3.png"
            alt="course"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          <IconButton
            size="sm"
            color="red"
            variant="text"
            className="!absolute top-4 right-4 rounded-full"
          >
            <HeartIcon className="h-6 w-6" />
          </IconButton>
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              AWS Articheture 
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
              5.0
            </Typography>
          </div>
          <Typography color="gray">
          Build, Deploy, and Manage Websites, Apps or Processes On AWS' Secure, Reliable Network. Sign Up for a Free Account & Experience AWS' Secure,
          </Typography>
          <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
            <Tooltip content="$129 per night">
              <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                <BanknotesIcon className="h-5 w-5" />
              </span>
            </Tooltip>
            <Tooltip content="Free wifi">
              <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                <WifiIcon className="h-5 w-5" />
              </span>
            </Tooltip>
            <Tooltip content="2 bedrooms">
              <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                <HomeIcon className="h-5 w-5" />
              </span>
            </Tooltip>
            <Tooltip content={`65" HDTV`}>
              <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                <TvIcon className="h-5 w-5" />
              </span>
            </Tooltip>
            <Tooltip content="Fire alert">
              <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                <FireIcon className="h-5 w-5" />
              </span>
            </Tooltip>
            <Tooltip content="And +20 more">
              <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                +20
              </span>
            </Tooltip>
          </div>
        </CardBody>
        <CardFooter className="pt-3">
          <Button size="lg" className="bg-primarybg shadow-none hover:shadow-none  drop-shadow-none " fullWidth={true}>
            Reserve
          </Button>
        </CardFooter>
      </Card>
    );
  }