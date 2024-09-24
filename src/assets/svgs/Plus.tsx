import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const Plus = (props: SvgProps) => {
  return (
    <Svg width="19" height="18" viewBox="0 0 19 18" fill="none" {...props}>
      <Path
        d="M0.730957 9.00684C0.730957 9.44678 1.10449 9.81201 1.54443 9.81201H8.6582V16.9258C8.6582 17.3657 9.02344 17.7393 9.46338 17.7393C9.91162 17.7393 10.2769 17.3657 10.2769 16.9258V9.81201H17.3906C17.8306 9.81201 18.2041 9.44678 18.2041 9.00684C18.2041 8.55859 17.8306 8.19336 17.3906 8.19336H10.2769V1.07959C10.2769 0.639648 9.91162 0.266113 9.46338 0.266113C9.02344 0.266113 8.6582 0.639648 8.6582 1.07959V8.19336H1.54443C1.10449 8.19336 0.730957 8.55859 0.730957 9.00684Z"
        fill="#F4B657"
      />
    </Svg>
  );
};
