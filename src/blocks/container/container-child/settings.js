import { InspectorControls } from '@wordpress/block-editor';
import React from 'react';
import { __ } from '@wordpress/i18n';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import ResponsiveSlider from '@Components/responsive-slider';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import ResponsiveSelectControl from '@Components/responsive-select';
import BoxShadowControl from '@Components/box-shadow';
import SpacingControl from '@Components/spacing-control';
import Background from '@Components/background';
import Border from '@Components/border';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;
	const {
		widthDesktop,
		widthTablet,
		widthMobile,
		widthType,
		minHeightDesktop,
		minHeightTablet,
		minHeightMobile,
		minHeightType,
		backgroundType,
		backgroundImage,
		backgroundColor,
		backgroundPosition,
		backgroundAttachment,
		backgroundRepeat,
		backgroundSize,
		backgroundImageColor,
		gradientValue,
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		borderHoverColor,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		topPaddingDesktop,
		bottomPaddingDesktop,
		leftPaddingDesktop,
		rightPaddingDesktop,
		topPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		rightPaddingTablet,
		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
		paddingType,
		paddingLink,
		topMarginDesktop,
		bottomMarginDesktop,
		leftMarginDesktop,
		rightMarginDesktop,
		topMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		rightMarginTablet,
		topMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		rightMarginMobile,
		marginType,
		marginLink,
	} = attributes;

	const generalSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Container', 'ultimate-addons-for-gutenberg' ) }
			>
				<ResponsiveSlider
					label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: widthDesktop,
							label: 'widthDesktop',
						},
						tablet: {
							value: widthTablet,
							label: 'widthTablet',
						},
						mobile: {
							value: widthMobile,
							label: 'widthMobile',
						},
					} }
					min={ 0 }
					max={ 1600 }
					unit={ {
						value: widthType,
						label: 'widthType',
					} }
					units={ [
						{
							name: __(
								'PX',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
						{
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
						{
							name: __( 'VW', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'vw',
						},
					] }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __( 'Height', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: minHeightDesktop,
							label: 'minHeightDesktop',
						},
						tablet: {
							value: minHeightTablet,
							label: 'minHeightTablet',
						},
						mobile: {
							value: minHeightMobile,
							label: 'minHeightMobile',
						},
					} }
					min={ 0 }
					max={ 1440 }
					unit={ {
						value: minHeightType,
						label: 'minHeightType',
					} }
					units={ [
						{
							name: __(
								'PX',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
						{
							name: __( 'VH', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'vh',
						},
					] }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const styleSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Background', 'ultimate-addons-for-gutenberg' ) }
			>
				<Background
					setAttributes={ setAttributes }
					backgroundGradient={ {
						value: gradientValue,
						label: 'gradientValue',
					} }
					backgroundImageColor={ {
						value: backgroundImageColor,
						label: 'backgroundImageColor',
					} }
					backgroundSize={ {
						value: backgroundSize,
						label: 'backgroundSize',
					} }
					backgroundRepeat={ {
						value: backgroundRepeat,
						label: 'backgroundRepeat',
					} }
					backgroundAttachment={ {
						value: backgroundAttachment,
						label: 'backgroundAttachment',
					} }
					backgroundPosition={ {
						value: backgroundPosition,
						label: 'backgroundPosition',
					} }
					backgroundImage={ {
						value: backgroundImage,
						label: 'backgroundImage',
					} }
					backgroundColor={ {
						value: backgroundColor,
						label: 'backgroundColor',
					} }
					backgroundType={ {
						value: backgroundType,
						label: 'backgroundType',
					} }
					backgroundVideoType={ {
						value: false,
					} }
					{ ...props }
				/>
				<Border
					setAttributes={ setAttributes }
					borderStyle={ {
						value: borderStyle,
						label: 'borderStyle',
						title: __( 'Style', 'ultimate-addons-for-gutenberg' ),
					} }
					borderWidth={ {
						value: borderWidth,
						label: 'borderWidth',
						title: __( 'Width', 'ultimate-addons-for-gutenberg' ),
					} }
					borderRadius={ {
						value: borderRadius,
						label: 'borderRadius',
						title: __( 'Radius', 'ultimate-addons-for-gutenberg' ),
					} }
					borderColor={ {
						value: borderColor,
						label: 'borderColor',
						title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
					} }
					borderHoverColor={ {
						value: borderHoverColor,
						label: 'borderHoverColor',
						title: __(
							'Hover Color',
							'ultimate-addons-for-gutenberg'
						),
					} }
				/>
				<BoxShadowControl
					setAttributes={ setAttributes }
					label={ __(
						'Box Shadow',
						'ultimate-addons-for-gutenberg'
					) }
					boxShadowColor={ {
						value: boxShadowColor,
						label: 'boxShadowColor',
						title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
					} }
					boxShadowHOffset={ {
						value: boxShadowHOffset,
						label: 'boxShadowHOffset',
						title: __(
							'Horizontal',
							'ultimate-addons-for-gutenberg'
						),
					} }
					boxShadowVOffset={ {
						value: boxShadowVOffset,
						label: 'boxShadowVOffset',
						title: __(
							'Vertical',
							'ultimate-addons-for-gutenberg'
						),
					} }
					boxShadowBlur={ {
						value: boxShadowBlur,
						label: 'boxShadowBlur',
						title: __( 'Blur', 'ultimate-addons-for-gutenberg' ),
					} }
					boxShadowSpread={ {
						value: boxShadowSpread,
						label: 'boxShadowSpread',
						title: __( 'Spread', 'ultimate-addons-for-gutenberg' ),
					} }
					boxShadowPosition={ {
						value: boxShadowPosition,
						label: 'boxShadowPosition',
						title: __(
							'Position',
							'ultimate-addons-for-gutenberg'
						),
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: topPaddingDesktop,
						label: 'topPaddingDesktop',
					} }
					valueRight={ {
						value: rightPaddingDesktop,
						label: 'rightPaddingDesktop',
					} }
					valueBottom={ {
						value: bottomPaddingDesktop,
						label: 'bottomPaddingDesktop',
					} }
					valueLeft={ {
						value: leftPaddingDesktop,
						label: 'leftPaddingDesktop',
					} }
					valueTopTablet={ {
						value: topPaddingTablet,
						label: 'topPaddingTablet',
					} }
					valueRightTablet={ {
						value: rightPaddingTablet,
						label: 'rightPaddingTablet',
					} }
					valueBottomTablet={ {
						value: bottomPaddingTablet,
						label: 'bottomPaddingTablet',
					} }
					valueLeftTablet={ {
						value: leftPaddingTablet,
						label: 'leftPaddingTablet',
					} }
					valueTopMobile={ {
						value: topPaddingMobile,
						label: 'topPaddingMobile',
					} }
					valueRightMobile={ {
						value: rightPaddingMobile,
						label: 'rightPaddingMobile',
					} }
					valueBottomMobile={ {
						value: bottomPaddingMobile,
						label: 'bottomPaddingMobile',
					} }
					valueLeftMobile={ {
						value: leftPaddingMobile,
						label: 'leftPaddingMobile',
					} }
					unit={ {
						value: paddingType,
						label: 'paddingType',
					} }
					mUnit={ {
						value: paddingType,
						label: 'paddingType',
					} }
					tUnit={ {
						value: paddingType,
						label: 'paddingType',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: paddingLink,
						label: 'paddingLink',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Margin', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: topMarginDesktop,
						label: 'topMarginDesktop',
					} }
					valueRight={ {
						value: rightMarginDesktop,
						label: 'rightMarginDesktop',
					} }
					valueBottom={ {
						value: bottomMarginDesktop,
						label: 'bottomMarginDesktop',
					} }
					valueLeft={ {
						value: leftMarginDesktop,
						label: 'leftMarginDesktop',
					} }
					valueTopTablet={ {
						value: topMarginTablet,
						label: 'topMarginTablet',
					} }
					valueRightTablet={ {
						value: rightMarginTablet,
						label: 'rightMarginTablet',
					} }
					valueBottomTablet={ {
						value: bottomMarginTablet,
						label: 'bottomMarginTablet',
					} }
					valueLeftTablet={ {
						value: leftMarginTablet,
						label: 'leftMarginTablet',
					} }
					valueTopMobile={ {
						value: topMarginMobile,
						label: 'topMarginMobile',
					} }
					valueRightMobile={ {
						value: rightMarginMobile,
						label: 'rightMarginMobile',
					} }
					valueBottomMobile={ {
						value: bottomMarginMobile,
						label: 'bottomMarginMobile',
					} }
					valueLeftMobile={ {
						value: leftMarginMobile,
						label: 'leftMarginMobile',
					} }
					unit={ {
						value: marginType,
						label: 'marginType',
					} }
					mUnit={ {
						value: marginType,
						label: 'marginType',
					} }
					tUnit={ {
						value: marginType,
						label: 'marginType',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: marginLink,
						label: 'marginLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<InspectorControls>
			<InspectorTabs>
				<InspectorTab { ...UAGTabs.general }>
					{ generalSettings() }
				</InspectorTab>
				<InspectorTab { ...UAGTabs.style }>
					{ styleSettings() }
				</InspectorTab>
				<InspectorTab
					{ ...UAGTabs.advance }
					parentProps={ props }
				></InspectorTab>
			</InspectorTabs>
		</InspectorControls>
	);
};

export default React.memo( Settings );