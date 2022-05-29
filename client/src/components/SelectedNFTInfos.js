//Redux
import { useSelector } from "react-redux";

function SelectedNFTInfos() {
  const { generalInfo, nftInfos } = useSelector((state) => state.site);
  //  //dataFromMarket ? dataFromMarket[0].imgUrl : "zoort"
  return (
    <div className="NFT-infos-container">
      <img
        src={
          nftInfos === ""
            ? "there is no image"
            : nftInfos[0].imgUrl || nftInfos[1].imgUrl || nftInfos[2].imgUrl
        }
        alt="NFT img"
      />

      <ul className="selected-infos">
        <li>
          <span className="info-title">Contract: </span> {generalInfo.contract}
        </li>
        <li>
          <span className="info-title">Token ID: </span> {generalInfo.tokenID}
        </li>
        <li>
          <span className="info-title">Network: </span>
          {generalInfo.chain.toUpperCase()}
        </li>
      </ul>
    </div>
  );
}

export default SelectedNFTInfos;
