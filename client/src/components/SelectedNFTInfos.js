//Redux
import { useSelector } from "react-redux";

function SelectedNFTInfos() {
  const { contract, tokenId, chain, dataFromMarket } = useSelector(
    (state) => state.site
  );
  //  //dataFromMarket ? dataFromMarket[0].imgUrl : "zoort"
  return (
    <div className="NFT-infos-container">
      <img
        src={
          dataFromMarket
            ? dataFromMarket[0].imgUrl ||
              dataFromMarket[1].imgUrl ||
              dataFromMarket[2].imgUrl
            : "anan"
        }
        alt="NFT img"
      />

      <ul className="selected-infos">
        <li>
          <span className="info-title">Contract:</span> {contract}
        </li>
        <li>
          <span className="info-title">Token ID:</span> {tokenId}
        </li>
        <li>
          <span className="info-title">Network:</span> {chain}
        </li>
      </ul>
    </div>
  );
}

export default SelectedNFTInfos;
