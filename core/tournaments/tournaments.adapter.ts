// import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import { privateFetcher } from "../api/api.config";

export const tournamentAdapter = {
  getOwnTournaments: async (query: any) => {
    console.log("query :>> ", query);
    // console.log("payload :>> ", payload);
    // const response = await privateFetcher.instance.get(`/tournaments/organizer/${}`);
    const response = await privateFetcher.instance.post(`/tournaments/own-tournaments`, query);
    // const response = await privateFetcher.instance.get(`/own-tournaments?limit=10&offset=0&status=draft&search=futbol`)
    console.log("response here:>> ", response);

    return response.data;
  },
};
