import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ReactTable from 'react-table';
import PageTitle from 'components/PageTitle';
import TabBar from 'components/UI/TabBar';
import Tab from 'components/UI/Tab';
import Button from 'components/UI/Button';
import styles from './styles.module.scss';

const tabs = {
  _1: 'Admins',
  _2: 'Charts',
};

class Settings extends Component {
  state = {
    activeTab: tabs._1,
  }

  handleTabClick = tab => {
    this.setState({ activeTab: tab });
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div>
        <PageTitle title="Settings" />
        <TabBar>
          <Tab
            active={activeTab === tabs._1}
            title={tabs._1}
            onClick={() => this.handleTabClick(tabs._1)}
          />
          <Tab
            active={activeTab === tabs._2}
            title={tabs._2}
            onClick={() => this.handleTabClick(tabs._2)}
          />
        </TabBar>
        <Button onClick={() => alert('Hi')}>Add admin</Button>
      </div>
    );
  }
}

export default connect()(Settings);
