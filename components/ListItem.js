import { StyleSheet, Image, Text, View } from "react-native";

const ListItem = (props) => {
  const sampleText = `The <Text> element is unique relative 
     to layout: everything inside is no longer using the Flexbox 
     layout but using text layout. This means that elements inside of a <Text> 
     are no longer rectangles, but wrap when they see the end of the line.`;
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image
          style={{ width: 100, height: 100 }}
          // source={{ uri: "https://picsum.photos/id/10/300/300" }}
          source={{ uri: props.imageUrl }}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.mainText}>
          {props.title}
        </Text>
        <Text style={styles.subText}>{props.auther}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    marginVertical: 5,
  },
  leftContainer: {
    width: 100,
    backgroundColor: "green",
  },
  rightContainer: {
    flex: 1,
    padding: 1,
    justifyContent: "space-between",
  },
  mainText: {
    // fontsize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
});

export default ListItem;
