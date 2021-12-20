import classnames from 'classnames';
import React, { useCallback, useLayoutEffect } from 'react';
import styles from './editor.lazy.scss';

const ALLOWED_BLOCKS = [
	'uagb/forms-name',
	'uagb/forms-email',
	'uagb/forms-hidden',
	'uagb/forms-phone',
	'uagb/forms-textarea',
	'uagb/forms-url',
	'uagb/forms-select',
	'uagb/forms-radio',
	'uagb/forms-checkbox',
	'uagb/forms-toggle',
	'uagb/forms-date',
	'uagb/forms-accept',
];

import { InnerBlocks } from '@wordpress/block-editor';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;

	const { attributes, deviceType } = props;
	const {
		block_id,
		submitButtonText,
		buttonSize,
		reCaptchaEnable,
		reCaptchaType,
		reCaptchaSecretKeyV2,
		reCaptchaSiteKeyV2,
	} = attributes;

	const onSubmitClick = useCallback( ( e ) => {
		e.preventDefault();
	} );

	const renderButtonHtml = () => {
		return (
			<button
				onClick={ onSubmitClick }
				className="uagb-forms-main-submit-button"
			>
				{ submitButtonText }
			</button>
		);
	};

	return (
		<>
			<div
				className={ classnames(
					'uagb-forms__outer-wrap',
					`uagb-block-${ block_id }`,
					`uagb-forms__${ buttonSize }-btn`,
					`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`
				) }
			>
				<form
					className="uagb-forms-main-form"
					name={ `uagb-form-${ block_id }` }
				>
					<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
					<div className="uagb-forms-form-hidden-data">
						{ reCaptchaEnable && (
							<input
								type="hidden"
								id="g-recaptcha-response"
								className="uagb-forms-recaptcha"
							/>
						) }
					</div>

					{ reCaptchaEnable &&
						'v2' === reCaptchaType &&
						reCaptchaSiteKeyV2 &&
						reCaptchaSecretKeyV2 && (
							<>
								<div
									className="g-recaptcha uagb-forms-field-set"
									data-sitekey={ reCaptchaSiteKeyV2 }
								></div>
								<div
									className={ `uagb-form-reacaptcha-error-${ block_id }` }
								></div>
							</>
						) }
						{ renderButtonHtml() }
				</form>
			</div>
		</>
	);
};

export default React.memo( Render );
