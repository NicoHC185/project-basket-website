import Logos, { ILogoTeam } from "icons";

export const findLogo = (code: string) => {
  return Logos.find((el: ILogoTeam) => el.code === code)?.logo;
};
