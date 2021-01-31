import React, { Component } from 'react';
import Item from '../Item/Item';
import classes from './ProsCons.module.css';

class ProsConsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prosList: [''],
			consList: [''],
		};
		this.onInputChange = this.onInputChange.bind(this);
		this.renderList = this.renderList.bind(this);
	}

	onInputChange(arr) {
		return (val, id) => {
			if (arr.length === id + 1) {
				arr.push('');
			}
			arr[id] = val;
			for (let i = 0; i < arr.length - 1; i++) {
				if (arr[i] === '') {
					arr.splice(i, 1);
					i--;
				}
			}
			this.setState({ arr });
		};
	}

	renderList(arr) {
		return (value, key) => (
			<div key={key}>
				<Item
					key={key}
					value={value}
					changeInput={this.onInputChange(arr)}
					index={key}
				/>
			</div>
		);
	}

	render() {
		const { prosList, consList } = this.state;

		return (
			<div className={classes.ProsConsTable}>
				<div className={classes.ProsColumn}>
					{prosList.map(this.renderList(prosList))}
				</div>
				<div className={classes.ConsColumn}>
					{consList.map(this.renderList(consList))}
				</div>
			</div>
		);
	}
}

export default ProsConsList;
