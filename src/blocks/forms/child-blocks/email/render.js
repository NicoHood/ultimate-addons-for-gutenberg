import classnames from 'classnames';
import React, { useLayoutEffect } from 'react';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';

import { RichText } from '@wordpress/block-editor';

import { ToggleControl } from '@wordpress/components';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;

	const { attributes, setAttributes, isSelected } = props;

	const { block_id, name, required, placeholder, hideLabels } = attributes;

	const isRequired = required
		? __( 'required', 'ultimate-addons-for-gutenberg' )
		: '';

	return (
		<>
			<div
				className={ classnames(
					'uagb-forms-email-wrap',
					'uagb-forms-field-set',
					`uagb-block-${ block_id }`
				) }
				data-label={'Email'}
			>
				{ isSelected && (
					<div className="uagb-forms-required-wrap">
						<ToggleControl
							label={ __(
								'Required',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ required }
							onChange={ () =>
								setAttributes( { required: ! required } )
							}
						/>
					</div>
				) }
				{ hideLabels &&
				<RichText
					tagName="div"
					placeholder={ __(
						'Email',
						'ultimate-addons-for-gutenberg'
					) }
					value={ name }
					onChange={ ( value ) => setAttributes( { name: value } ) }
					className={ `uagb-forms-email-label ${ isRequired } uagb-forms-input-label` }
					multiline={ false }
					id={ block_id }
				/>
				}
				<input
					type="text"
					className="uagb-forms-email-input uagb-forms-input"
					placeholder={ placeholder }
					required={ required }
					name={ block_id }
				/>
			</div>
		</>
	);
};
export default React.memo( Render );
