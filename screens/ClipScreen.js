import { StyleSheet, Text, SafeAreaView } from "react-native";

const ClipScreen = () => {
  return (
    <SafeAreaView tyele={StyleSheet.container}>
      <Text>Clip Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ClipScreen;
