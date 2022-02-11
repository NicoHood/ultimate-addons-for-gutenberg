import { applyFilters } from '@wordpress/hooks';
import { useRef, useEffect  } from '@wordpress/element';

const InspectorTab = ( props ) => {
	const { children, isActive, type } = props;
	const tabRef = useRef( null );

	const tabContent = function () {
		return applyFilters(
			`uag_${ type }_tab_content`,
			'',
			props.parentProps
		);
	};

	const uagLastOpenedState = JSON.parse(localStorage.getItem('uagLastOpenedState')) || {};
	const {
		inspectorTabName,
		panelBodyClass,
		settingsPopup
	} = uagLastOpenedState;

	useEffect( () => {
		// This code is to fix the side-effect of the editor responsive click settings panel refresh issue.
		if ( inspectorTabName && type === inspectorTabName && panelBodyClass ) {
			let panelToActivate = tabRef.current.querySelector(`.${uagLastOpenedState.panelBodyClass}`);

			if ( panelToActivate && ! panelToActivate.classList.contains('is-opened') ) {
				panelToActivate.querySelector( '.components-button' ).click();

				if ( settingsPopup ) {
					let settingsPopupToActivate = panelToActivate.querySelector( '.uag-typography-options' );
					console.log(panelToActivate);
					console.log(settingsPopupToActivate);

					if ( settingsPopupToActivate && ! settingsPopupToActivate.classList.contains('active') ) {
						console.log(settingsPopupToActivate);
						settingsPopupToActivate.querySelector( '.components-button' ).click();
					}
				}
			}
		}
	}, [] );

	return (
		<div
			style={ {
				display: isActive ? 'block' : 'none',
			} }
			className={ `uagb-inspector-tab uagb-tab-content-${ type }` }
			ref={tabRef}
		>
			{ Array.isArray( children )
				? children.map( ( item ) => item )
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
}
