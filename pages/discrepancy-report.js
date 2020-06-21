import { Component } from 'react'
import amplifyCustomUi from '../utilities/custom-auth-ui-config'

// import components
import DefaultLayout from '../components/DefaultLayout/DefaultLayout'

class DiscrepancyReport extends Component {
  async componentDidMount() {}

  render() {
    const { authState } = this.props

    if (authState === 'signedIn') {
      return (
        <div>
          <div className="main-section-container">
            <DefaultLayout>
              <div>Discrepancy Report</div>
            </DefaultLayout>
          </div>
        </div>
      )
    } else {
      Auth.signOut()
    }
    return null
  }
}
export default amplifyCustomUi.withAuthenticator(DiscrepancyReport)
