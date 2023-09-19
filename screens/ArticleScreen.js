import { StyleSheet, SafeAreaView, Text } from "react-native";
import { WebView } from "react-native-webview";

const ArticleScreen = ({ route }) => {
  // console.log(route.params);
  const { article } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: article.url }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ArticleScreen;
