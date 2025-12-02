import * as Haptics from "expo-haptics";
import { useFocusEffect, useRouter } from "expo-router";

import { tournamentsActions } from "@/core/tournaments/actions/tournaments-actions";
import { useCustomForm } from "@/hooks/useCustomForm";
import { useCallback, useEffect, useState } from "react";

export const useOurTournaments = () => {
  const navigate = useRouter();

  const { control, handleSubmit, isSubmitting, isDisabled } = useCustomForm();

  const [viewSelected, setViewSelected] = useState("published");
  const [modalVisible, setModalVisible] = useState(false);
  const [ourTournaments, setOurTournaments] = useState([]);

  const handleSearch = async (payload: string) => {
    try {
      const filter = {};
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const handleGetTournament = async () => {
    try {
      const query = {
        status: `${viewSelected}`,
        selectFields: "status organizer name",
      };
      // const response = await privateFetcher.instance.get(`/own-tournaments?limit=10&offset=0&status=draft&search=futbol`)
      const response = await tournamentsActions.getOwnTournamentsAction(query);
      console.log("response  here coma si:>> ", response);
      if (response.length > 0) {
        console.log("here");
        setOurTournaments(response);
      }
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const handdleChangeView = (type: string) => {
    setViewSelected(type);
  };

  const openModal = () => {
    setModalVisible(!modalVisible);
  };

  useFocusEffect(
    useCallback(() => {
      handleGetTournament();
    }, [viewSelected])
  );

  useEffect(() => {
    console.log("ourTournaments :>> ", ourTournaments);
  }, [ourTournaments]);

  return {
    //Props
    viewSelected,
    modalVisible,
    ourTournaments,

    //Methods
    control,
    handleSubmit,
    isSubmitting,
    isDisabled,
    navigate,
    Haptics,
    handdleChangeView,
    openModal,
  };
};
