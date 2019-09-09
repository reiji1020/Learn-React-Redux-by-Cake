import { createMuiTheme } from '@material-ui/core';
import pink from '@material-ui/core/colors/pink';
import amber from '@material-ui/core/colors/amber';

const commonStyle = () =>
	createMuiTheme({
		palette: {
			primary: {
				main: pink[300],
			},
			secondary: {
				main: amber[400],
			},
		},
		spacing: 4,
	});

export default commonStyle;
