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

//Formik
import { Formik } from "formik";
import * as Yup from "yup";

function GetNFTInfo() {
  const dispatch = useDispatch();
  const { contractRedux, tokenIdRedux, chainRedux } = useSelector(
    (state) => state.site
  );

  function handleButton() {
    console.log("tıklandı");
  }

  useEffect(() => {
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
    <div className="input-container">
      <Formik
        initialValues={{
          contract: "",
          tokenid: "",
          chain: "",
        }}
        validationSchema={Yup.object({
          contract: Yup.string().required("Cannot be blank"),
          tokenid: Yup.string().required("Cannot be blank"),
          chain: Yup.string()
            .required("Cannot be blank")
            .oneOf(["eth", "avalanche", "polygon", "bsc"]),
        })}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          handleReset,
          dirty,
          isSubmitting,
          touched,
        }) => {
          return (
            <form
              action={`http://localhost:3001/token/${values.chain}/${values.contract}/${values.tokenid}`}
              method="POST"
              onSubmit={(values, { resetForm, setSubmitting }) => {
                console.log(values);
                resetForm();
                setSubmitting(false);
              }}
            >
              {console.log(values)}
              <div className="inputs">
                <input
                  name="contract"
                  onChange={handleChange}
                  className="get-contract"
                  type="text"
                  placeholder="Contract Here"
                  values={values.contract}
                  id="contract"
                />

                {errors.contract && touched.contract && (
                  <div>{errors.contract}</div>
                )}

                <input
                  name="tokenid"
                  onChange={handleChange}
                  className="get-token-id"
                  type="text"
                  placeholder="Token ID here"
                  values={values.tokenid}
                  id="tokenid"
                />
                {errors.tokenid && touched.tokenid && (
                  <div>{errors.tokenid}</div>
                )}
                <select
                  name="chain"
                  onChange={handleChange}
                  className="select-network"
                  defaultValue={"default"}
                  values={values.chain}
                  id="chain"
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

                {errors.chain && touched.chain && <div>{errors.chain}</div>}
              </div>
              <div className="search-btn-container">
                <button
                  disabled={!dirty || isSubmitting}
                  type="submit"
                  onSubmit={(e) => handleButton(e)}
                >
                  Search on marketplaces 👀
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}

export default GetNFTInfo;
