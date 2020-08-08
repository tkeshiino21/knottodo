import * as Linking from "expo-linking";
import { NotTodayScreen } from "../screens/NotTodayScreen";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      HOME: {
        screens: {
          Home: {
            secreens: {
              Home: "home"
            }
          }
        }
      },
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: "not-today"
            }
          },
          TabTwo: {
            screens: {
              TabTwoScreen: "two"
            }
          },
          TabThree: {
            screens: {
              TabTwoScreen: "two"
            }
          }
        }
      },
      NotFound: "*"
    }
  }
};
