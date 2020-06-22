import { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import amplifyCustomUi from '../../utilities/custom-auth-ui-config'

// import components
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout'
import SalesForceReportsList from '../../components/SalesforceReports/SalesforceReportsList'

// Actions
import { getPlatformDataContractCheckAction } from '../../store/actions/platformDataContractCheck'

const SalesforceReports = (props) => {
  const { authState } = props

  console.log('sss props: ', props)

  if (authState === 'signedIn') {
    return (
      <div>
        <div>
          <DefaultLayout>
            <h1 className="dashboard-title">Salesforce Reports</h1>
            <SalesForceReportsList />
          </DefaultLayout>
        </div>
      </div>
    )
  } else {
    Auth.signOut()
  }
  return null
}

SalesforceReports.getInitialProps = ({ store, pathname, query }) => {
  console.log('store: ', store)
  return { custom: 'custom' }
}

const mapStateToProps = (state) => {
  return {
    platformDataContractCheck: state.platformDataContractCheck.find
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlatformDataContractCheck: dispatch(getPlatformDataContractCheckAction())
})

export default amplifyCustomUi.withAuthenticator(
  compose(connect(mapStateToProps, mapDispatchToProps))(SalesforceReports)
)
