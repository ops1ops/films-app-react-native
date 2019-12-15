import React, { useState } from 'react';
import {RecyclerListView, LayoutProvider, DataProvider} from "recyclerlistview";
import VerticalActorCard from "./VerticalActorCard";

const HorizontalList = ({ data, navigation }) => {
  const [dataProvider] = useState(
    new DataProvider((r1, r2) => (r1 !== r2)).cloneWithRows(data)
  );

  const layoutProvider = new LayoutProvider((i) => 'image', (type, dim) => {
      dim.width = 143;
      dim.height = 280;
  });

  const renderRow = (type, { id, posterUrl, name, pivot: { character } }, index) => (
    <VerticalActorCard
      posterUrl={posterUrl}
      name={name}
      character={character}
      onPress={() => navigation.navigate('ActorDetails', { id })}
      a={console.log(index)}
    />
  );

  return (
    <RecyclerListView
      style={{ width: '100%', height: 280, paddingLeft: 15 }}
      rowRenderer={renderRow}
      dataProvider={dataProvider}
      layoutProvider={layoutProvider}
      showsHorizontalScrollIndicator={false}
      isHorizontal
    />
  )
};

export default HorizontalList;
