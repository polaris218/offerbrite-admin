import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import ReactTable from 'react-table';
import PageTitle from 'components/PageTitle';
import TabBar from 'components/UI/TabBar';
import Tab from 'components/UI/Tab';
import StaticTable from 'components/UI/StaticTable';
import Checkbox from 'components/Checkbox';
import Button from 'components/UI/Button';
import styles from './styles.module.scss';

import { actions as settingsActions } from 'reducers/settings';

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
    const {
      usersTable,
      companiesTable,
      offersTable,
      onChangeUsersTableSettings,
      onChangeCompaniesTableSettings,
      onChangeOffersTableSettings,
    } = this.props;

    const createCheckboxes = (settings, onClickAction) => settings.map(item => (
      <Checkbox
        label={item.label}
        checked={item.value}
        onClick={() => onClickAction(item.label)}
      />
    ));

    const tablesSettings = [
      {
        header: 'Users',
        data: createCheckboxes(usersTable, onChangeUsersTableSettings),
      },
      {
        header: 'Companies',
        data: createCheckboxes(companiesTable, onChangeCompaniesTableSettings),
      },
      {
        header: 'Offers',
        data: createCheckboxes(offersTable, onChangeOffersTableSettings),
      },
    ];

    return (
      <div className={styles.Settings}>
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
        <div className={styles.Settings__content}>
          {
            activeTab === tabs._1 ?
              <Button onClick={() => alert('Hi')}>Add admin</Button> :
              <StaticTable columns={tablesSettings} />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usersTable: state.settings.users,
  companiesTable: state.settings.companies,
  offersTable: state.settings.offers,
});

const mapDispatchToProps = dispatch => ({
  onChangeUsersTableSettings: setting => dispatch(settingsActions.onChangeUsersTableSettings(setting)),
  onChangeCompaniesTableSettings: setting => dispatch(settingsActions.onChangeCompaniesTableSettings(setting)),
  onChangeOffersTableSettings: setting => dispatch(settingsActions.onChangeOffersTableSettings(setting)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
