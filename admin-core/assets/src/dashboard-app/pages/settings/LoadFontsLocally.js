import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const LoadFontsLocally = () => {

    const dispatch = useDispatch();

    const enableLoadFontsLocally = useSelector( ( state ) => state.enableLoadFontsLocally );
    const enableLoadFontsLocallyStatus = 'disabled' === enableLoadFontsLocally ? false : true;

    const updateLoadFontsLocallyStatus = () => {
        
        let assetStatus;
		if ( enableLoadFontsLocally === 'disabled' ) {
            assetStatus = 'enabled';
		} else {
            assetStatus = 'disabled';
		}
        
        dispatch( {type: 'UPDATE_ENABLE_LOAD_FONTS_LOCALLY', payload: assetStatus } );

		const formData = new window.FormData();

		formData.append( 'action', 'uag_load_gfonts_locally' );
		formData.append(
			'security',
			uag_react.load_gfonts_locally_nonce
		);
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
                    {__( 'Load Google Fonts Locally', 'ultimate-addons-for-gutenberg' )}
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                    { __( 'Enable the "Load Google Fonts Locally" option to serve Google fonts from your server (locally). It will simply download the selected Google fonts and host those Google fonts locally on your WordPress site.', 'ultimate-addons-for-gutenberg' ) }
                </p>
            </div>
            <div>
                <Switch
                    checked={enableLoadFontsLocallyStatus}
                    onChange={updateLoadFontsLocallyStatus}
                    className={classNames(
                        enableLoadFontsLocallyStatus ? 'bg-indigo-600' : 'bg-gray-200',
                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                    >
                    <span
                        aria-hidden="true"
                        className={classNames(
                        enableLoadFontsLocallyStatus ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        )}
                    />
                </Switch>
            </div>
        </section>
    );
};

export default LoadFontsLocally;