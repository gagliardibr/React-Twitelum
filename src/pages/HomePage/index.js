import React, { Component, Fragment } from 'react';
import Cabecalho from '../../components/Cabecalho'
import NavMenu from '../../components/NavMenu'
import Dashboard from '../../components/Dashboard'
import Widget from '../../components/Widget'
import TrendsArea from '../../components/TrendsArea'
import Tweet from '../../components/Tweet'
import EmpatyState from '../../components/EmptyState'

class Home extends Component {
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
                                            key={tweetInfo + index}
                                            texto={tweetInfo}
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
            this.setState({
                tweets: [novoTweet, ...tweetAntigos],
                novoTweet: '',
                showEmptyState: false
            })
        }
    }
}



export default Home;
