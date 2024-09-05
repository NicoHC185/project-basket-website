import { createSlice } from "@reduxjs/toolkit";
import { IConference, IInfoPlayer, IInfoTeam } from "interfaces";

// Define a type for the slice state
export interface ITeams {
  conferences: IConference[];
  team: {
    teamId: string;
    infoTeam: IInfoTeam | null;
    roster: IInfoPlayer[];
  };
}

// Define the initial state using that type
const initialState: ITeams = {
  conferences: [],
  team: {
    teamId: '',
    infoTeam: null,
    roster: [],
  },
};

export const teams = createSlice({
  name: "teams",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setValuesTeams(state, action) {
      const { key, value }: { key: "conferences" | "team"; value?: any } =
        action.payload;
      state[key] = value;
    },
  },
});

export const { setValuesTeams } = teams.actions;

export default teams.reducer;
