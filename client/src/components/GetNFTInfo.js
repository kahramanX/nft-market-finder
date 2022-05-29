//Redux
import { useDispatch, useSelector } from "react-redux";
import {
  setContract,
  setTokenId,
  setChain,
  setNftInfos,
  setGeneralInfo,
} from "../features/site";

//React
import { useEffect } from "react";

//Axios
import axios from "axios";

function GetNFTInfo() {
  const dispatch = useDispatch();
  const { contract, tokenId, chain } = useSelector((state) => state.site);

  function handleButton() {
    console.log("tıklandı");
  }

  useEffect(() => {
    console.log(window.location.pathname.includes("0x"));
    if (window.location.pathname.length > 10) {
      axios
        .get(`http://localhost:3001${window.location.pathname}`, {
          mode: "no-cors",
        })
        .then((res) => {
          dispatch(setNftInfos(res.data[0].TOKEN));
          dispatch(setGeneralInfo(res.data[0].mainInfo));
        });
    }
  }, [dispatch]);

  return (
    <>
      <div className="input-container">
        <form
          action={`http://localhost:3001/token/${chain}/${contract}/${tokenId}`}
          method="POST"
        >
          <div className="inputs">
            <input
              name="contract"
              onChange={(e) => dispatch(setContract(e.target.value))}
              className="get-contract"
              type="text"
              placeholder="Contract Here"
            />
            <input
              name="tokenID"
              onChange={(e) => dispatch(setTokenId(e.target.value))}
              className="get-token-id"
              type="text"
              placeholder="Token ID here"
            />
            <select
              name="chain"
              onChange={(e) => dispatch(setChain(e.target.value))}
              className="select-network"
              defaultValue={"default"}
            >
              <option value={"default"} disabled>
                select...
              </option>
              <option value={"avalanche"}>Avalanche</option>
              <option value={"bsc"}>BNB</option>
              <option value={"eth"}>Ethereum</option>
              <option value={"polygon"}>Polygon</option>
              <option value={"sol"}>Solana</option>
            </select>
          </div>
          <div className="search-btn-container">
            <button type="submit" onSubmit={(e) => handleButton(e)}>
              Search on marketplaces 👀
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default GetNFTInfo;
