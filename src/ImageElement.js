import React from 'react'
import { 
  TouchableHighlight, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View,
  Dimensions
} from 'react-native'

import Image from 'react-native-image-progress';
import Progress from 'react-native-progress';

export default class ImageElement extends React.Component{
    static navigationOptions = {
        headerTitle: 'PROF.(DR.) SOHAN RAJ TATER E-KNOWLEDGE MUSEUM',
        headerStyle: {
            backgroundColor: '#ef94d5',
        }, 
        headerTitleStyle: {
            color: '#9e0472',
            fontSize: 14.5
        }
    }

    render() {
        return (
          <Image 
            source={this.props.imgSource} 
            indicator={Progress}
            indicatorProps={{
              size: 80,
              borderWidth: 0,
              color: 'rgba(150, 150, 150, 1)',
              unfilledColor: 'rgba(200, 200, 200, 0.2)'
            }}
            style={styles.image}/>
        );
    }
}

const styles = StyleSheet.create({
   image: {
    width: 300,
    height: (Dimensions.get('window').height/2)
   }
})