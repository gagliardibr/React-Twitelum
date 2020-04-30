import React, { Component, Fragment } from 'react';
import Cabecalho from '../../components/Cabecalho'
import NavMenu from '../../components/NavMenu'
import Dashboard from '../../components/Dashboard'
import Widget from '../../components/Widget'
import TrendsArea from '../../components/TrendsArea'
import Tweet from '../../components/Tweet'
import EmpatyState from '../../components/EmptyState'

class Home extends Component {

    componentDidMount() {
        fetch(`https://twitelum-api.herokuapp.com/tweets?X-AUTH-TOKEN=${localStorage.getItem('TOKEN')}`)
        .then(response => response.json())
        .then((tweets, showEmptyState) => {
            this.setState({
                tweets,
                showEmptyState
            })
        })
    }

    render() {
        return (
            <Fragment>
                <Cabecalho>
                    <NavMenu usuario="@omariosouto" />
                </Cabecalho>
                <div className="container">
                    <Dashboard>
                        <Widget>
                            <form className="novoTweet" onSubmit={this.adicionaTweet}>
                                <div className="novoTweet_editorArea">
                                    <span className={`novoTweet_status
                                    ${ this.state.novoTweet.length > 140
                                            ? 'novoTweet_status-invalido' : ''}
                                    `}> {this.state.novoTweet.length}/140
                                </span>
                                    <textarea
                                        className="novoTweet_editor"
                                        value={this.state.novoTweet}
                                        onInput={(event) => this.setState({ novoTweet: event.target.value })}
                                        placeholder="O que está acontecendo?">
                                    </textarea>
                                </div>
                                <button className="novoTweet_envia"
                                    disabled={this.state.novoTweet.length > 140 ? true : false}
                                    type="submit">
                                    Tweetar
                                </button>
                            </form>
                        </Widget>
                        <Widget>
                            <TrendsArea />
                        </Widget>
                    </Dashboard>
                    <Dashboard posicao="centro">
                        <Widget>
                            <div className="tweetsArea">
                                {this.state.showEmptyState && <EmpatyState />}
                                {this.state.tweets.map(
                                    (tweetInfo, index) =>
                                        <Tweet
                                            key={tweetInfo._id}
                                            texto={tweetInfo.conteudo}
                                            tweetInfo={tweetInfo}
                                        />
                                )}
                            </div>
                        </Widget>
                    </Dashboard>
                </div>
            </Fragment >
        );
    }

    constructor() {
        super();
        this.state = {
            showEmptyState: true,
            novoTweet: '',
            tweets: []
        }
        this.adicionaTweet = this.adicionaTweet.bind(this)
    }

    adicionaTweet(event) {
        event.preventDefault()
        const novoTweet = this.state.novoTweet
        const tweetAntigos = this.state.tweets
        if (novoTweet) {
            fetch(`https://twitelum-api.herokuapp.com/tweets?X-AUTH-TOKEN=${localStorage.getItem('TOKEN')}`
                , {
                    method: 'POST',
                    body: JSON.stringify({ conteudo: novoTweet })
                })
                .then(response => response.json())
                .then((novoTweetRegistradoNoServer) => {
                    this.setState({
                        tweets: [novoTweetRegistradoNoServer, ...tweetAntigos],
                        novoTweet: '',
                        showEmptyState: false
                    })
                })

        }
    }
}



export default Home;
