
/**
 * BLOCK: UAGB Form - Email Attributes
 */
 import { __ } from '@wordpress/i18n';

const attributes = {
	block_id: {
		type: "string"
	},
	name: {
        type: "string",
        default: __("Email" , 'ultimate-addons-for-gutenberg' )
	},
	required : {
        type: "boolean",
        default: false
	},
	placeholder: {
        type: "string",
        default: __( "mail@example.com" , 'ultimate-addons-for-gutenberg')
    },
}
export default attributes
