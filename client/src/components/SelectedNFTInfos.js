//Redux
import { useSelector } from "react-redux";

function SelectedNFTInfos() {
  const { generalInfo, nftInfos } = useSelector((state) => state.site);

  const conditionForImageUrl = () => {
    if (nftInfos === "") {
      return "there is no image";
    }
    if (nftInfos[0].imgUrl.includes("https")) {
      return nftInfos[0].imgUrl;
    }
    if (nftInfos[1].imgUrl.includes("https")) {
      return nftInfos[1].imgUrl;
    }
    if (nftInfos[2].imgUrl.includes("https")) {
      return nftInfos[2].imgUrl;
    }
    if (nftInfos[3].imgUrl.includes("https")) {
      return nftInfos[3].imgUrl;
    }
    return "there is no image bro";
  };

  const conditionForName = () => {
    if (nftInfos === "") {
      return "there is no image";
    }
    if (
      !nftInfos[0].name.includes("page-not-found") ||
      !nftInfos[0].name.includes("")
    ) {
      return nftInfos[0].name;
    }
    if (
      !nftInfos[1].name.includes("page-not-found") ||
      !nftInfos[1].name.includes("")
    ) {
      return nftInfos[1].name;
    }
    if (
      !nftInfos[2].name.includes("page-not-found") ||
      !nftInfos[2].name.includes("")
    ) {
      return nftInfos[2].name;
    }
    if (
      !nftInfos[3].name.includes("page-not-found") ||
      !nftInfos[3].name.includes("")
    ) {
      return nftInfos[3].name;
    }
    return "there is no NFT bro";
  };
  //  //dataFromMarket ? dataFromMarket[0].imgUrl : "zoort"
  return (
    <div className="NFT-infos-container">
      <img src={conditionForImageUrl()} alt="NFT img" />

      <ul className="selected-infos">
        <li>
          <span className="info-title">Name: </span> {conditionForName()}
        </li>
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
