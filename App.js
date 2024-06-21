import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView ,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import headerLogo from "./assets/headerLogo.png";
import Popular1 from "./assets/11.png";
import Popular2 from "./assets/12.png";

import Tranding1 from "./assets/tranding1.png";
import Tranding2 from "./assets/tranding2.png";

import Premium1 from "./assets/Premium1.png";
import Premium2 from "./assets/Premium2.png";

import { Fontisto } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaProvider ,SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const PopularCategory = [Popular1, Popular2, Popular1, Popular2, Popular1];
  const TrandingCategory = [
    Tranding1,
    Tranding2,
    Tranding1,
    Tranding2,
    Tranding1,
  ];
  const PremiumCategory = [Premium1, Premium2, Premium1, Premium2, Premium1];

  return (
    <SafeAreaProvider>

    <SafeAreaView style={{ width: "100%", backgroundColor: "#ffe8ec" }}>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.headerMain}>
          <View style={styles.TextBox}>
            <Entypo name="text" size={24} color="black" />
          </View>
          <View style={styles.LogoImage}>
            <Image
              style={{ width: 120, resizeMode: "contain" }}
              source={headerLogo}
            />
          </View>
          <View style={styles.Profile}>
            <Text>RK</Text>
          </View>
        </View>

        {/* search box */}
        <View style={styles.serachContainer}>
          <View style={{ flex: 1 }}>
            <View style={styles.SearchMain}>
              <AntDesign
                name="search1"
                style={{ color: "#666666", opacity: 0.5 }}
                size={24}
                color="black"
              />
              <TextInput
                style={styles.SearchPlaceholder}
                placeholder="Search by categories"
              ></TextInput>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View style={styles.Notification}>
              <Fontisto name="bell" size={16} color="black" />
            </View>
            <View style={styles.Questions}>
              <FontAwesome5 name="question" size={16} color="black" />
            </View>
          </View>
        </View>
        {/* Categories Section starts */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ display: "flex", gap: 20 }}>
            {/* popular Categories start */}
            <View style={{ display: "flex", gap: 10 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.PopularCategories}>Popular Categories</Text>
                <TouchableOpacity
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.ExploreAll}>Explore All</Text>
                  <Entypo name="chevron-small-right" size={16} color="black" />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: "row" }}>
                <FlatList
                  data={PopularCategory}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => alert("image Clicked")}>
                      <Image source={item} />
                    </TouchableOpacity>
                  )}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
            {/* popular Categories End */}

            {/* Trending Categories start */}
            <View style={{ display: "flex", gap: 10 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.PopularCategories}>Popular Categories</Text>
                <TouchableOpacity
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.ExploreAll}>Explore All</Text>
                  <Entypo name="chevron-small-right" size={16} color="black" />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: "row" }}>
                <FlatList
                  data={TrandingCategory}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => alert("image Clicked")}>
                      <Image source={item} />
                    </TouchableOpacity>
                  )}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
            {/* Trending Categories End */}

            {/* Premium Categories start */}
            <View style={{ display: "flex", gap: 10 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.PopularCategories}>Popular Categories</Text>
                <TouchableOpacity
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.ExploreAll}>Explore All</Text>
                  <Entypo name="chevron-small-right" size={16} color="black" />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: "row" }}>
                <FlatList
                  data={PremiumCategory}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => alert("image Clicked")}>
                      <Image source={item} />
                    </TouchableOpacity>
                  )}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
            {/* Premium Categories End */}
          </View>
        </ScrollView >
      </View>
    </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 20,
    padding: 10,
    height:'100%'
  },
  headerMain: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  TextBox: {
    width: 30,
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  Profile: {
    width: 30,
    height: 30,
    backgroundColor: "#ff728a",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  LogoImage: {},

  serachContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  Notification: {
    padding: 6,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  Questions: {
    padding: 6,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  SearchMain: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  SearchPlaceholder: {
    color: "#666666",
    opacity: 0.5,
    width: "100%",
  },
  ExploreAll: {
    fontSize: 12,
    color: "#505960",
  },
  PopularCategories: {
    fontSize: 18,
    color: "#505960",
  },
});
