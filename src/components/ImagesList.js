import React, { useState } from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {RecyclerListView, LayoutProvider, DataProvider, LayoutUtil} from "recyclerlistview";
import FastImage from "react-native-fast-image";

const height = 220;

const ImagesList = ({ data }) => {
  const [dataProvider, setDataProvider] = useState(
    new DataProvider((r1, r2) => (r1 !== r2)).cloneWithRows(data)
  );

  const [layoutProvider, setLayoutProvider] = useState(
    new LayoutProvider((i) => 'image', (type, dim) => {
      dim.width = 160;
      dim.height = height;
    })
  );

  const renderRow = (type, { url }) => (
    <View style={{ marginRight: 12 }}>
      <Image source={{ uri: url }} style={styles.image} />
    </View>
);

  return (
    <RecyclerListView
      isHorizontal
      style={{ width: '100%', height, paddingLeft: 15 }}
      rowRenderer={renderRow}
      dataProvider={dataProvider}
      layoutProvider={layoutProvider}
      showsHorizontalScrollIndicator={false}
    />
  )
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
});

export default ImagesList;
