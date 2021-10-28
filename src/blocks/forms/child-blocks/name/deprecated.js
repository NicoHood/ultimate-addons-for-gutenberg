/**
 * BLOCK: Name Block
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
                nameRequired,
                name,
                placeholder
            } = attributes
            
            const isRequired = (nameRequired) ? __("required" , 'ultimate-addons-for-gutenberg'): "";
            
            return (
                <div className={ classnames(
                    "uagb-forms-name-wrap",
                    "uagb-forms-field-set",
                    `uagb-block-${ block_id }`,
                ) }>
                        <RichText.Content
                        tagName="div"
                        value={ name }
                        className={`uagb-forms-name-label ${isRequired} uagb-forms-input-label`}	
                        id={ block_id }		
                        />
                        <input type="text" placeholder={placeholder} required={ nameRequired } className="uagb-forms-name-input uagb-forms-input" name= { block_id }  />
                </div>
            )
        }
     }
 ];
 
 export default deprecated;