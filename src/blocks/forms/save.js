/**
 * BLOCK: Forms - Save Block
 */

import classnames from 'classnames';

import { InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props;

	const {
		block_id,
		submitButtonText,
		confirmationType,
		confirmationMessage,
		failedMessage,
		reCaptchaEnable,
		reCaptchaType,
		reCaptchaSiteKeyV2,
		reCaptchaSecretKeyV2,
		buttonSize,
	} = attributes;

	const renderButtonHtml = () => {
		return (
			<button className="uagb-forms-main-submit-button">
				{ submitButtonText }
			</button>
		);
	};

	return (
		<div
			className={ classnames(
				'uagb-forms__outer-wrap',
				`uagb-block-${ block_id }`,
				`uagb-forms__${ buttonSize }-btn`
			) }
		>
			<form
				className="uagb-forms-main-form"
				method="post"
				name={ `uagb-form-${ block_id }` }
			>
				<InnerBlocks.Content />
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
			{ 'message' === confirmationType && (
				<>
					<div
						className={ classnames(
							`uagb-forms-success-message-${ block_id }`,
							'uagb-forms-submit-message-hide'
						) }
					>
						{ confirmationMessage }
					</div>
					<div
						className={ classnames(
							`uagb-forms-failed-message-${ block_id }`,
							'uagb-forms-submit-message-hide'
						) }
					>
						{ failedMessage }
					</div>
				</>
			) }
		</div>
	);
}
