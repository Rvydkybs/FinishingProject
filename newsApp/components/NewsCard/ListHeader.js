import React from 'react';
import { ScrollView ,Image} from 'react-native';
import { View } from 'react-native';
import news_banner_data from "../../../newsApp/news_banner_data.json";//üst dizine çıkma
import styles from "./NewsCard.Style";

export default function ListHeader() {
  return (
      <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
            news_banner_data.map(bannerNews=>(<Image style={styles.bannerImage} source={{uri:bannerNews.imageUrl}}/>))
            }
            </ScrollView>
     </View>
  )
}
