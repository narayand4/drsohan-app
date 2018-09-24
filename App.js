import React, { Component } from 'react'
import { 
  Image, 
  TouchableHighlight, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native'
import { Router, Scene,Stack } from 'react-native-router-flux';
import { StackNavigator } from 'react-navigation'
import YouTube from 'react-native-youtube'

import YouTubeVideo from './src/YouTubeVideo'
import YouTubeVideoList from './src/YouTubeVideoList'
import EknowledgeMuseum from './src/EknowledgeMuseum'
import Homeek from './src/Homeek'
import Sliders from './src/Sliders'
import Articles from './src/Articles'
import Profile from './src/Profile'
import Research from './src/Research'
import Books from './src/Books'
import ImageGallery from './src/ImageGallery'
import Awards from './src/Awards'
import Achivements from './src/Achivements'
import PublicOpinion from './src/PublicOpinion'
import Speeches from './src/Speeches'
import Museum from './src/Museum'
import Contact from './src/Contact'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const apiKey = 'AIzaSyAVc97C88LOXUetgpbvMJJoolJjjLPTyBU'
const channelId = 'UCML9aPPHwigTRBJrx-9b1Uw'
const results = 50

class App extends Component {
  static navigationOptions = {
  	headerTitle: 'PROF.(DR.) SOHAN RAJ TATER E-KNOWLEDGE MUSEUM',
    headerStyle: {
      backgroundColor: '#ef94d5'
    },
    headerTitleStyle: {
        color: '#9e0472',
        fontSize: 14.5
    }
  }


  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    fetch(`https://www.googleapis.com/youtube/v3/search/?key=${apiKey}&channelId=${channelId}&part=snippet,id&maxResults=${results}&type=playlist`)    
    .then(res => res.json())
    .then(res => {
      const videoId = []
      res.items.forEach(item => {
        videoId.push(item)
      })
      this.setState({
        data: videoId
      }) 
    })
    .catch(error => {
      console.error(error)
    })
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.body}>
            {this.state.data.map((item, i) => 
           	<TouchableHighlight 
              key={item.id.playlistId} 
              onPress={() => navigate('YouTubeVideoList', {
                playlistId: item.id.playlistId, 
                channelId: item.id.channelId, 
                youtubeKey: apiKey,
                videoPage: 0
                })}>
              {/* onPress={() => this.props.navigation.navigate('YoutubeVideo', {youtubeId: item.id.playlistId})}> */}
              <View style={styles.vids}>
                <Image 
                  source={{uri: item.snippet.thumbnails.medium.url}} 
                  style={{width: 320, height: 180}}/>
                <View style={styles.vidItems}>
                  <Image 
                    source={require('./images/drsohan.jpg')} 
                    style={{width: 40, height: 40, borderRadius: 20, marginRight: 5}}/>
                  <Text style={styles.vidText}>{item.snippet.title}</Text>
                </View>
              </View>              	
            </TouchableHighlight>
            )}
          </View>
        </ScrollView>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItems}  onPress={() => navigate('Home')}>
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
    paddingBottom: 10,
    width: 320,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'    
  },
  vidItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10
  },
  vidText: {
    padding: 20,
    color: '#9e0472'
  },
  tabBar: {
    backgroundColor: '#fff',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabItems: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5
  },
  tabTitle: {
    fontSize: 11,
    color: '#9e0472',
    paddingTop: 4
  }
})

export default screens = StackNavigator({
  Home: { screen: App },
  YouTubeVideo: { screen: YouTubeVideo },
  YouTubeVideoList: { screen: YouTubeVideoList },
  EknowledgeMuseum: { screen: EknowledgeMuseum },
  Homeek: { screen: Homeek },
  Sliders: { screen: Sliders },
  Articles: { screen: Articles },
  Profile: { screen: Profile },
  Research: { screen: Research },
  Books: { screen: Books },
  ImageGallery: { screen: ImageGallery },
  Awards: { screen: Awards },
  Achivements: { screen: Achivements },
  PublicOpinion: { screen: PublicOpinion },
  Speeches: { screen: Speeches },
  Museum: { screen: Museum },
  Contact: { screen: Contact }
})