import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import * as theme from '../constants/theme';
import * as company from '../constants/patient';
import Pateint from '../components/pateint';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FilterModal from '../components/filterPatient';

export default function Home({navigation}) {
  const [filterVisible, setFilterVisible] = useState(false);

  const ToggleFilterVisible = () => {
    setFilterVisible(!filterVisible);
  };
  return (
    <>
      <View style={{flex: 1}}>
        <Modal
          animationType="slide"
          visible={filterVisible}
          onRequestClose={() => ToggleFilterVisible()}>
          <FilterModal closeModal={() => ToggleFilterVisible()} />
        </Modal>

        <View>
          {/* Safe area */}
          <View style={styles.safeArea} />

          {/* Body */}
          {/* Search patient */}
          <View>
            <Text style={styles.h4}>Search</Text>
          </View>

          {/* Search */}
          <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
              <Icon name="search" size={30} color={theme.colors.silver} />
              <TextInput placeholder="Enter patient name" />
            </View>
            <TouchableOpacity
              style={styles.searchIconContainer}
              onPress={() => ToggleFilterVisible()}>
              <Icon name="filter-list" size={30} color={theme.colors.white} />
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.popularContainer,
              {marginRight: 20, marginLeft: 20},
            ]}>
            <Text style={styles.popularText}>Quick result</Text>
          </View>
          <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}>
            {/* Recent Patients */}
            <View
              style={[
                styles.popularContainer,
                {marginRight: 20, marginLeft: 20, marginBottom: 70},
              ]}>
              <FlatList
                data={company.companies}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                  return <Pateint pateint={item} />;
                }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 15,
    backgroundColor: theme.colors.lightWhite,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: theme.colors.lightWhite,
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
  container: {
    backgroundColor: theme.colors.lightWhite,
  },
  h4: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: theme.sizes.h4,
    color: theme.colors.black,
  },
  title: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: theme.sizes.h6,
    color: theme.colors.black,
  },
  searchContainer: {
    marginTop: 15,
    marginLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  searchInputContainer: {
    flex: 1,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
  },
  searchIconContainer: {
    padding: 12,
    marginLeft: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.black,
  },
  popularContainer: {
    paddingTop: 20,
  },
  popularText: {
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: theme.sizes.h3,
    color: theme.colors.black,
  },
});
