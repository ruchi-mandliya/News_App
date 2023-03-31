import { View, Text } from 'react-native'
import React,{useState}from 'react'
import { useWindowDimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view';
import DiscoverScreen from '../Screens/DiscoverScreen';
import NewsScreen from '../Screens/NewsScreen';





const InshortsTab = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(1);
    const [routes] = useState([
    { key: 'first', title: 'DiscoverScreen' },
    { key: 'second', title: 'News' },

    ])
    const renderScene = SceneMap({
        first: DiscoverScreen,
        second: NewsScreen,
      });
    


  return ( 
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
   
  )
}

export default InshortsTab