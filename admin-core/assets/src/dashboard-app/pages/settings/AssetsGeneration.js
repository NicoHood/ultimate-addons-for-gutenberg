import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const AssetsGeneration = () => {

    const dispatch = useDispatch();

    const enableFileGeneration = useSelector( ( state ) => state.enableFileGeneration );
    const fileGenerationStatus = 'disabled' === enableFileGeneration ? false : true;

    const updateFileGenerationStatus = () => {
        
        let assetStatus;
		if ( enableFileGeneration === 'disabled' ) {
            assetStatus = 'enabled';
		} else {
            assetStatus = 'disabled';
		}
        
        dispatch( {type: 'UPDATE_FILE_GENERATION', payload: assetStatus } );

		const action = 'uag_enable_file_generation',
			nonce = uag_react.enable_file_generation_nonce;

		const formData = new window.FormData();

		formData.append( 'action', action );
		formData.append( 'security', nonce );
		formData.append( 'value', assetStatus );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
		} );
    };

    return (
        <section className='flex border-b border-solid border-slate-200'>
            <div className='pr-16 pb-8 w-4/5'>
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                    {__( 'File Generation', 'ultimate-addons-for-gutenberg' )}
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                    { __( 'Ultimate Addons for Gutenberg loads the CSS and JS inline on the page by default. If you want to generate separate CSS and JS files for UAG blocks, enable this option. Please read ', 'ultimate-addons-for-gutenberg' ) }
                    <a className='text-blue-600' href="https://www.ultimategutenberg.com/clean-html-with-uag/?utm_source=uag-dashboard&utm_medium=link&utm_campaign=uag-dashboard"> { __( 'this article', 'ultimate-addons-for-gutenberg' ) } </a>
                    {__( ' to learn the difference between generating CSS and JS inline and in a separate file.', 'ultimate-addons-for-gutenberg' )}
                </p>
            </div>
            <div>
                <Switch
                    checked={fileGenerationStatus}
                    onChange={updateFileGenerationStatus}
                    className={classNames(
                        fileGenerationStatus ? 'bg-indigo-600' : 'bg-gray-200',
                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                    >
                    <span
                        aria-hidden="true"
                        className={classNames(
                        fileGenerationStatus ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        )}
                    />
                </Switch>
            </div>
        </section>
    );
};

export default AssetsGeneration;