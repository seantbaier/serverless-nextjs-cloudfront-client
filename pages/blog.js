import { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

// import components

// Actions

const Blog = (props) => {
  return (
    <div>
      <div>
        <h1 className="dashboard-title">Blog</h1>
      </div>
    </div>
  )

  return null
}

Blog.getInitialProps = ({ store, pathname, query }) => {}

const mapStateToProps = (state) => {}

const mapDispatchToProps = (dispatch) => ({})

export default compose(connect(mapStateToProps, mapDispatchToProps))(Blog)
