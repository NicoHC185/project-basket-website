"use client";
import { Grid, Stack, Typography } from "@mui/material";
import MainCard from "components/cards/MainCard";
import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import LoadImg from "components/load/Load";
import { axiosService } from "services/axios";
import { useDispatch, useSelector } from "react-redux";
import { setValuesTeams } from "store/slice/teams";
import { RootState } from "store";
import { IConference } from "interfaces";

const Teams = () => {
  const { conferences } = useSelector((state: RootState) => state.teams);
  const dispatch = useDispatch();
  const [loadTeams, setLoadTeams] = useState(true);

  useEffect(() => {
    getTeams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTeams = () => {
    try {
      handleGetTeam();
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleGetTeam = async () => {
    setLoadTeams(true);
    console.log(conferences);
    if (conferences.length > 0) {
      setLoadTeams(false);
    } else {
      const { data } = await axiosService.get(`/teams`);
      dispatch(setValuesTeams({ key: "conferences", value: data.response }));
      setLoadTeams(false);
    }
  };

  return (
    <MainCard title="Teams">
      {loadTeams ? (
        <LoadImg></LoadImg>
      ) : (
        conferences?.map((conference: IConference, idx: number) => (
          <Stack key={idx} alignItems={"flex-start"} sx={{ mb: "24px" }}>
            <Typography variant="h4" sx={{ my: "24px" }}>
              {conference.name}
            </Typography>
            <Grid
              container
              spacing={"12px"}
              width={"100%"}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              {conference.teams.map((team, idx) => (
                <Grid item key={team.code} xs={2}>
                  <TeamCard team={team} position={idx + 1}></TeamCard>
                </Grid>
              ))}
            </Grid>
          </Stack>
        ))
      )}
    </MainCard>
  );
};

export default Teams;
