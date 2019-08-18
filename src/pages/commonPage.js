import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import commonStyle from '../const/commonStyle';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CakeIcon from '@material-ui/icons/Cake';
import KitchenIcon from '@material-ui/icons/Kitchen';
import CakeList from './cakeList';
import MaterialList from './materialList';
import { ThemeProvider } from '@material-ui/styles';

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

export default function CommonPage() {
	const [ value, setValue ] = React.useState(0);
	const theme = commonStyle();

	function handleChange(event, newValue) {
		setValue(newValue);
	}

	function handleChangeIndex(index) {
		setValue(index);
	}

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
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					textColor="primary"
					variant="fullWidth"
					aria-label="full width tabs example"
				>
					<Tab label="販売ケーキ一覧" icon={<CakeIcon />} {...a11yProps(0)} />
					<Tab label="在庫管理" icon={<KitchenIcon />} {...a11yProps(1)} />
				</Tabs>
			</AppBar>
			<SwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				<div value={value} index={0} dir={theme.direction}>
					<CakeList />
				</div>
				<div value={value} index={1} dir={theme.direction}>
					<MaterialList />
				</div>
			</SwipeableViews>
		</ThemeProvider>
	);
}
