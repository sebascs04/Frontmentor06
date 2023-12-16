import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"
const List = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} {...props}>
    <G fill="none">
      <Circle cx={10.5} cy={10.5} r={10.5} fill="#FF6155" />
      <Path stroke="#FFF" strokeWidth={2} d="M6 11.381 8.735 14 15 8" />
    </G>
  </Svg>
)
export default List
