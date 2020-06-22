import { compose } from 'redux'
import { connect } from 'react-redux'

// import components

// Actions

const Post = (props) => {
  return (
    <div>
      <div>
        <h1 className="dashboard-title">Post</h1>
      </div>
    </div>
  )
}

Post.getInitialProps = ({ store, pathname, query }) => {}

const mapStateToProps = (state) => {}

const mapDispatchToProps = (dispatch) => ({})

export default compose(connect(mapStateToProps, mapDispatchToProps))(Post)
