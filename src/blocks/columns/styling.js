/**
 * Returns Dynamic Generated CSS
 */

import inlineStyles from './inline-styles';
import hexToRgba from '@Controls/hexToRgba';
import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( props ) {
	const {
		stack,
		backgroundType,
		backgroundVideoColor,
		backgroundImageColor,
		backgroundColor,
		backgroundVideoOpacity,
		contentWidth,
		width,
		widthType,
		columnGap,
		topColor,
		topHeight,
		topHeightTablet,
		topHeightMobile,
		topWidth,
		bottomColor,
		bottomHeight,
		bottomHeightTablet,
		bottomHeightMobile,
		bottomWidth,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		gradientPosition,
		topPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		rightPaddingTablet,
		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
		topMarginMobile,
		rightMarginMobile,
		leftMarginMobile,
		bottomMarginMobile,
		topMarginTablet,
		rightMarginTablet,
		leftMarginTablet,
		bottomMarginTablet,
		topDividerOpacity,
		bottomDividerOpacity,
		mobileMarginType,
		tabletMarginType,
		mobilePaddingType,
		tabletPaddingType,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		gradientValue,
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		borderHoverColor,
	} = props.attributes;

	let max_width = '100%';

	if ( 'custom' === contentWidth ) {
		if ( '' !== width ) {
			max_width = generateCSSUnit( width, widthType );
		}
	}
	let boxShadowPositionCSS = boxShadowPosition;

	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
	}

	let tabletSelectors = {};
	let mobileSelectors = {};
	const style = inlineStyles( props );

	style[ 'max-width' ] = max_width;

	const selectors = {
		'.uagb-columns__wrap': style,
		' .uagb-columns__video-wrap': {
			'opacity':
				typeof backgroundVideoOpacity !== 'undefined'
					? ( 100 - backgroundVideoOpacity ) / 100
					: 0.5,
		},
		' .uagb-column__wrap': {
			'padding': generateCSSUnit( columnGap, 'px' ),
		},
		' .uagb-columns__shape-top svg': {
			'width': 'calc( ' + topWidth + '% + 1.3px )',
			'height': generateCSSUnit( topHeight, 'px' ),
		},
		' .uagb-columns__shape-top .uagb-columns__shape-fill': {
			'fill': hexToRgba(
				topColor,
				typeof topDividerOpacity !== 'undefined'
					? topDividerOpacity
					: 100
			),
		},
		' .uagb-columns__shape-bottom svg': {
			'width': 'calc( ' + bottomWidth + '% + 1.3px )',
			'height': generateCSSUnit( bottomHeight, 'px' ),
		},
		' .uagb-columns__shape-bottom .uagb-columns__shape-fill': {
			'fill': hexToRgba(
				bottomColor,
				typeof bottomDividerOpacity !== 'undefined'
					? bottomDividerOpacity
					: 100
			),
		},
		'.wp-block-uagb-columns': {
			'box-shadow':
				generateCSSUnit( boxShadowHOffset, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowVOffset, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowBlur, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowSpread, 'px' ) +
				' ' +
				boxShadowColor +
				' ' +
				boxShadowPositionCSS,
		},
		' .uagb-columns__overlay': {
			'border-style': borderStyle,
			'border-width': generateCSSUnit( borderWidth, 'px' ),
			'border-color': borderColor,
			'border-radius': generateCSSUnit( borderRadius, 'px' ),
		},
		'.uagb-columns__wrap:hover .uagb-columns__overlay': {
			'border-color': borderHoverColor,
		},
	};

	switch ( backgroundType ) {
		case 'video':
			selectors[ ' > .uagb-columns__overlay' ] = {
				'opacity': 1,
				'background-color': backgroundVideoColor,
			};
			break;
		case 'image':
			selectors[ ' > .uagb-columns__overlay' ] = {
				'background-color': backgroundImageColor,
			};
			break;
		case 'color':
			selectors[ ' > .uagb-columns__overlay' ] = {
				'background-color': backgroundColor,
			};
			break;
		case 'gradient':
			selectors[ ' > .uagb-columns__overlay' ] = {
				'background-color': 'transparent',
			};
			if ( gradientValue ) {
				selectors[ ' > .uagb-columns__overlay' ] = {
					'background-image': gradientValue,
				};
			} else if ( 'linear' === gradientType ) {
				selectors[ ' > .uagb-columns__overlay' ] = {
					'background-image': `linear-gradient(${ gradientAngle }deg, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`,
				};
			} else {
				selectors[ ' > .uagb-columns__overlay' ] = {
					'background-image': `radial-gradient( at ${ gradientPosition }, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`,
				};
			}
			break;
	}

	tabletSelectors = {
		'.uagb-columns__wrap': {
			'padding-top': generateCSSUnit(
				topPaddingTablet,
				tabletPaddingType
			),
			'padding-bottom': generateCSSUnit(
				bottomPaddingTablet,
				tabletPaddingType
			),
			'padding-left': generateCSSUnit(
				leftPaddingTablet,
				tabletPaddingType
			),
			'padding-right': generateCSSUnit(
				rightPaddingTablet,
				tabletPaddingType
			),
			'margin-top': generateCSSUnit( topMarginTablet, tabletMarginType ),
			'margin-bottom': generateCSSUnit(
				bottomMarginTablet,
				tabletMarginType
			),
			'margin-left': generateCSSUnit(
				leftMarginTablet,
				tabletMarginType
			),
			'margin-right': generateCSSUnit(
				rightMarginTablet,
				tabletMarginType
			),
		},
		' .uagb-columns__shape-top svg': {
			'height': generateCSSUnit( topHeightTablet, 'px' ),
		},
		' .uagb-columns__shape-bottom svg': {
			'height': generateCSSUnit( bottomHeightTablet, 'px' ),
		},
	};

	mobileSelectors = {
		'.uagb-columns__wrap': {
			'padding-top': generateCSSUnit(
				topPaddingMobile,
				mobilePaddingType
			),
			'padding-bottom': generateCSSUnit(
				bottomPaddingMobile,
				mobilePaddingType
			),
			'padding-left': generateCSSUnit(
				leftPaddingMobile,
				mobilePaddingType
			),
			'padding-right': generateCSSUnit(
				rightPaddingMobile,
				mobilePaddingType
			),
			'margin-top': generateCSSUnit( topMarginMobile, mobileMarginType ),
			'margin-bottom': generateCSSUnit(
				bottomMarginMobile,
				mobileMarginType
			),
			'margin-right': generateCSSUnit(
				rightMarginMobile,
				mobileMarginType
			),
			'margin-left': generateCSSUnit(
				leftMarginMobile,
				mobileMarginType
			),
		},
		' .uagb-columns__shape-top svg': {
			'height': generateCSSUnit( topHeightMobile, 'px' ),
		},
		' .uagb-columns__shape-bottom svg': {
			'height': generateCSSUnit( bottomHeightMobile, 'px' ),
		},
	};

	if ( 'tablet' === stack ) {
		tabletSelectors[
			'.uagb-editor-preview-mode-tablet .block-editor-block-list__layout'
		] = {
			'flex-direction': 'column',
		};
		mobileSelectors[
			'.uagb-editor-preview-mode-mobile .block-editor-block-list__layout'
		] = {
			'flex-direction': 'column',
		};
	} else if ( 'mobile' === stack ) {
		mobileSelectors[
			'.uagb-editor-preview-mode-mobile .block-editor-block-list__layout'
		] = {
			'flex-direction': 'column',
		};
	}
	let stylingCss = '';
	const id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS(
		tabletSelectors,
		`${ id }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`${ id }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return stylingCss;
}

export default styling;
