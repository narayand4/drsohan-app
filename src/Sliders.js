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
  Linking,
  ActivityIndicator,
  SafeAreaView 
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import ImageSlider from 'react-native-image-slider'

let page = 0;
let pageCount = 20;
export default class Sliders extends React.Component{
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

    constructor(props){
        super(props)
        this.state = {
          data: null
        }
    }

    componentDidMount(){
      let apiUrl = `http://drsohanrajtater.com/api/sliders.php`;
      fetch(apiUrl)    
        .then(res => res.json())
        .then(res => {
          const data = []
          res.data.forEach(item => {
            data.push(item)
          })
          this.setState({
            data: data
          }) 
        })
        .catch(error => {
          console.error(error)
        })
    }

    render() {
        const {navigate} = this.props.navigation
        if (!this.state.data) {
          return (
            <ActivityIndicator
              animating={true}
              style={styles.indicator}
              size="large"
            />
          );
        }
        return (
          <View style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <TouchableHighlight key="research">
                        <View style={styles.vids}>
                            <Text style={styles.pageHeading}>Prof. Tater's Award Wining Images</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ ()=> Linking.openURL(item.href) }>
                        <SafeAreaView style={styles.imgContainer}>
                          <ImageSlider 
                          loopBothSides
                          autoPlayWithInterval={3000}
                          onPress={({ index }) => alert(index)}
                          images={this.state.data}
                          customSlide={({ index, item, style, width }) => (
                            <View key={index} style={[style, styles.customSlide]}>
                              <Image source={{ uri: item }} style={styles.customImage} />
                            </View>
                          )}
                          />
                        </SafeAreaView>
                    </TouchableHighlight>
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
    slider: { backgroundColor: '#fff', height: 350 },
    customSlide: {
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: '#fff'
    },
    customImage: {
      width: 300,
      height: 400,
    },
    body: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 30
    },
    imgContainer: {
      width: 320,
      flex: 1,
        backgroundColor: '#fff'
    },
    vids: {
        paddingTop: 6,
        paddingBottom: 6,
        width: 320,
        backgroundColor: '#fff',
        borderBottomWidth: 0.6,
        borderColor: '#aaa',
        flexDirection: 'row'
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
        fontSize: 18,
        color: '#9e0472',
        paddingBottom: 5,
        paddingTop: 5
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
    },
    tabTitleTW: {
        fontSize: 20,
        color: '#9e0472',
        paddingTop: 4
    },
    indicator: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: 80
    },
    tabSpace: {
        paddingLeft:10,
        paddingRight:10
    }
})
