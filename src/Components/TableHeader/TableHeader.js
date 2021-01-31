import React from 'react';
import classes from './tableHeader.module.css';

export const TalbleHeader = (props) => {
	return (
		<div className={classes.TableHeader}>
			<div className={classes.TableHeaderPros}>Pros</div>
			<div className={classes.TableHeaderCons}>Cons</div>
		</div>
	);
};
