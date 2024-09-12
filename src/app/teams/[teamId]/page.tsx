"use client";

import { Stack, Typography } from "@mui/material";
import MainCard from "components/cards/MainCard";
import { IInfoPlayer, IInfoTeam } from "interfaces";
import moment from "moment";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import TableRoster from "./TableRoster";
import SubCard from "components/cards/SubCard";
import LoadImg from "components/load/Load";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { setValuesTeams } from "store/slice/teams";
import ErrorViewComponent from "components/ErrorView";

const url = process.env.NEXT_PUBLIC_URL ?? "http://localhost:8000/api";

const Team = () => {
  const { teamId } = useParams();
  const dispatch = useDispatch();
  const { team } = useSelector((state: RootState) => state.teams);
  const [load, setLoad] = useState(true);
  const [errorLoad, setErrorLoad] = useState(false);

  const bodyPost = {
    codeTeam: String(teamId).toUpperCase(),
    year: moment().format("YYYY"),
  };

  const infoTeam = useMemo(() => {
    return team.infoTeam;
  }, [team]);

  const roster = useMemo(() => {
    return team.roster;
  }, [team]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = () => {
    if (team.teamId === teamId) {
      setLoad(false);
    } else {
      Promise.all([getInfoTeam(), getRoster()])
        .then((response) => {
          const [infoTeam, roster] = response;
          dispatch(
            setValuesTeams({
              key: "team",
              value: {
                teamId,
                infoTeam,
                roster,
              },
            })
          );
        })
        .catch(() => {
          setErrorLoad(true);
        })
        .finally(() => {
          setLoad(false);
        });
    }
  };

  const getRoster = async () => {
    const { response } = await fetchRoster();
    return response;
  };

  const getInfoTeam = async () => {
    const { response } = await fetchInfoTeam();
    return response;
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
      ) : errorLoad ? (
        <ErrorViewComponent></ErrorViewComponent>
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
