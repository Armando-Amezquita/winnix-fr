import { tournamentAdapter } from "../tournaments.adapter";

// export interface AuthUser {
//   email: string;
//   accessToken: string;
//   refreshToken: string;
// }

// const mapAuthResponse = (data: any): AuthUser => ({
//   email: data.email,
//   accessToken: data.accessToken,
//   refreshToken: data.refreshToken,
// });
export interface OwnTournaments {
  __v: number;
  _id: string;
  address: string;
  city: string;
  country: string;
  createdAt: Date;
  currentParticipants: number;
  deletedAt: null;
  deletedBy: null;
  description: string;
  entryFee: number;
  incremental: number;
  isActive: boolean;
  isTemplate: boolean;
  judges: string[];
  location: string;
  maxParticipants: number;
  maxTeams: number;
  name: string;
  organizer: Organizer;
  participants: any[];
  prizePool: number;
  registrationEndDate: Date;
  registrationStartDate: Date;
  requirements: string[];
  rules: string[];
  sport: string;
  status: string;
  teams: any[];
  tournamentEndDate: Date;
  tournamentStartDate: Date;
  type: string;
  updatedAt: Date;
}

export interface Organizer {
  _id: string;
  email: string;
  username: string;
}

export const tournamentsActions = {
  getOwnTournamentsAction: async (query: any): Promise<any | null> => {
    //   getOwnTournamentsAction: async (email: string, password: string): Promise<any | null> => {
    try {
      console.log("llega aqui");
      const data = await tournamentAdapter.getOwnTournaments(query);
      console.log("data :>> ", data);
      console.log(data);
      return data.data;
      //   return mapAuthResponse(data);
    } catch (error) {
      console.error("authLogin error :>> ", error);
      return null;
    }
  },

  //   checkStatus: async (): Promise<AuthUser | null> => {
  //     try {
  //       const data = await AuthAdapter.refreshToken();
  //       return data ? mapAuthResponse(data) : null;
  //     } catch (error) {
  //       console.error("authCheckStatus error :>> ", error);
  //       return null;
  //     }
  //   },

  //   logout: async () => {
  //     await AuthAdapter.logout();
  //   },

  //   signUp: async (params: any) => {
  //     try {
  //       const data = await AuthAdapter.register(params);
  //       return mapAuthResponse(data);
  //     } catch (error) {
  //       console.error("authLogin error :>> ", error);
  //       return null;
  //     }
  //   },
};
