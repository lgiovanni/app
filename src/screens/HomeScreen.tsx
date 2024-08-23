import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator, Dimensions } from 'react-native';
import { TabView, SceneMap, NavigationState } from 'react-native-tab-view';
import { TabBar, SceneRendererProps } from 'react-native-tab-view';
import { SafeAreaView } from 'react-native-safe-area-context';

type Route = {
  key: string;
  title: string;
};

type State = NavigationState<Route>;

type Item = {
  id: string;
  name: string;
  gifts: number;
  image: string;
};

type ClubItem = {
  id: string;
  name: string;
  description: string;
  members: number;
  country: string;
  image: string;
};

type PKItem = {
  id: string;
  name1: string;
  name2: string;
  image1: string;
  image2: string;
  country1: string;
  country2: string;
};

const HomeScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState<Route[]>([
    { key: 'follow', title: 'Follow' },
    { key: 'hot', title: 'Hot' },
    { key: 'explore', title: 'Explore' },
    { key: 'club', title: 'Club' },
    { key: 'pk', title: 'PK' },
  ]);

  const renderScene = SceneMap({
    follow: FollowRoute,
    hot: HotRoute,
    explore: ExploreRoute,
    club: ClubRoute,
    pk: PKRoute,
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={(props: SceneRendererProps & { navigationState: State }) => (
          <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            style={styles.tabBar}
            labelStyle={styles.label}
            scrollEnabled={true}
            tabStyle={styles.tabStyle}
          />
        )}
      />
    </SafeAreaView>
  );
};

const FollowRoute = () => <ContentList />;
const HotRoute = () => <ContentList />;
const ExploreRoute = () => <ContentList />;
const ClubRoute = () => <ClubList />;
const PKRoute = () => <PKList />;

const ContentList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setTimeout(() => {
      setData([
        { id: '1', name: 'YourHoney', gifts: 120, image: 'https://via.placeholder.com/150' },
        { id: '2', name: 'Hi Baby', gifts: 109, image: 'https://via.placeholder.com/150' },
        { id: '3', name: 'Lucy luu', gifts: 106, image: 'https://via.placeholder.com/150' },
        { id: '4', name: 'Angeles On', gifts: 106, image: 'https://via.placeholder.com/150' },
        // Más elementos según sea necesario
      ]);
      setLoading(false);
    }, 2000);
  };

  if (loading) {
    return <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />;
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
            <Text style={styles.gifts}>{item.gifts} regalos</Text>
          </View>
        </View>
      )}
      keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={styles.list}
    />
  );
};

const ClubList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ClubItem[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setTimeout(() => {
      setData([
        { id: '1', name: 'N\'S BABIES', description: 'Palambeng po', members: 48, country: 'https://www.countryflags.io/ph/flat/64.png', image: 'https://via.placeholder.com/150' },
        { id: '2', name: 'New Club', description: 'Welcome!', members: 76, country: 'https://www.countryflags.io/us/flat/64.png', image: 'https://via.placeholder.com/150' },
        // Más elementos según sea necesario
      ]);
      setLoading(false);
    }, 2000);
  };

  if (loading) {
    return <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />;
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.clubItem}>
          <Image source={{ uri: item.image }} style={styles.clubImage} />
          <View style={styles.clubTextContainer}>
            <Text style={styles.clubName} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
            <Text style={styles.clubDescription} numberOfLines={1} ellipsizeMode="tail">{item.description}</Text>
            <View style={styles.clubFooter}>
              <Image source={{ uri: item.country }} style={styles.countryFlag} />
              <Text style={styles.clubMembers}>{item.members} members</Text>
            </View>
          </View>
        </View>
      )}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
    />
  );
};

const PKList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PKItem[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setTimeout(() => {
      setData([
        {
          id: '1', name1: 'BUENAS BUENAS', name2: 'hola mayoooooo',
          image1: 'https://via.placeholder.com/150', image2: 'https://via.placeholder.com/150',
          country1: 'https://www.countryflags.io/uy/flat/64.png', country2: 'https://www.countryflags.io/ec/flat/64.png'
        },
        {
            id: '2', name1: 'siiiiii', name2: 'hola',
            image1: 'https://via.placeholder.com/150', image2: 'https://via.placeholder.com/150',
            country1: 'https://www.countryflags.io/uy/flat/64.png', country2: 'https://www.countryflags.io/ec/flat/64.png'
          },
        // Más elementos según sea necesario
      ]);
      setLoading(false);
    }, 2000);
  };

  if (loading) {
    return <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />;
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.pkItem}>
          <View style={styles.pkUser}>
            <Image source={{ uri: item.image1 }} style={styles.pkImage} />
            <View style={styles.pkTextContainer}>
              <Image source={{ uri: item.country1 }} style={styles.pkCountryFlag} />
              <Text style={styles.pkName} numberOfLines={1} ellipsizeMode="tail">{item.name1}</Text>
            </View>
          </View>
          <Image source={require('../../assets/VS.png')} style={styles.vsImage} />
          <View style={styles.pkUser}>
            <Image source={{ uri: item.image2 }} style={styles.pkImage} />
            <View style={styles.pkTextContainer}>
              <Image source={{ uri: item.country2 }} style={styles.pkCountryFlag} />
              <Text style={styles.pkName} numberOfLines={1} ellipsizeMode="tail">{item.name2}</Text>
            </View>
          </View>
        </View>
      )}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabBar: {
    backgroundColor: 'white',
    marginTop: 10, // Ensure some space from the top for the status bar
  },
  indicator: {
    backgroundColor: '#000',
  },
  label: {
    color: '#000',
    fontWeight: 'bold',
  },
  tabStyle: {
    width: 'auto',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    padding: 10,
  },
  item: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  name: {
    fontSize: 12,
    color: '#000',
    width: '60%',
  },
  gifts: {
    fontSize: 10,
    color: '#000',
  },
  clubItem: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  clubImage: {
    width: 100,
    height: 100,
  },
  clubTextContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  clubName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  clubDescription: {
    fontSize: 14,
    color: '#666',
  },
  clubFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  countryFlag: {
    width: 24,
    height: 24,
  },
  clubMembers: {
    fontSize: 14,
    color: '#000',
  },
  pkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    padding: 10,
    position: 'relative',
    borderStyle: 'solid',
    borderWidth:1,
    borderColor:'gray',
  },
  pkUser: {
    flex: 1,
    alignItems: 'center',
  },
  pkImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  pkTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  pkCountryFlag: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  pkName: {
    fontSize: 14,
    fontWeight: 'bold',
    width: '70%',
  },
  vsImage: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: '50%',
    left: '53%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
    zIndex:10,
  },
});

export default HomeScreen;
