import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../componenet/Color';
export default class SectonLists extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'SectionList',
    headerStyle: {
      backgroundColor: colors.primary,
      elevation: 0,
    },
    headerTintColor: '#fff',
    headerRight: (
      <TouchableOpacity>
        <Icon
          name="code"
          size={25}
          color="white"
          style={{marginRight: 20}}
          onPress={() =>
            navigation.navigate('Git', {
              url:
                'https://github.com/Awadhesh786/ReactNativeExample/blob/master/src/screen/SectionList.js',
            })
          }
        />
      </TouchableOpacity>
    ),
  });
  GetSectionListItem = item => {
    Alert.alert(item);
  };

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {
              title: 'City Name Starts with A',
              data: ['Agra', 'Alinager', 'Amritsar'],
            },
            {
              title: 'City Name Starts with B',
              data: ['Barabanki', 'Bombay', 'Bangalore'],
            },
            {
              title: 'City Name Starts with C',
              data: ['Chakia', 'Chandauli', 'Chouk'],
            },
          ]}
          renderSectionHeader={({section}) => (
            <Text style={styles.SectionHeader}> {section.title} </Text>
          )}
          renderItem={({item}) => (
            <Text
              style={styles.SectionListItemS}
              onPress={this.GetSectionListItem.bind(this, item)}>
              {' '}
              {item}{' '}
            </Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  SectionHeader: {
    backgroundColor: colors.primary,
    fontSize: 20,
    marginTop: 10,
    padding: 5,
    color: '#fff',
    fontWeight: 'bold',
  },
  SectionListItemS: {
    fontSize: 20,
    padding: 6,
    color: '#000',
    backgroundColor: '#F5F5F5',
  },
});
