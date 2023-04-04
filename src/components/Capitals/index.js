import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeSelectId: countryAndCapitalsList[0].id,
  }

  gettingCountryName = () => {
    const {activeSelectId} = this.state
    const getCountryname = countryAndCapitalsList.find(
      eachItem => eachItem.id === activeSelectId,
    )
    return getCountryname.country
  }

  onSelectingInput = event => {
    this.setState({
      activeSelectId: event.target.value,
    })
  }

  render() {
    const {activeSelectId} = this.state

    const countryName = this.gettingCountryName(activeSelectId)

    return (
      <div className="main-bg-container">
        <div className="card-container">
          <h1 className="main-heading">Countries And Capitals</h1>
          <div className="input-container">
            <select
              id="isSelected"
              className="select-container"
              onChange={this.onSelectingInput}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="isSelected" className="input-label">
              is capital of which country?
            </label>
          </div>
          <p className="country-name">{countryName}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
