import React from 'react';
import { SectionList, StyleSheet, Text } from 'react-native';
import Colors from '../constants/Colors';
import { Toolbar } from 'react-native-material-ui';
import { TabBarTitleText } from '../components/StyledText';

export default class ShareScreen extends React.Component {
  static navigationOptions = {
    header: () => <Toolbar
      style={{
        container: { backgroundColor: Colors.headerColor }
      }}
      leftElement={<TabBarTitleText>Share</TabBarTitleText>}
      rightElement={{
        actions: ["border-color"],
      }}
      onRightElementPress={(label) => { console.log(label) }}
    />,
  };

  render() {
    return (
      <SectionList
        style={styles.container}
        renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontWeight: 'bold' }}>{title}</Text>
        )}
        sections={[
          { title: 'Title1', data: ['item1', 'item2'] },
          { title: 'Title2', data: ['item3', 'item4'] },
          { title: 'Title3', data: ['item5', 'item6'] },
        ]}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBE7',
  },
});
