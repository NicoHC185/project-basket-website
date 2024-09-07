"use client";

import {
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import MainCard from "components/cards/MainCard";
import { useEffect, useState } from "react";
import DateComponent from "components/DateComponent";
import moment, { Moment } from "moment";
import { findLogo } from "utils";
import { FetchService } from "services/fetch";
import LoadImg from "components/load/Load";

interface IDateScore {
  month: number;
  day: number;
  year: number;
}

interface ITeamScore {
  codTeam: string;
  nameTeam: string;
  score: string;
}

interface IScoreGame {
  teamWinner: ITeamScore;
  teamLoser: ITeamScore;
}

export default function PartidosNBA() {
  const [partidos, setPartidos] = useState<IScoreGame[]>([]);
  const [date, setDate] = useState<Moment | null>(moment());
  const [load, setLoad] = useState(true);

  useEffect(() => {
    handleGetScore(date);
    // eslint-disable-next-line
  }, []);

  const getPartidosByDate = async ({ date }: { date: IDateScore }) => {
    try {
      setLoad(true);
      const { response } = await FetchService.post("score", date);
      setPartidos(response);
    } catch (error) {
      console.log(error);
      throw new Error(`${error}`);
    } finally {
      setLoad(false);
    }
  };

  const handleGetScore = (date: any | Moment) => {
    const day = date.format("DD");
    const month = date.format("MM");
    const year = date.format("YYYY");
    getPartidosByDate({
      date: {
        day,
        month,
        year,
      },
    });
  };

  const handleChangeDate = (date: Moment | null) => {
    if (date) {
      handleGetScore(date);
    }
  };

  return (
    <MainCard title="Games">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DateComponent
            value={date}
            handleChange={(value: Moment | null) => {
              setDate(value);
              handleChangeDate(value);
            }}
          ></DateComponent>
        </Grid>
        <Grid item xs={12}>
          {load ? (
            <LoadImg></LoadImg>
          ) : (
            <TableContainer
              component={Paper}
              sx={{
                backgroundColor: "primary.light",
              }}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={1}>
                      Winner
                    </TableCell>
                    <TableCell align="center" colSpan={1}></TableCell>
                    <TableCell align="center" colSpan={1}>
                      Loser
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {partidos.map((row, idx) => (
                    <TableRow key={idx}>
                      <TableCell align="center">
                        <Stack justifyContent={"center"}>
                          <div>{findLogo(row.teamWinner.codTeam)}</div>
                          <Typography>{row.teamWinner.nameTeam}</Typography>
                        </Stack>
                      </TableCell>
                      <TableCell align="center">
                        <Grid
                          container
                          direction={"column"}
                          justifyContent={"center"}
                          spacing={0.5}
                        >
                          <Grid item>
                            <Typography>{`${row.teamWinner.score} - ${row.teamLoser.score}`}</Typography>
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell align="center">
                        <Stack justifyContent={"center"}>
                          <div>{findLogo(row.teamLoser.codTeam)}</div>
                          <Typography>{row.teamLoser.nameTeam}</Typography>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Grid>
      </Grid>
    </MainCard>
  );
}
