export const useRegionDictionary = (regionPrefix) => {
  switch (regionPrefix.toLowerCase()) {
    //AMERICAS
    case "na":
      return ["NA1", "americas", "North America"];
    case "br":
      return ["BR1", "americas", "Brazil"];
    case "lan":
      return ["LA1", "americas", "Latin America North"];
    case "las":
      return ["LA2", "americas", "Latin America South"];
    //ASIA
    case "kr":
      return ["KR", "asia", "Korea"];
    case "jp":
      return ["JP1", "asia", "Japan"];
    //EUROPE
    case "euw":
      return ["EUW1", "europe", "Europe West"];
    case "eun":
      return ["EUN1", "europe", "Europe Nordic & East"];
    case "tr":
      return ["TR1", "europe", "Türkiye"];
    case "ru":
      return ["RU", "europe", "Russia"];
    //SEA
    case "oce":
      return ["OC1", "sea", "Oceania"];
    case "sg":
      return ["SG2", "sea", "Singapore"];
    case "ph":
      return ["PH2", "sea", "Phillippines"];
    case "tw":
      return ["TW2", "sea", "Taiwan"];
    case "vn":
      return ["VN2", "sea", "Vietnam"];
    case "th":
      return ["TH2", "sea", "Thailand"];
    default:
      alert("Invalid Region!");
      return;
  }
};

export const reverseDictionary = (devId) => {
  switch (devId.toLowerCase()) {
    //AMERICAS
    case "na1":
      return "na";
    case "br1":
      return "br";
    case "la1":
      return "lan";
    case "la2":
      return "las";
    //ASIA
    case "kr":
      return "kr";
    case "jp1":
      return "jp";
    //EUROPE
    case "euw1":
      return "euw";
    case "eun1":
      return "eun";
    case "tr1":
      return "tr";
    case "RU":
      return "ru";
    //SEA
    case "oc1":
      return "oce";
    case "sg2":
      return "sg";
    case "ph2":
      return "ph";
    case "tw2":
      return "tw";
    case "vn2":
      return "vn";
    case "th2":
      return "th";
    default:
      alert("Invalid Region!");
      return;
  }
};
