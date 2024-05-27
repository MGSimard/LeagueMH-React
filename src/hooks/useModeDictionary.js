export const useModeDictionary = (queueId) => {
  // Queue IDs https://static.developer.riotgames.com/docs/lol/queues.json
  switch (queueId) {
    case 0:
      return "Custom";
    case 72:
    case 73:
      return "Showdown";
    case 75:
    case 98:
      return "Hexakill";
    case 76:
    case 1900:
      return "URF";
    case 78:
    case 1020:
      return "One For All";
    case 83:
      return "Co-op URF";
    case 100:
      return "Butcher's Bridge";
    case 310:
      return "Nemesis";
    case 313:
      return "Black Market Brawlers";
    case 317:
      return "Definitely Not Dominion";
    case 325:
      return "All Random (SR)";
    case 400:
      return "Draft Pick";
    case 420:
      return "Ranked";
    case 430:
      return "Blind Pick";
    case 440:
      return "Ranked Flex";
    case 450:
      return "ARAM";
    case 490:
      return "Quickplay";
    case 600:
      return "Blood Hunt";
    case 610:
      return "Dark Star";
    case 700:
      return "Clash";
    case 720:
      return "ARAM Clash";
    case 830:
    case 840:
    case 850:
      return "Bots";
    case 900:
    case 1010:
      return "ARURF";
    case 910:
      return "Ascension";
    case 920:
      return "Poro King";
    case 940:
      return "Nexus Siege";
    case 950:
    case 960:
      return "Doom Bots";
    case 980:
    case 990:
      return "Star Guardian";
    case 1000:
      return "PROJECT";
    case 1030:
    case 1040:
    case 1050:
    case 1060:
    case 1070:
      return "Odyssey";
    case 1300:
      return "Nexus Blitzz";
    case 1400:
      return "Ultimate Spellbook";
    case 1700:
    case 1710:
      return "Arena";
    case 2000:
    case 2010:
    case 2020:
      return "Tutorial";
    default:
      return "Featured";
  }
};
