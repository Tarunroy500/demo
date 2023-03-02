import { loaduser, errors, signout, loadblogs } from "./UserSlice";
import axios from "../axios";
import Axios from "axios";

export const asyncsignup = (newuser) => async (dispatch) => {
  try {
    // console.log(newuser);
    const { data } = await Axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${newuser}`
    );
    console.log(data);
    const res = await axios.post("/signup", {
      name: data.name,
      username: data.email,
      email: data.email,
      password: data.id,
    });
    dispatch(loaduser(res.data.user));
  } catch (err) {
    console.log(err);
    dispatch(errors(err.response.data.message));
  }
};

export const asyncsignin = (newuser) => async (dispatch) => {
  try {
    // console.log(newuser);
    const { data } = await axios.post("/signin", newuser);
    dispatch(loaduser(data.user));
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
};

export const asyncloaduser = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/loaduser");
    //   console.log("loaduser action>>>>>");
    dispatch(loaduser(data.user));
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
};

export const asyncsignout = () => async (dispatch) => {
  try {
    await axios.get("/signout");
    dispatch(signout());
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
};

export const asyncloadblogs = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/blogs");
    // console.log("loaduser action>>>>>", data);
    // console.log(data);
    dispatch(loadblogs(data.blogs));
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
};

export const asynccreateblog = (blog) => async (dispatch) => {
  try {
    await axios.post("/create-stories", blog);
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
};
