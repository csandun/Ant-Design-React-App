import {
    CREATE_TUTORIAL,
    RETRIEVE_TUTORIALS,
    UPDATE_TUTORIAL,
    DELETE_TUTORIAL,
    DELETE_ALL_TUTORIALS,
  } from "./types";
  
  import AccountDetailsService from "../services/TutorialService";
  
  export const createTutorial = (title, description) => async (dispatch) => {
    try {
      const res = await AccountDetailsService.create({ title, description });
  
      dispatch({
        type: CREATE_TUTORIAL,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const retrieveTutorials = () => async (dispatch) => {
    try {
      const res = await AccountDetailsService.getAll();
      debugger;
      dispatch({
        type: RETRIEVE_TUTORIALS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const updateTutorial = (id, data) => async (dispatch) => {
    try {
      const res = await AccountDetailsService.update(id, data);
  
      dispatch({
        type: UPDATE_TUTORIAL,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const deleteTutorial = (id) => async (dispatch) => {
    try {
      await AccountDetailsService.remove(id);
  
      dispatch({
        type: DELETE_TUTORIAL,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const deleteAllTutorials = () => async (dispatch) => {
    try {
      const res = await AccountDetailsService.removeAll();
  
      dispatch({
        type: DELETE_ALL_TUTORIALS,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const findTutorialsByTitle = (title) => async (dispatch) => {
    try {
      const res = await AccountDetailsService.findByTitle(title);
  
      dispatch({
        type: RETRIEVE_TUTORIALS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };