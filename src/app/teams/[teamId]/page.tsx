"use client";

import { Stack, Typography } from "@mui/material";
import MainCard from "components/cards/MainCard";
import { IInfoPlayer, IInfoTeam } from "interfaces";
import moment from "moment";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import TableRoster from "./TableRoster";
import SubCard from "components/cards/SubCard";
import LoadImg from "components/load/Load";

const url = process.env.NEXT_PUBLIC_URL ?? "http://localhost:8000/api";

const Team = () => {
  const { teamId } = useParams();
  const [infoTeam, setInfoTeam] = useState<IInfoTeam | null>(null);
  const [roster, setRoster] = useState<IInfoPlayer[]>([]);
  const [load, setLoad] = useState(true);

  const bodyPost = {
    codeTeam: String(teamId).toUpperCase(),
    year: moment().format("YYYY"),
  };

  useEffect(() => {
    Promise.all([getInfoTeam(), getRoster()]);
    // eslint-disable-next-line
  }, []);

  const getRoster = async () => {
    const { response } = await fetchRoster();
    setRoster(response);
    setLoad(false);
  };

  const getInfoTeam = async () => {
    const { response } = await fetchInfoTeam();
    setInfoTeam(response);
    setLoad(false);
  };

  const fetchInfoTeam = () => {
    return new Promise<{ response: IInfoTeam }>(
      async (resolve: Function, reject) => {
        try {
          const res = await fetch(`${url}/team`, {
            method: "POST",
            body: JSON.stringify(bodyPost),
          }).then((res) => res.json());
          resolve(res);
        } catch (err) {
          reject(err);
        }
      }
    );
  };

  const fetchRoster = () => {
    return new Promise<{ response: IInfoPlayer[] }>(
      async (resolve: Function, reject) => {
        try {
          const res = await fetch(`${url}/team/roster`, {
            method: "POST",
            body: JSON.stringify(bodyPost),
          }).then((res) => res.json());
          resolve(res);
        } catch (err) {
          reject(err);
        }
      }
    );
  };

  return (
    <MainCard title={infoTeam?.name}>
      {load ? (
        <LoadImg></LoadImg>
      ) : (
        <>
          <SubCard title="Info team">
            <Stack>
              <Typography>Record: {infoTeam?.record}</Typography>
              <Typography>Coach: {infoTeam?.coach}</Typography>
              <Typography>Executive: {infoTeam?.executive}</Typography>
            </Stack>
          </SubCard>
          <Typography variant="h3" sx={{ my: 3 }}>
            Roster
          </Typography>
          <TableRoster data={roster}></TableRoster>
        </>
      )}
    </MainCard>
  );
};

export default Team;
