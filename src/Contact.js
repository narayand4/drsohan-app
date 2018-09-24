import React from 'react'
import { 
  Image, 
  TouchableHighlight, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View,
  Button,
  Linking 
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

var limit = 40
export default class Contact extends React.Component{
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
        const {navigate} = this.props.navigation
        return (
          <View style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                  <View style={styles.photo}>
                    <Image source={require('../images/drsohan.jpg')} style={{width: 178}}/>     
                  </View>
                  <View style={styles.vids}>
                      <Text style={styles.vidText}>Prof.(Dr.) Sohan Raj Tater</Text>
                  </View>
                  <View style={styles.vids}>
                      <Text style={styles.vidText}>G-8, Multan Kunj, Bhagat Ki Kothi Extension</Text>
                  </View>
                  <View style={styles.vids}>
                      <Text style={styles.vidText}>JODHPUR-342003 (Rajasthan) INDIA.</Text>
                  </View>
                  <View style={styles.vids}>
                      <Text style={styles.vidText}>Email: sohan.tater@gmail.com. </Text>
                  </View>
                </View>
            </ScrollView>
            <View style={styles.tabBar}>
              <TouchableOpacity style={styles.tabItems} onPress={() => navigate('Home')}>
                <Icon name='home' size={25} color='#444'/>
                <Text style={styles.tabTitle}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tabItems} onPress={() => navigate('EknowledgeMuseum')}>
                <Icon name='subscriptions' size={25} color='#444'/>
                <Text style={styles.tabTitle}>E-KNOWLEDGE MUSEUM</Text>
              </TouchableOpacity>          
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    body: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 30
    },
    vids: {
        paddingTop: 6,
        paddingBottom: 6,
        width: 320,
        backgroundColor: '#fff',
        borderBottomWidth: 0.6,
        borderColor: '#aaa'
    },
    photo: {
        paddingTop: 6,
        paddingBottom: 6,
        width: 320,
        backgroundColor: '#fff',
        borderBottomWidth: 0.6,
        borderColor: '#aaa',
        alignItems: 'center'
    },
    pageHeading: {
        fontSize: 20,
        color: '#9e0472'
    },
    vidItems: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10
    },
    vidText: {
        fontSize: 20,
        color: '#9e0472'
    },
    tabBar: {
        backgroundColor: '#fff',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 0.5,
        borderColor: '#bbb'
    },
    tabItems: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 5
    },
    tabTitle: {
        fontSize: 11,
        color: '#333',
        paddingTop: 4,
        textDecorationLine: 'underline'
    }
})

