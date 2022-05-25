//React
import { useEffect } from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { setThemeMode } from "../features/site";
function Header() {
  const { themeMode } = useSelector((state) => state.site);
  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelector("body").dataset.theme = themeMode;
  }, [themeMode]);

  return (
    <header>
      <div>NFT Searcher 🛰️</div>
      <div>Hello 👋</div>
      <input
        type={"checkbox"}
        onChange={(e) => {
          if (e.target.checked) {
            dispatch(setThemeMode("dark"));
          } else {
            dispatch(setThemeMode("light"));
          }
        }}
      />
    </header>
  );
}

export default Header;
