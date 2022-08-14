import { useState, useEffect } from "react";

import Axios, { CancelTokenSource } from "axios";
import domain from "../util/domain";
import { iNotification, Store } from "react-notifications-component";

const defaultSettings: iNotification = {
  container: "bottom-center",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 3000,
    onScreen: true,
  },
  insert: "top",
};

export default (endpoit: string, params: {}, dependecies: []): any => {
  let isFetching = false;
  const [data, setData] = useState("loading...");

  const getAll = async (source: CancelTokenSource) => {
    isFetching = true;
    Store.removeAllNotifications();
    Store.addNotification({
      title: "Connecting to Server",
      message: "Trying for 3 seconds to fetch data",
      type: "info",
      ...defaultSettings,
    });
    const url = domain.toString() + endpoit;
    debugger;
    const promise = Axios.get(url, {
      params: { ...params, window: window.toString() },
      cancelToken: source.token,
    });
    promise.then((res) => {
      setData(res.data);
      Store.removeAllNotifications();
      Store.addNotification({
        title: "Success",
        message: "Data was fetched from the server",
        type: "success",
        ...defaultSettings,
      });
      isFetching = false;
    });
    promise.catch((err) => {
      if (err.message !== "canceled") {
        Store.removeAllNotifications();
        Store.addNotification({
          title: "Error",
          message: err.message,
          type: "danger",

          ...defaultSettings,
        });
      }
      isFetching = false;
    });
  };

  useEffect(() => {
    const source = Axios.CancelToken.source();
    getAll(source);
    return () => {
      setTimeout(() => {
        if (isFetching) {
          source.cancel();
          Store.removeAllNotifications();
          Store.addNotification({
            title: "Error!",
            message: "Connection to server Timeout",
            type: "danger",
            ...defaultSettings,
          });
          isFetching = false;
        }
      }, 3000);
    };
  }, [...dependecies]);
  return data;
};
