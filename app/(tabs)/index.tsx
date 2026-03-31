import { FlatList, Pressable, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fragment } from "react";
import { offers } from "../../constant";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 10 }}>
        <Text style={{ fontSize: 30, fontWeight: "700", color: "#111827" }}>
          Special Offers
        </Text>
        <Text style={{ fontSize: 16, color: "#6B7280", marginTop: 4 }}>
          Choose your favorite combo
        </Text>
      </View>

      <FlatList
        data={offers}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;

          return (
            <Pressable
              style={{
                backgroundColor: item.color,
                height: 180,
                borderRadius: 20,
                marginBottom: 16,
                paddingHorizontal: 16,
                overflow: "hidden",
                flexDirection: isEven ? "row-reverse" : "row",
                alignItems: "center",
              }}
            >
              {() => (
                <Fragment>
                  <View
                    style={{
                      width: "45%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={item.image}
                      resizeMode="contain"
                      style={{
                        width: 150,
                        height: 150,
                      }}
                    />
                  </View>

                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      paddingLeft: isEven ? 12 : 0,
                      paddingRight: isEven ? 0 : 12,
                    }}
                  >
                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: 26,
                        fontWeight: "700",
                        lineHeight: 30,
                      }}
                    >
                      {item.title}
                    </Text>

                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: 16,
                        marginTop: 12,
                        fontWeight: "500",
                      }}
                    >
                      Order Now →
                    </Text>
                  </View>
                </Fragment>
              )}
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
}