import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const SearchComponent = ({ location }) => {
  const navigate = useNavigate();

  const regionRef = useRef(null);
  const riotIdRef = useRef(null);
  const riotTagRef = useRef(null);

  const handleSearch = () => {
    const paramRegion = regionRef.current.value;
    const paramRiotId = riotIdRef.current.value;
    const paramRiotTag = riotTagRef.current.value;

    if (!paramRegion || !paramRiotId || !paramRiotTag) {
      alert("Field cannot be empty.");
    } else {
      navigate(`/summoner/${paramRegion}/${paramRiotId}-${paramRiotTag}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <fieldset className={`sumSearch sumSearch-${location}`}>
      <label className="ssOne">
        <h3>Region</h3>
        <select ref={regionRef} defaultValue={""} onKeyDown={handleKeyDown}>
          <option value="" disabled>
            . . .
          </option>
          <option value="na">North America</option>
          <option value="euw">Europe West</option>
          <option value="eun">Europe Nordic &amp; East</option>
          <option value="kr">Korea</option>
          <option value="jp">Japan</option>
          <option value="oce">Oceania</option>
          <option value="br">Brazil</option>
          <option value="lan">LAN</option>
          <option value="las">LAS</option>
          <option value="ru">Russia</option>
          <option value="tr">Türkiye</option>
          <option value="sg">Singapore</option>
          <option value="ph">Phillippines</option>
          <option value="tw">Taiwan</option>
          <option value="vn">Vietnam</option>
          <option value="th">Thailand</option>
        </select>
      </label>
      <div className="ssTwo-Three">
        <label className="ssTwo">
          <h3>Riot ID</h3>
          <input type="text" placeholder="Riot ID..." ref={riotIdRef} onKeyDown={handleKeyDown} />
        </label>
        <label className="ssThree">
          <h3>Tag</h3>
          <div className="rIdTag_inputContainer">
            #
            <input type="text" placeholder="Tag..." ref={riotTagRef} maxLength={5} onKeyDown={handleKeyDown} />
          </div>
        </label>
      </div>

      <button type="submit" onClick={handleSearch}>
        Fetch
      </button>
    </fieldset>
  );
};
