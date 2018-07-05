import React, { Component } from 'react'
import MatchesAccountHeader from './MatchesAccountHeader'
import MatchesList from './MatchesList'
import Match from '../models/Match'
import Account from '../models/Account'

const latestSeason = 11

class MatchesPage extends Component {
  constructor(props) {
    super(props)
    this.state = { totalMatches: 0 }
  }

  componentDidMount() {
    const { dbAccounts, accountID } = this.props
    Account.find(dbAccounts, accountID).then(account => {
      this.setState(prevState => ({ account }))
    })
  }

  onMatchCreation = () => {
    this.setState(prevState => ({ totalMatches: prevState.totalMatches + 1 }))
  }

  onMatchesLoad = totalMatches => {
    this.setState(prevState => ({ totalMatches }))
  }

  render() {
    const { dbMatches, accountID } = this.props
    const { totalMatches, account } = this.state

    return (
      <div className="container layout-children-container">
        <MatchesAccountHeader
          account={account}
          season={latestSeason}
          activePage="matches"
        />
        <MatchesList
          totalMatches={totalMatches}
          db={dbMatches}
          onLoad={this.onMatchesLoad}
        />
      </div>
    )
  }
}

export default MatchesPage