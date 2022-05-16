import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";

import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            style={styles.image}
            source={require("./assets/logoImdb.jpeg")}
            resizeMode={"contain"}
          />
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#212121",
            marginTop: 5,
            paddingHorizontal: 10,
          }}>
          <View>
            <Text style={styles.title}>Interstellar</Text>
            <View style={styles.description}>
              <Text style={styles.descriptionText}>2014</Text>
              <Text style={styles.descriptionText}>PG-13</Text>
              <Text style={styles.descriptionText}>2h49min</Text>
              <Text style={styles.descriptionText}>
                Adventure, Drama, Sci-Fi
              </Text>
            </View>
          </View>
          <View style={styles.containerInfo}>
            <View style={styles.afficheContainer}>
              <Image
                style={styles.afficheImage}
                source={require("./assets/Interstellar.jpeg")}
                resizeMode={"contain"}
              />
            </View>
            <View style={styles.synopsis}>
              <Text style={{ color: "white", lineHeight: 20 }}>
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival
              </Text>
              <TouchableOpacity style={styles.touchableAdd}>
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "bold",
                  }}>
                  + ADD TO WATCHLIST
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.rate}>
            <View style={styles.containerRate}>
              <FontAwesome name="star" size={24} color="#E6B91F" />
              <View style={styles.score}>
                <Text style={styles.titleRate}>8,6</Text>
                <Text style={{ color: "white" }}>/10</Text>
              </View>
              <Text style={styles.subTitleRate}>1,1M</Text>
            </View>
            <View style={styles.containerRate}>
              <FontAwesome name="star-o" size={24} color="white" />
              <Text style={styles.titleRate}>RATE THIS</Text>
            </View>
            <View style={styles.containerRate}>
              <View>
                <Text style={styles.green}>74</Text>
              </View>
              <Text style={styles.titleRate}>Metascores</Text>
              <Text style={styles.subTitleRate}>46 critic reviews</Text>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: "#212121", marginTop: 20 }}>
          <View style={styles.castViewText}>
            <Text style={styles.titleCast}>Top Billed Cast</Text>
            <Text style={{ color: "#16668D" }}>SEE ALL</Text>
          </View>
          <ScrollView horizontal={true} style={styles.carroussel}>
            <View style={styles.itemCarrousel}>
              <Image
                style={styles.imageCarroussel}
                resizeMode="contain"
                source={require("./assets/matthew.jpg")}
              />
              <View style={styles.castDescription}>
                <Text style={styles.castMember} numberOfLines={1}>
                  Matthew McConaughey
                </Text>
                <Text style={styles.castRole}>Cooper</Text>
              </View>
            </View>
            <View style={styles.itemCarrousel}>
              <Image
                style={styles.imageCarroussel}
                // resizeMode="contain"
                source={require("./assets/anne.jpg")}
              />
              <View style={styles.castDescription}>
                <Text style={styles.castMember} numberOfLines={1}>
                  Anne Hathaway
                </Text>
                <Text style={styles.castRole}>Amelia Brand</Text>
              </View>
            </View>
            <View style={styles.itemCarrousel}>
              <Image
                style={styles.imageCarroussel}
                resizeMode="contain"
                source={require("./assets/jessica.jpg")}
              />
              <View style={styles.castDescription}>
                <Text style={styles.castMember} numberOfLines={1}>
                  Jessica Chastain
                </Text>
                <Text style={styles.castRole}>Murphy Cooper</Text>
              </View>
            </View>
            <View style={styles.itemCarrousel}>
              <Image
                style={styles.imageCarroussel}
                resizeMode="contain"
                source={require("./assets/mackenzie.jpg")}
              />
              <View style={styles.castDescription}>
                <Text style={styles.castMember} numberOfLines={1}>
                  Mackenzie Foy
                </Text>
                <Text style={styles.castRole}>Murphy Cooper</Text>
              </View>
            </View>
          </ScrollView>
          <View style={{ padding: 10 }}>
            <View>
              <Text style={styles.occupation}>Director</Text>
              <Text style={styles.director}>Christopher Nolan</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.occupation}>Writers</Text>
              <Text style={styles.director}>
                Jonathan Nolan (written by) and Christopher Nolan (written by)
              </Text>
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    marginTop: Platform.OS === "android" && Constants.statusBarHeight,
    // paddingLeft: 10,
  },

  header: {
    backgroundColor: "#393939",
    height: "8%",
    width: "100%",
    justifyContent: "center",
    // alignContent: "center",
  },
  image: {
    width: "20%",
    height: "70%",
    marginTop: 5,
    // backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    color: "white",
    marginTop: 10,
  },
  description: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 10,
  },
  descriptionText: {
    color: "lightgray",
  },
  containerInfo: {
    flexDirection: "row",
    marginTop: 30,
    flex: 1,
    height: 170,
  },
  afficheContainer: {
    flex: 2,
  },
  afficheImage: {
    height: "100%",
    width: "100%",
    marginRight: 10,
  },
  synopsis: {
    flex: 4,
    marginLeft: 20,
  },
  touchableAdd: {
    backgroundColor: "#0377BD",
    padding: 8,
    marginTop: 10,
  },
  rate: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 30,
  },
  titleRate: {
    color: "white",
    fontWeight: "bold",
  },
  subTitleRate: {
    color: "#CDCDCD",
  },
  green: {
    backgroundColor: "lightgreen",
    color: "white",
    padding: 5,
  },
  containerRate: {
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  score: {
    flexDirection: "row",
  },
  castViewText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  titleCast: {
    color: "white",
    fontSize: 25,
  },
  carroussel: {
    paddingHorizontal: 10,
    height: 300,
  },
  itemCarrousel: {
    marginHorizontal: 5,
    height: "100%",
    width: 150,
    flex: 1,
  },
  imageCarroussel: {
    height: "80%",
    width: "100%",
  },
  castDescription: {
    padding: 5,
  },
  castMember: {
    color: "white",
    width: "80%",
  },
  castRole: {
    color: "#CDCDCD",
  },
  occupation: {
    color: "white",
    fontSize: 17,
  },
  director: {
    color: "#cdcdcd",
    marginTop: 5,
  },
});
