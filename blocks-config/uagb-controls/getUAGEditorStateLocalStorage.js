const getUAGEditorStateLocalStorage = ( key = false ) => {
	if ( ! window.localStorage ) {
		return null;
	}

	if ( ! key ) {
		return localStorage; // eslint-disable-line no-undef
	}

	const uagLastOpenedState = localStorage.getItem( 'uagLastOpenedState' ); // eslint-disable-line no-undef

	if ( uagLastOpenedState ) {

		return JSON.parse( uagLastOpenedState )
	}

	return null;
};

export default getUAGEditorStateLocalStorage;
