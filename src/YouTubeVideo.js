import React from 'react'
import { StyleSheet, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import YouTube from 'react-native-youtube'

export default class YouTubeVideo extends React.Component{
    static navigationOptions = {
        headerTitle: 'PROF.(DR.) SOHAN RAJ TATER E-KNOWLEDGE MUSEUM',
        headerStyle: {
            backgroundColor: '#fff'
        }, 
        headerTitleStyle: {
            color: '#9e0472',
            fontSize: 14.5
        }
    }

    render() { 
        return (
          <View style={styles.container}>
            <YouTube
                videoId={this.props.navigation.state.params.youtubeId}   
                play={true}             
                fullscreen={true}       
                loop={false}            
                apiKey={this.props.navigation.state.params.apiKey}
                onReady={e => this.setState({ isReady: true })}
                onChangeState={e => this.setState({ status: e.state })}
                onChangeQuality={e => this.setState({ quality: e.quality })}
                onError={e => this.setState({ error: e.error })}
                style={{ alignSelf: 'stretch', height: 300 }}
            />
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})

