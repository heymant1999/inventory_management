import { Divider, Stack, Switch, Typography } from "@mui/material";
import React from "react";
import { IoExitOutline } from "react-icons/io5";
import { useDispatch, } from "react-redux";
import { switchRole } from "../store/actions/roleActions";
const label = { inputProps: { "aria-label": "Color switch demo" } };

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="text-gray-300 border-b border-neutral-700">
      <div className="py-2 flex justify-end px-4">
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>admin</Typography>
          <Switch
            {...label}
            defaultChecked
            color="success"
            onChange={() => dispatch(switchRole())}
          />
          <Typography>user</Typography>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            className="bg-neutral-700"
          />
          <IoExitOutline />
        </Stack>
      </div>
    </div>
  );
};

export default NavBar;
