//Redux
import { useSelector } from "react-redux";

function SelectedNFTInfos() {
  const { contract, tokenId, networkName } = useSelector(
    (state) => state.nftInfos
  );

  return (
    <div className="NFT-infos-container">
      <img
        src="https://lh3.googleusercontent.com/qsyptaf_Tsm4KhHKjKMRuA8aDYfGGz-GXmAaVkrc2g56AoRIR_9OiSeqIOl5F6Eb_oYE-IqjASl7OvfzaAEfmxw7Upk-NOTT-TyqRA=w600"
        alt="NFT img"
      />

      <ul>
        <li>Contract: {contract}</li>
        <li>Token ID: {tokenId}</li>
        <li>Network: {networkName}</li>
      </ul>
    </div>
  );
}

export default SelectedNFTInfos;