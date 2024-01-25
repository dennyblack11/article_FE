import { TbDashboard } from "react-icons/tb";
import { CiPalette, CiText } from "react-icons/ci";

import { useState } from "react";
import { changeToggleMenu } from "../../global/reduxState";
import { useDispatch } from "react-redux";

// const dispatch = useDispatch();
// const [state, setState] = useState<boolean>(false);
// const onStateChange = () => {
//   if (!document.startViewTransition) {
//     setState(!state);
//   } else {
//     document.startViewTransition(() => {
//       setState(!state);
//     });
//   }

//   console.log(state);
// };

export const navData = [
  {
    text: "Create Article",
    content: "Dashboard",
    icon: <TbDashboard />,
    onClick: () => {
      const dispatch = useDispatch();

      console.log("red");

      dispatch(changeToggleMenu());
    },
  },
  {
    text: "Read Article",
    icon: <CiText />,
  },
  {
    text: "Edit Article",
    icon: <CiPalette />,
  },
  // {
  //   text: "View Article",
  //   icon: <CiPalette />,
  //   onClick: () => {
  //     onStateChange();
  //   },
  // },
];
