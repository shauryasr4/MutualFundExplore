import { urlBuilder } from "../utils/utils";

const getMutualFundsList = () => {
  return fetch(urlBuilder("funds.json")).then((response) => response.json());
};

const getMututalFundDetails = (objectId) => {
  if (!objectId) throw new Error("Fund id needs to be specified");
  return fetch(urlBuilder(`funds/${objectId}.json`)).then((response) =>
    response.json()
  );
};

export { getMutualFundsList, getMututalFundDetails };
