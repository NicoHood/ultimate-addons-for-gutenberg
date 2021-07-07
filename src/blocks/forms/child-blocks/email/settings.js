import React from 'react';
import { __ } from '@wordpress/i18n';

import { InspectorControls } from '@wordpress/block-editor';

import { ToggleControl, TextControl, PanelBody } from '@wordpress/components';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { required, placeholder } = attributes;

	const nameInspectorControls = () => {
		return (
			<PanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
				className="uagb__url-panel-body"
			>
				<ToggleControl
					label={ __( 'Required', 'ultimate-addons-for-gutenberg' ) }
					checked={ required }
					onChange={ () => setAttributes( { required: ! required } ) }
				/>
				<TextControl
					label="Placeholder"
					value={ placeholder }
					onChange={ ( value ) =>
						setAttributes( { placeholder: value } )
					}
					placeholder={ __(
						'Placeholder',
						'ultimate-addons-for-gutenberg'
					) }
				/>
			</PanelBody>
		);
	};

	return (
		<>
			<InspectorControls>{ nameInspectorControls() }</InspectorControls>
		</>
	);
};
export default React.memo( Settings );