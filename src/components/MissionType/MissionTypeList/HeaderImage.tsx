import { Image } from "react-native";

const imageSource: Record<string, any> = {
  "*": require("../../../../assets/grids-template/type/5.webp"),
  BOUNTY: require("../../../../assets/grids-template/type/1.webp"),
  DEBT: require("../../../../assets/grids-template/type/4.webp"),
  GANG: require("../../../../assets/grids-template/type/3.webp"),
  "?": require("../../../../assets/grids-template/type/2.webp"),
};

export const HeaderImage = ({ sym }: { sym: string }) => {
  const defaultImage = require("../../../../assets/grids-template/type/6.webp");
  const source = imageSource[sym] || defaultImage;

  return (
    <Image
      source={source}
      style={{ width: "100%", height: 220, backgroundColor: "#00000033" }}
      resizeMode="cover"
    />
  );
};
