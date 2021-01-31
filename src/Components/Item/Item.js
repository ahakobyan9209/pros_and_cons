import React, { Component } from 'react';
import classes from './item.module.css';

class Item extends Component {
	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(e) {
		this.props.changeInput(e.target.value, this.props.index);
	}

	render() {
		return (
			<div>
				<span>{this.props.index + 1 + '.'}</span>
				<input
					className={classes.InputItem}
					type='text'
					value={this.props.value}
					onChange={this.handleInputChange}
					index={this.props.index}
				/>
			</div>
		);
	}
}

export default Item;
