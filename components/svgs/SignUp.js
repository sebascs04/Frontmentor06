import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  G,
  Mask,
  Use,
  Circle,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SignUp = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={375}
    height={284}
    {...props}
  >
    <Defs>
      <LinearGradient id="b" x1="100%" x2="0%" y1="21.322%" y2="78.678%">
        <Stop offset="0%" stopColor="#FF6A3A" />
        <Stop offset="100%" stopColor="#FF527B" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1="22.319%"
        x2="99.127%"
        y1="28.497%"
        y2="70.858%"
      >
        <Stop offset="0%" stopColor="#FF3E83" />
        <Stop offset="100%" stopColor="#FF9F2E" />
      </LinearGradient>
      <LinearGradient id="k" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFB443" />
        <Stop offset="100%" stopColor="#FF5B64" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient id="o" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F8F8F8" />
        <Stop offset="100%" stopColor="#EEE" />
      </LinearGradient>
      <LinearGradient id="p" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#CACBE8" />
        <Stop offset="100%" stopColor="#EEE" />
        <Stop offset="100%" stopColor="#CACBE8" />
      </LinearGradient>
      <LinearGradient id="r" x1="97.791%" x2="7.729%" y1="26.944%" y2="71.879%">
        <Stop offset="0%" stopColor="#FF9049" />
        <Stop offset="100%" stopColor="#FF5E5E" />
      </LinearGradient>
      <LinearGradient id="t" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FF6A3D" />
        <Stop offset="100%" stopColor="#FF5B66" />
      </LinearGradient>
      <Path
        id="a"
        d="M0 0v268c0 8.837 7.163 16 16 16h343c8.837 0 16-7.163 16-16V0H0Z"
      />
      <Path
        id="d"
        d="M0 14.054C0 6.292 6.292 0 14.054 0H220c7.762 0 14.054 6.292 14.054 14.054v128.108c0 7.762-6.292 14.054-14.054 14.054H14.054C6.292 156.216 0 149.924 0 142.162V14.054Z"
      />
      <Path
        id="f"
        d="M0 5.946A5.946 5.946 0 0 1 5.946 0H210.81a5.946 5.946 0 0 1 5.946 5.946v128.108A5.946 5.946 0 0 1 210.81 140H5.946A5.946 5.946 0 0 1 0 134.054V5.946Z"
      />
      <Path
        id="i"
        d="M0 5.946A5.946 5.946 0 0 1 5.946 0H210.81a5.946 5.946 0 0 1 5.946 5.946v128.108A5.946 5.946 0 0 1 210.81 140H5.946A5.946 5.946 0 0 1 0 134.054V5.946Z"
      />
      <Path
        id="m"
        d="M0 5.946A5.946 5.946 0 0 1 5.946 0h222.162a5.946 5.946 0 0 1 5.946 5.946V129.73a5.946 5.946 0 0 1-5.946 5.946H5.946A5.946 5.946 0 0 1 0 129.73V5.946Z"
      />
      <Path
        id="q"
        d="M0 2.162C0 .968.968 0 2.162 0h48.649c1.194 0 2.162.968 2.162 2.162v65.946a2.162 2.162 0 0 1-2.162 2.162H2.162A2.162 2.162 0 0 1 0 68.108V2.162Z"
      />
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Mask id="c" fill="#fff">
        <Use xlinkHref="#a" />
      </Mask>
      <Path d="M0 0v268c0 8.837 7.163 16 16 16h343c8.837 0 16-7.163 16-16V0H0Z" />
      <Path
        fill="url(#b)"
        fillRule="nonzero"
        d="M0 0v268c0 8.837 7.163 16 16 16h343c8.837 0 16-7.163 16-16V0H0Z"
        mask="url(#c)"
      />
      <G mask="url(#c)">
        <G fillRule="nonzero" transform="translate(-16 87.784)">
          <Use xlinkHref="#d" fill="#000" filter="url(#e)" />
          <Use xlinkHref="#d" fill="#242742" />
        </G>
        <G transform="translate(-7.351 95.892)">
          <G fillRule="nonzero">
            <Use xlinkHref="#f" fill="#000" filter="url(#g)" />
            <Use xlinkHref="#f" fill="url(#h)" />
          </G>
          <Mask id="l" fill="#fff">
            <Use xlinkHref="#i" />
          </Mask>
          <G fillRule="nonzero">
            <Use xlinkHref="#i" fill="#000" filter="url(#j)" />
            <Use xlinkHref="#i" fill="url(#h)" />
          </G>
          <Circle
            cx={210.81}
            cy={131.892}
            r={85.405}
            fill="url(#k)"
            fillRule="nonzero"
            mask="url(#l)"
          />
          <Circle
            cx={73.754}
            cy={-18.678}
            r={85.405}
            fill="url(#k)"
            fillRule="nonzero"
            mask="url(#l)"
            transform="rotate(-135 73.754 -18.678)"
          />
        </G>
        <G fillRule="nonzero" transform="translate(157.513 35.892)">
          <Use xlinkHref="#m" fill="#000" filter="url(#n)" />
          <Use xlinkHref="#m" fill="url(#o)" />
          <Path
            fill="url(#p)"
            d="M0 5.946A5.946 5.946 0 0 1 5.946 0h45.946v135.676H5.946A5.946 5.946 0 0 1 0 129.73V5.946Z"
          />
          <Path
            fill="#BABBDB"
            d="M7.568 27.297c0-1.045.847-1.892 1.891-1.892h32.973a1.892 1.892 0 0 1 0 3.784H9.46a1.892 1.892 0 0 1-1.891-1.892Zm0 10.811c0-1.045.847-1.892 1.891-1.892h29.19a1.892 1.892 0 0 1 0 3.784H9.459a1.892 1.892 0 0 1-1.891-1.892Zm0 10.81c0-1.044.847-1.891 1.891-1.891h32.973a1.892 1.892 0 0 1 0 3.784H9.46a1.892 1.892 0 0 1-1.891-1.892Zm0 10.812c0-1.045.847-1.892 1.891-1.892h21.082a1.892 1.892 0 0 1 0 3.784H9.459a1.892 1.892 0 0 1-1.891-1.892Z"
          />
          <Path
            fill="#242742"
            d="M0 5.946A5.946 5.946 0 0 1 5.946 0h222.162a5.946 5.946 0 0 1 5.946 5.946v10.81H0V5.947Z"
          />
          <G transform="translate(8.649 4.865)">
            <Circle cx={3.514} cy={3.514} r={3.514} fill="#FF6464" />
            <Circle cx={15.406} cy={3.514} r={3.514} fill="#FF9255" />
            <Circle cx={27.297} cy={3.514} r={3.514} fill="#6BD4A8" />
          </G>
        </G>
        <G transform="translate(220.757 24)">
          <Path
            fill="#FFF"
            fillRule="nonzero"
            d="M0 2.162C0 .968.968 0 2.162 0h48.649c1.194 0 2.162.968 2.162 2.162v65.946a2.162 2.162 0 0 1-2.162 2.162H2.162A2.162 2.162 0 0 1 0 68.108V2.162Z"
          />
          <Mask id="s" fill="#fff">
            <Use xlinkHref="#q" />
          </Mask>
          <Use xlinkHref="#q" fill="#FFF" fillRule="nonzero" />
          <Path
            fill="url(#r)"
            fillRule="nonzero"
            d="M58.444 15.61a1.62 1.62 0 0 1 0 2.293l-13.662 13.67a6.018 6.018 0 0 1-8.512 0 2.774 2.774 0 0 0-3.925 0l-9.422 9.429a4.685 4.685 0 0 1-6.628 0 1.442 1.442 0 0 0-2.04 0L-3.178 58.444A1.622 1.622 0 1 1-5.47 56.15l17.43-17.441a4.685 4.685 0 0 1 6.629 0 1.442 1.442 0 0 0 2.04 0l9.422-9.428a6.018 6.018 0 0 1 8.513 0 2.774 2.774 0 0 0 3.924 0l13.663-13.67a1.622 1.622 0 0 1 2.293-.001Z"
            mask="url(#s)"
          />
          <Path
            fill="#FFF"
            fillRule="nonzero"
            d="M26.487 81.081c0-1.194.968-2.162 2.162-2.162h64.865c1.194 0 2.162.968 2.162 2.162v77.838a2.162 2.162 0 0 1-2.162 2.162H28.649a2.162 2.162 0 0 1-2.162-2.162V81.081Z"
          />
          <Path
            fill="url(#t)"
            d="M25.135 42.703c9.702 0 17.568-7.866 17.568-17.568 0-9.702-7.866-17.567-17.568-17.567-9.702 0-17.567 7.865-17.567 17.567s7.865 17.568 17.567 17.568Zm0 7.567c13.882 0 25.135-11.253 25.135-25.135C50.27 11.253 39.017 0 25.135 0 11.253 0 0 11.253 0 25.135 0 39.017 11.253 50.27 25.135 50.27Z"
            transform="translate(36.217 94.595)"
          />
          <Path
            fill="#242742"
            fillRule="nonzero"
            d="M52.222 117.145c0 1.228.318 2.2.954 2.914.637.71 1.504 1.064 2.602 1.064 1.019 0 1.816-.363 2.39-1.09.58-.726.87-1.632.87-2.719h-.634c0 .62-.171 1.112-.515 1.478a1.688 1.688 0 0 1-1.284.55c-.546 0-.951-.184-1.216-.55-.264-.371-.397-.915-.397-1.63 0-.816.133-1.402.397-1.757.27-.36.67-.54 1.2-.54.568 0 1.01.234 1.326.7.315.468.473 1.304.473 2.51l.076.337c0 1.785-.392 3.052-1.174 3.8-.783.75-1.89 1.121-3.32 1.116h-.38v2.145h.44c2.297-.023 4.05-.645 5.261-1.867 1.216-1.227 1.825-2.88 1.825-4.957v-.44c0-1.869-.42-3.22-1.259-4.054-.839-.839-1.923-1.258-3.252-1.258-1.334 0-2.398.386-3.192 1.157s-1.191 1.802-1.191 3.091Zm14.764 8.26h2.61v-12.297h-2.442l-5.464 7.872v1.858h9.265v-2.103h-2.669l-.439.042h-3.514l2.61-4.088h.085v5.186l-.042.296v3.234Z"
          />
        </G>
      </G>
    </G>
  </Svg>
)
export default SignUp
