import React, { Component, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { connect } from 'react-redux'
import commonStyle from '../const/commonStyle';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CakeIcon from '@material-ui/icons/Cake';
import KitchenIcon from '@material-ui/icons/Kitchen';
import { ThemeProvider } from '@material-ui/styles';
import ListTable from '../components/listTable';
import CakeListSetting from '../const/cakeListSetting';
import MaterialListSetting from '../const/cakeListSetting';

// Reducer
import { setCakeStock, sellShortCake } from '../action/cakeListActions';

function mapStateToProps(state) {
    return { cakeProps: state }
}

class CommonPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
		}
		this.props.dispatch(setCakeStock(CakeListSetting.initialList))
	}

	a11yProps(index) {
		return {
			id: `full-width-tab-${index}`,
			'aria-controls': `full-width-tabpanel-${index}`,
		};
	}

	handleChange() {
		this.setState({
			value: this.state.value === 0 ? 1 : 0,
		});
	}

	handleChangeIndex(index) {
		this.setState({
			value: index,
		});
	}

	render() {
		const theme = commonStyle();
		const { cakeProps } = this.props;
		return (
			<ThemeProvider theme={theme}>
				{/* AppBar */}
				<AppBar position="static" color="primary">
					<Toolbar>
						<Typography variant="h6" color="inherit">
							CANDY CHUPS Patisserie.
						</Typography>
					</Toolbar>
				</AppBar>
				{/* main contents */}
				<AppBar position="static" color="default">
					<Tabs
						value={this.state.value}
						onChange={()=>this.handleChange()}
						indicatorColor="primary"
						textColor="primary"
						variant="fullWidth"
						aria-label="full width tabs example"
					>
						<Tab label="販売ケーキ一覧" icon={<CakeIcon />} {...this.a11yProps(0)} />
						<Tab label="在庫管理" icon={<KitchenIcon />} {...this.a11yProps(1)} />
					</Tabs>
				</AppBar>
				<SwipeableViews
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={this.state.value}
					onChangeIndex={()=>this.handleChange()}
				>
					<div value={this.state.value} index={0} dir={theme.direction}>
						<ListTable tableSetting={CakeListSetting.tableSetting} data={cakeProps.cakeList} sellHandlar={this.sellCake}/>
					</div>
					<div value={this.state.value} index={1} dir={theme.direction}>
						<ListTable tableSetting={MaterialListSetting.tableSetting} data={MaterialListSetting.initialList} />
					</div>
				</SwipeableViews>
			</ThemeProvider>
		);
	}
}

export default connect(mapStateToProps)(CommonPage)