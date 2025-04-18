import React from 'react';
import { Link } from 'react-router-dom';
import PostStatistics from './PostStatistics';
import UserComments from './UserComments';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <h1>Admin Dashboard</h1>
        <PostStatistics />
        <UserComments />
        <div className="dashboard-links">
          <Link to="/admin/posts">Manage Posts</Link>
          <Link to="/admin/comments">Moderate Comments</Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;