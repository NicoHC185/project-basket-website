"use client";
import { Grid, Stack, Typography } from "@mui/material";
import MainCard from "components/cards/MainCard";
import { IConference } from "interfaces";
import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import LoadImg from "components/load/Load";
import { axiosService } from "services/axios";

const Teams = () => {
  const [conferences, setConferences] = useState<IConference[]>([]);
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
    const { data } = await axiosService.get(`/teams`)
    setConferences(data.response)
    setLoadTeams(false)
  };

  return (
    <MainCard title="Teams">
      {loadTeams ? (
        <LoadImg></LoadImg>
      ) : (
        conferences?.map((conference, idx) => (
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
