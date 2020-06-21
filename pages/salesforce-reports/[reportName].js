import { compose } from 'redux'
import { connect } from 'react-redux'
import amplifyCustomUi from '../../utilities/custom-auth-ui-config'
import { useRouter } from 'next/router'
import { get } from 'lodash'
import capitalize from 'capitalize'

// import components
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout'

// Actions
import { getPlatformDataContractCheckAction } from '../../store/actions/platformDataContractCheck'

const SalesforceReport = (props) => {
  const { authState } = props

  console.log('props: ', props)

  const router = useRouter()
  const reportName = capitalize.words(
    get(router, 'query.reportName', '404').replace(/-/g, ' ')
  )

  if (authState === 'signedIn') {
    return (
      <div>
        <div>
          <DefaultLayout>
            <h1 className="dashboard-title">{reportName}</h1>
          </DefaultLayout>
        </div>
      </div>
    )
  } else {
    Auth.signOut()
  }
  return null
}

SalesforceReport.getInitialProps = ({ store, pathname, query }) => {
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
  compose(connect(mapStateToProps, mapDispatchToProps))(SalesforceReport)
)
