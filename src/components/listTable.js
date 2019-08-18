import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

export default class ListTable extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {}
	render() {
		const { tableSetting, data } = this.props;
		return (
			<Table>
				<TableHead>
					<TableRow>
						{tableSetting.map((column) => <TableCell align="center">{column.label}</TableCell>)}
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((item) => (
						<TableRow key={item.name}>
							{tableSetting.map(
								(column) =>
									column.data === 'sell' ? (
										<TableCell align="center" component="th" scope="row">
											<Button variant="contained" color="primary">
												1つ売る
											</Button>
										</TableCell>
									) : column.data === 'refill' ? (
										<TableCell align="center" component="th" scope="row">
											<Button variant="contained" color="primary">
												1つ補充する
											</Button>
										</TableCell>
									) : (
										<TableCell align="center" component="th" scope="row">
											{item[column.data]}
										</TableCell>
									)
							)}
						</TableRow>
					))}
				</TableBody>
			</Table>
		);
	}
}
