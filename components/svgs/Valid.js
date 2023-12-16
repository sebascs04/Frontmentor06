import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Circle,
  Path,
} from "react-native-svg"
const Valid = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <Defs>
      <LinearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FF6A3A" />
        <Stop offset="100%" stopColor="#FF527B" />
      </LinearGradient>
    </Defs>
    <G fill="none">
      <Circle cx={32} cy={32} r={32} fill="url(#a)" />
      <Path
        stroke="#FFF"
        strokeWidth={4}
        d="m18.286 34.686 8.334 7.98 19.094-18.285"
      />
    </G>
  </Svg>
)
export default Valid
