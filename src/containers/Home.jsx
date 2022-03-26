import React, {useEffect} from 'react';
import '../../dist/style.css';
// REDUX
import { connect } from 'react-redux';
import {getData} from '../actions'
// COMPONENTES
import Search from '../components/Search'
import VideosContainer from '../components/VideosContainer'
import Video from '../components/Video'
// AXIOS
import axios from 'axios'

const Home = (props) => {

    //Esta variable nos servirá para el key de cada item
    let gameId = 0;

    const getInfo = () => {
        return (
            axios.get('https://free-football-soccer-videos.p.rapidapi.com/', {
                headers: {
                    'x-rapidapi-key': '1ce1083b19mshb223af01b151ed9p1ab9f8jsn86eec3618bd0',
                    'x-rapidapi-host': 'free-football-soccer-videos.p.rapidapi.com',
                    'useQueryString': true
                }
            }).catch( error => {
                alert(error)
            })
        )
    }

    useEffect( () => {
        let mounted = true;
        getInfo()
            .then( items => {
                if(mounted) {
                    props.getData(items.data);
                }
            })
        return () => mounted = false;
    }, [])
    
    return (
        <div className="min-h-screen bg-gray-900 font-sans">
            <Search/>
            { props.games && 
                <VideosContainer>
                    {
                        props.games.map( game => 
                            // {console.log(game.title)}
                            <Video
                                key={++gameId}
                                {...game}
                            />
                        )
                    }
                </VideosContainer>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        games: state.games[0]
    }
}

const mapDispatchToProps = {
    getData
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);