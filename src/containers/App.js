import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import Picker from '../components/Picker';
import Posts from '../components/Posts';

const App = React.createClass({
  componentDidMount: function () {
    const {dispatch, selectedReddit} = this.props;
    dispatch(fetchPosts(selectedReddit));
  },

  componentWillReceiveProps: function (nextProps) {
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const {dispatch, selectedReddit} = nextProps;
      dispatch(fetchPosts(selectedReddit));
    }
  },
  handleChange: function (selected) {
    this.props.dispatch({
      'type': 'SELECT_REDDIT',
      selectedReddit: selected
    });
  },

  render: function () {
    const {selectedReddit, options, posts} = this.props;
    return <div>
      <Picker value={selectedReddit}
        onChange={this.handleChange}
        options={options} />
      <Posts posts={posts} />
    </div>;
  }
});

function mapStateToProps (state) {
  return {
    selectedReddit: state.selectedReddit,
    options: state.pickeroptions,
    posts: state.posts
  };
}

export default connect(mapStateToProps)(App);
