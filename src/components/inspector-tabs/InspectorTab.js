import { applyFilters } from '@wordpress/hooks';
import React, { lazy, Suspense, useEffect } from 'react';
const InspectorTab = ( props ) => {
	const { children, isActive, type } = props;

	const tabContent = function () {
		return applyFilters(
			`uag_${ type }_tab_content`,
			'',
			props.parentProps
		);
	};

	let uagLastOpenedState = JSON.parse(localStorage.getItem('uagLastOpenedState'));

	const modifyChildren = (child) => {
        const props = {
            'initialOpen' : true
        };
        return React.cloneElement(child, props);
    }
	console.log(type);
console.log(uagLastOpenedState);
	return (
		<div
			style={ {
				display: isActive ? 'block' : 'none',
			} }
			className={ `uagb-inspector-tab uagb-tab-content-${ type }` }
		>
			{ Array.isArray( children )
				? children.map( ( item, index ) => {
console.log(uagLastOpenedState);
console.log(index);

					if ( uagLastOpenedState && index === uagLastOpenedState?.panelBodyIndex ) {
						console.log('inin');
						return modifyChildren(item);
					}

					return item;
				})
				: children }
			{ tabContent() }
		</div>
	);
};

export default InspectorTab;

export const UAGTabs = {
	general: {
		key: 'general',
		type: 'general',
	},
	style: {
		key: 'style',
		type: 'style',
	},
	advance: {
		key: 'advance',
		type: 'advance',
	},
};
