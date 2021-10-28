/**
 * BLOCK: TextArea Block
 */

 import classnames from "classnames"
 import attributes from './attributes';
 import { __ } from '@wordpress/i18n';
 import { RichText } from '@wordpress/block-editor';
 
 const deprecated = [
     {
         attributes,
         save( props ) {
	
            const { attributes } = props
            
            const {
                block_id,
                textareaRequired,
                textareaName,
                rows,
                placeholder
            } = attributes
            
            const isRequired = (textareaRequired) ? __("required", 'ultimate-addons-for-gutenberg') : "";
            
            return (
                <div className={ classnames(
                    "uagb-forms-textarea-wrap",
                    "uagb-forms-field-set",
                    `uagb-block-${ block_id }`,
                    ) }>
                    <RichText.Content
                    tagName="div"
                    value={ textareaName }
                    className={`uagb-forms-textarea-label ${isRequired} uagb-forms-input-label`}
                    id={ block_id }			
                    />
                    <textarea required={ textareaRequired } className="uagb-forms-textarea-input uagb-forms-input" rows={rows} placeholder={placeholder} name={ block_id } ></textarea>
                    </div>
            )
        }
    }
 ];
 
 export default deprecated;