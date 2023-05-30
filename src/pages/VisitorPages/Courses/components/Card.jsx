import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { Img_ } from "utils/common.utils";
import { useNavigate } from "react-router-dom";
export default function CourseCard({ props }) {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <Card className="w-full max-w-full mt-[-50px] shadow-lg">
        <CardHeader floated={false} color="blue-gray">
          <img
          className="w-full bg-cover"
            src={Img_(props?.card_img)}
            alt="course "
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          <IconButton
            size="sm"
            color="red"
            variant="text"
            className="!absolute top-4 right-4 rounded-full"
          >
          </IconButton>
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray  " className="font-semibold  lg:text-2xl md:text-xl text-base">
              {props?.card_title}
            </Typography>
          </div>
          <Typography color="gray">
            {props?.card_des}
          </Typography>
          <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          </div>
        </CardBody>
        <CardFooter className="pt-3">
          <Button onClick={()=>navigate('/Apply')} size="lg" className="bg-primarybg shadow-none hover:shadow-none  drop-shadow-none " fullWidth={true}>
            {props?.card_btn_text ?? 'Reserve'}
          </Button>
        </CardFooter>
      </Card>
    </React.Fragment>
  );
}