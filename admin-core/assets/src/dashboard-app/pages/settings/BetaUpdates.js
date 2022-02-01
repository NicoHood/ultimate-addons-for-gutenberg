import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const BetaUpdates = () => {

    const dispatch = useDispatch();

    const enableBeta = useSelector( ( state ) => state.enableBeta );
    const enableBetaStatus = 'no' === enableBeta ? false : true;

    const updateEnableBetaStatus = () => {
        
        let assetStatus;
		if ( enableBeta === 'no' ) {
            assetStatus = 'yes';
		} else {
            assetStatus = 'no';
		}
        
        dispatch( {type: 'UPDATE_BETA', payload: assetStatus } );

		const formData = new window.FormData();

		formData.append( 'action', 'uag_enable_beta_updates' );
		formData.append( 'security', uag_react.enable_beta_updates_nonce );
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
                    {__( 'Enable Beta', 'ultimate-addons-for-gutenberg' )}
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                    { __( 'Enable this option to turn on beta updates and be notified when a new beta version of Ultimate Addons for Gutenberg is available. The beta version will not install automatically, you will have to install it when you get a notification. It is recommended to try beta on a test environment only.', 'ultimate-addons-for-gutenberg' ) }
                </p>
            </div>
            <div>
                <Switch
                    checked={enableBetaStatus}
                    onChange={updateEnableBetaStatus}
                    className={classNames(
                        enableBetaStatus ? 'bg-indigo-600' : 'bg-gray-200',
                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                    >
                    <span
                        aria-hidden="true"
                        className={classNames(
                        enableBetaStatus ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        )}
                    />
                </Switch>
            </div>
        </section>
    );
};

export default BetaUpdates;