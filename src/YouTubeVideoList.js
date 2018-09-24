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
  ActivityIndicator 
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import YouTube from 'react-native-youtube'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const results = 50
export default class YouTubeVideoList extends React.Component{
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
          data: null,
          nextPageToken: null,
          prevPageToken: null,
          totalVideos: null,
          remainingVideos: null
        }
    }

    componentDidMount(){
        let key = this.props.navigation.state.params.youtubeKey;
        let channelId = this.props.navigation.state.params.channelId;
        let playlistId = this.props.navigation.state.params.playlistId;
        let videoPage = this.props.navigation.state.params.videoPage;

        let url = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${key}&channelId=${channelId}&part=snippet,id&order=date&playlistId=${playlistId}&maxResults=${results}`;
        if(this.props.navigation.state.params.nextPageToken){
            url += `&pageToken=${this.props.navigation.state.params.nextPageToken}`
        }else if(this.props.navigation.state.params.prevPageToken){
            url += `&pageToken=${this.props.navigation.state.params.prevPageToken}`
        }
        
        fetch(url)    
        .then(res => res.json())
        .then(res => {
            const videoId = []
            res.items.forEach(item => {
                videoId.push(item)
            })
            this.setState({
                data: videoId,
                prevPageToken: (res.prevPageToken) ? res.prevPageToken : null,
                nextPageToken: (res.nextPageToken) ? res.nextPageToken : null,
                totalVideos: (res.pageInfo.totalResults) ? res.pageInfo.totalResults : null,
                remainingVideos: (res.pageInfo.totalResults && (res.pageInfo.totalResults - ((videoPage+1)*results))>0) ? (res.pageInfo.totalResults - ((videoPage+1)*results)) : 0
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
                        {this.state.data.map((item, i) =>                             
                            <TouchableHighlight 
                            key={item.snippet.resourceId.videoId} 
                            onPress={() => navigate('YouTubeVideo', {
                                youtubeId: item.snippet.resourceId.videoId, 
                                apiKey: this.props.navigation.state.params.youtubeKey})}>                                              
                                <View style={styles.vids}>
                                    {item.snippet && item.snippet.thumbnails && item.snippet.thumbnails.medium && item.snippet.thumbnails.medium.url &&
                                        <Image 
                                        source={{uri: item.snippet.thumbnails.medium.url}} 
                                        style={{width: 320, height: 180}}/>
                                    }
                                    <View style={styles.vidItems}>
                                        <Image 
                                            source={require('../images/drsohan.jpg')} 
                                            style={{width: 40, height: 40, borderRadius: 20, marginRight: 5}}/>
                                        <Text style={styles.vidText}>{item.snippet.title}</Text>
                                    </View>
                                </View>                                          
                            </TouchableHighlight>                            
                        )}
                        
                        <View style={styles.tabBar}>
                            {this.state.prevPageToken &&
                                <TouchableHighlight key="previous" style={styles.tabItems}> 
                                        <Text style={styles.tabTitleTW} onPress={() => navigate('YouTubeVideoList', {
                                            playlistId: this.props.navigation.state.params.playlistId, 
                                            channelId: this.props.navigation.state.params.channelId, 
                                            youtubeKey: this.props.navigation.state.params.youtubeKey,
                                            prevPageToken: this.state.prevPageToken,
                                            videoPage: (this.props.navigation.state.params.videoPage-1)
                                            })}>Previous</Text>                                    
                                </TouchableHighlight>
                            }
                            {this.state.prevPageToken && this.state.nextPageToken &&
                                <Text style={styles.tabSpace}>    </Text>
                            }
                            {this.state.nextPageToken &&
                                <TouchableHighlight key="next" style={styles.tabItems}>                                    
                                    <Text style={styles.tabTitleTW} onPress={() => navigate('YouTubeVideoList', {
                                        playlistId: this.props.navigation.state.params.playlistId, 
                                        channelId: this.props.navigation.state.params.channelId, 
                                        youtubeKey: this.props.navigation.state.params.youtubeKey,
                                        nextPageToken: this.state.nextPageToken,
                                        videoPage: (this.props.navigation.state.params.videoPage+1)
                                        })}>Next</Text>
                                </TouchableHighlight> 
                            }
                        </View>
                        {this.state.totalVideos &&
                            <TouchableHighlight key="pageInfo">
                                <View style={styles.vids}>
                                    <Text style={styles.pageHeading}>Total Videos: {this.state.totalVideos}</Text>
                                    <Text style={styles.pageHeading}>Remaining Videos: {this.state.remainingVideos}</Text>
                                </View>
                            </TouchableHighlight>
                        }
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
        )}
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
        padding: 20
    },
    vids: {
        paddingBottom: 10,
        width: 320,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    photo: {
        paddingTop: 6,
        paddingBottom: 6,
        width: 320,
        backgroundColor: '#fff',
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

