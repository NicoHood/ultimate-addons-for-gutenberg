/**
 * Demo Control Block.
 */

// Import block dependencies and components
import classnames from 'classnames';
import styling from "./styling"
import renderSVG from "@Controls/renderIcon"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import UAGBIcon from "@Controls/UAGBIcon.json"
import UAGB_Block_Icons from "@Controls/block-icons"
import AdvancedPopColorControl from '../../advanced-pop-color-control'
import AlignButtonsControl from '../../components/align-buttons-control'
import InspectorTabs from '../../components/inspector-tabs/InspectorTabs.js'
import InspectorTab from '../../components/inspector-tabs/InspectorTab.js'
import DimensionsControl from '../../components/dimention-control';
import Range from '../../components/range/Range.js';

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"

// Setup the block

import { __ } from '@wordpress/i18n';

const {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	RichText,
	ColorPalette,
} = wp.blockEditor

const {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
} = wp.components

const {
	Component,
	Fragment,
} = wp.element

let svg_icons = Object.keys( UAGBIcon )

class UAGBInlineNoticeEdit extends Component {

	constructor() {

		super( ...arguments )
		this.update_cookie_id = this.update_cookie_id.bind(this)
	}

	update_cookie_id( value ) {
		const { getCurrentPostId } = wp.data.select("core/editor");
		const post_id = getCurrentPostId().toString();
		const timestamp = new Date().getTime();

		this.props.setAttributes( { c_id: post_id + '-' + timestamp } )
		this.props.setAttributes( { cookies: value } )
	}

	componentDidMount() {
		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		//Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-demo-control-style-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
	}

	componentDidUpdate( prevProps ) {
		var element = document.getElementById( "uagb-demo-control-style-" + this.props.clientId.substr( 0, 8 ) )

		if( null !== element && undefined !== element ) {
			element.innerHTML = styling( this.props )
		}
	}

	render() {

		// Setup the attributes
		const {
			attributes: {
				block_id,
				icon,
				noticeTitle,
				noticeContent,
				noticeDismiss,
				cookies,
				close_cookie_days,
				textColor,
				titleColor,
				noticeColor,
				contentBgColor,
				noticeDismissColor,
				noticeAlignment,
				titleFontFamily,
				titleFontWeight,
				titleFontSubset,
				titleFontSizeType,
				titleLineHeightType,
				titleFontSize,
				titleFontSizeTablet,
				titleFontSizeMobile,
				titleLineHeight,
				titleLineHeightTablet,
				titleLineHeightMobile,
				descFontFamily,
				descFontWeight,
				descFontSubset,
				descFontSize,
				descFontSizeType,
				descFontSizeTablet,
				descFontSizeMobile,
				descLineHeight,
				descLineHeightType,
				descLineHeightTablet,
				descLineHeightMobile,
				titleLoadGoogleFonts,
				descLoadGoogleFonts,
				contentVrPadding,
				contentHrPadding,
				titleVrPadding,
				titleHrPadding,
				tabletPadding,
				mobilePadding,
				padding,
				headingTag,
				layout,
				highlightWidth,
				color,
				colorClass,
				paddingUnit,
				paddingTop,
				paddingBottom,
				paddingLeft,
				paddingRight,
				paddingTopTablet,
				paddingRightTablet,
				paddingBottomTablet,
				paddingLeftTablet,
				paddingTopMobile,
				paddingRightMobile,
				paddingBottomMobile,
				paddingLeftMobile,
			},
			setAttributes,
			className,
			attributes,
		} = this.props;

	   	// Notice dismiss options
		const noticeDismissOptions = [
			{ value: '', label: __( 'Allow Always', 'ultimate-addons-for-gutenberg' ) },
			{
				value: 'uagb-dismissable',
				label: __( 'Allow to Dismiss', 'ultimate-addons-for-gutenberg' ),
			},
		];

		let loadTitleGoogleFonts;
		let loadDescriptionGoogleFonts;


		if( true === titleLoadGoogleFonts ) {
			
			const hconfig = {
				google: {
					families: [ titleFontFamily + ( titleFontWeight ? ':' + titleFontWeight : '' ) ],
				},
			};

			loadTitleGoogleFonts = (
				<WebfontLoader config={ hconfig }>
				</WebfontLoader>
			)
		}

		if( true === descLoadGoogleFonts ) {

			const sconfig = {
				google: {
					families: [ descFontFamily + ( descFontWeight ? ':' + descFontWeight : '' ) ],
				},
			};

			loadDescriptionGoogleFonts = (
				<WebfontLoader config={ sconfig }>
				</WebfontLoader>
			)
		}

		let image_icon_html = ''

		if ( noticeDismiss ) {
			image_icon_html = <span className="uagb-notice-dismiss">{ renderSVG(icon) }</span>
		}

		

		const inlineGeneralSettings = () => {
			return (
				<InspectorTabs>
				<InspectorTab key={'general'}>
				<PanelBody title="" initialOpen={true}>
					<AlignButtonsControl
						label={ __( 'Alignment', 'ultimate-addons-for-gutenberg' ) }
						className="uagb--help-tip-alignment-title"
						value={ noticeAlignment }
						onChange={ ( value ) =>
							setAttributes( { noticeAlignment: value } )
						}
					/>
					<div className="uag-toggle-wrap">
					<label className="uag-toggle-label">{ __( "Toggle off", 'ultimate-addons-for-gutenberg' )  }</label>
					<ToggleControl
							checked={ cookies }
							onChange={ this.update_cookie_id }
					/>
					</div>
					<Range 
						value={contentVrPadding} 
						onChange={val => setAttributes({ contentVrPadding: parseInt(val) })}
						min={0} 
						max={100} 
					/>
					<h2>{ __( "Typography", 'ultimate-addons-for-gutenberg' ) }</h2>
		            <TypographyControl
							label={ __( "Title", 'ultimate-addons-for-gutenberg' ) }
							attributes = { attributes }
							setAttributes = { setAttributes }
							loadGoogleFonts = { { value: titleLoadGoogleFonts, label: 'titleLoadGoogleFonts' } }
							fontFamily = { { value: titleFontFamily, label: 'titleFontFamily' } }
							fontWeight = { { value: titleFontWeight, label: 'titleFontWeight' } }
							fontSubset = { { value: titleFontSubset, label: 'titleFontSubset' } }
							fontSizeType = { { value: titleFontSizeType, label: 'titleFontSizeType' } }
							fontSize = { { value: titleFontSize, label: 'titleFontSize' } }
							fontSizeMobile = { { value: titleFontSizeMobile, label: 'titleFontSizeMobile' } }
							fontSizeTablet= { { value: titleFontSizeTablet, label: 'titleFontSizeTablet' } }
							lineHeightType = { { value: titleLineHeightType, label: 'titleLineHeightType' } }
							lineHeight = { { value: titleLineHeight, label: 'titleLineHeight' } }
							lineHeightMobile = { { value: titleLineHeightMobile, label: 'titleLineHeightMobile' } }
							lineHeightTablet= { { value: titleLineHeightTablet, label: 'titleLineHeightTablet' } }
						/>
				</PanelBody>
				<PanelBody title="Layout" initialOpen={false}>
					<SelectControl
						label={ __( "Types", 'ultimate-addons-for-gutenberg' ) }
						value={ layout }
						onChange={ ( value ) => setAttributes( { layout: value } ) }
						options={ [
							{ value: "modern", label: __( "Modern", 'ultimate-addons-for-gutenberg' ) },
							{ value: "simple", label: __( "Default", 'ultimate-addons-for-gutenberg' ) },							
						] }
					/>
					{ "simple" == layout  &&
						<RangeControl
							label={ __( "Highlight width", 'ultimate-addons-for-gutenberg' ) }
							value={ highlightWidth }
							onChange={ ( value ) => setAttributes( { highlightWidth: value } ) }
							min={ 0 }
							max={ 50 }
							allowReset
						/>
					}
					<h2>{ __( "Primary Heading", 'ultimate-addons-for-gutenberg' ) }</h2>
					<SelectControl
						label={ __( "Tag" ) }
						value={ headingTag }
						onChange={ ( value ) => setAttributes( { headingTag: value } ) }
						options={ [
							{ value: "h1", label: __( "H1",'ultimate-addons-for-gutenberg' ) },
							{ value: "h2", label: __( "H2", 'ultimate-addons-for-gutenberg' ) },
							{ value: "h3", label: __( "H3", 'ultimate-addons-for-gutenberg' ) },
							{ value: "h4", label: __( "H4", 'ultimate-addons-for-gutenberg' ) },
							{ value: "h5", label: __( "H5", 'ultimate-addons-for-gutenberg' ) },
							{ value: "h6", label: __( "H6", 'ultimate-addons-for-gutenberg' ) },
							{ value: "span", label: __( "span", 'ultimate-addons-for-gutenberg' ) },
							{ value: "p", label: __( "p", 'ultimate-addons-for-gutenberg' ) },
						] }
					/>
					<SelectControl
							label={ __( 'Notice Display', 'ultimate-addons-for-gutenberg' ) }
							options={ noticeDismissOptions }
							value={ noticeDismiss }
							onChange={ ( value ) =>
								this.props.setAttributes( {
									noticeDismiss: value,
								} )
							}
					/>
					{ noticeDismiss &&
						<Fragment>
							<p className="components-base-control__label">{__( "Icon", 'ultimate-addons-for-gutenberg' )}</p>
							<FontIconPicker
								icons={svg_icons}
								renderFunc= {renderSVG}
								theme="default"
								value={icon}
								onChange={ ( value ) => setAttributes( { icon: value } ) }
								isMulti={false}
								noSelectedPlaceholder= { __( "Select Icon", 'ultimate-addons-for-gutenberg' ) }
							/>
						</Fragment>
					}
					{ noticeDismiss &&
						<hr className="uagb-editor__separator" />
					}
					{ noticeDismiss &&
						<ToggleControl
							label={ __( "Enable Cookies", 'ultimate-addons-for-gutenberg' ) }
							checked={ cookies }
							onChange={ this.update_cookie_id }
						/>
					}
					{ cookies &&
						<RangeControl
							label={ __( "Show Closed Notice After (Days)", 'ultimate-addons-for-gutenberg' ) }
							value={ close_cookie_days }
							onChange={ ( value ) => setAttributes( { close_cookie_days: value } ) }
							min={ 0 }
							max={ 50 }
							allowReset
						/>
					}
				</PanelBody>
				<PanelBody title="Spacing" initialOpen={false}>
					<DimensionsControl { ...this.props }
							type={ 'padding' }
							label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
							help={ __( 'Space inside of the container.', 'ultimate-addons-for-gutenberg' ) }
							valueTop={ paddingTop }
							valueRight={ paddingRight }
							valueBottom={ paddingBottom }
							valueLeft={ paddingLeft }
							valueTopTablet={ paddingTopTablet }
							valueRightTablet={ paddingRightTablet }
							valueBottomTablet={ paddingBottomTablet }
							valueLeftTablet={ paddingLeftTablet }
							valueTopMobile={ paddingTopMobile }
							valueRightMobile={ paddingRightMobile }
							valueBottomMobile={ paddingBottomMobile }
							valueLeftMobile={ paddingLeftMobile }
							unit={ paddingUnit }
						/>
				</PanelBody>
				</InspectorTab>
				<InspectorTab key={'style'}>
				<PanelBody title="Colors" initialOpen={true}>
					 <AdvancedPopColorControl
						label={ __( 'Title Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ ( titleColor ? titleColor : '' ) }
						colorDefault={ '' }
						onColorChange={ value => setAttributes( { titleColor: value } ) }
						onColorClassChange={ value => setAttributes( { colorClass: value } ) }
					/>
					<AdvancedPopColorControl
						label={ __( 'Highlight Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ ( noticeColor ? noticeColor : '' ) }
						colorDefault={ '' }
						onColorChange={ value => setAttributes( { noticeColor: value } ) }
						onColorClassChange={ value => setAttributes( { colorClass: value } ) }
					/>
					<AdvancedPopColorControl
						label={ __( 'Content Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ ( textColor ? textColor : '' ) }
						colorDefault={ '' }
						onColorChange={ value => setAttributes( { textColor: value } ) }
						onColorClassChange={ value => setAttributes( { colorClass: value } ) }
					/>
					<AdvancedPopColorControl
						label={ __( 'Content Background Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ ( contentBgColor ? contentBgColor : '' ) }
						colorDefault={ '' }
						onColorChange={ value => setAttributes( { contentBgColor: value } ) }
						onColorClassChange={ value => setAttributes( { colorClass: value } ) }
					/>
					{ noticeDismiss &&
					<AdvancedPopColorControl
						label={ __( 'Dismiss Icon Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ ( noticeDismissColor ? noticeDismissColor : '' ) }
						colorDefault={ '' }
						onColorChange={ value => setAttributes( { noticeDismissColor: value } ) }
						onColorClassChange={ value => setAttributes( { colorClass: value } ) }
					/>
					}
				</PanelBody>
				</InspectorTab>
				<InspectorTab key={'advance'}>
				</InspectorTab>
				</InspectorTabs>
				)
			}

		// 			<hr className="uagb-editor__separator" />
		// 			<h2>{ __( "Typography", 'ultimate-addons-for-gutenberg' ) }</h2>
		// 				<TypographyControl
		// 					label={ __( "Title", 'ultimate-addons-for-gutenberg' ) }
		// 					attributes = { attributes }
		// 					setAttributes = { setAttributes }
		// 					loadGoogleFonts = { { value: titleLoadGoogleFonts, label: 'titleLoadGoogleFonts' } }
		// 					fontFamily = { { value: titleFontFamily, label: 'titleFontFamily' } }
		// 					fontWeight = { { value: titleFontWeight, label: 'titleFontWeight' } }
		// 					fontSubset = { { value: titleFontSubset, label: 'titleFontSubset' } }
		// 					fontSizeType = { { value: titleFontSizeType, label: 'titleFontSizeType' } }
		// 					fontSize = { { value: titleFontSize, label: 'titleFontSize' } }
		// 					fontSizeMobile = { { value: titleFontSizeMobile, label: 'titleFontSizeMobile' } }
		// 					fontSizeTablet= { { value: titleFontSizeTablet, label: 'titleFontSizeTablet' } }
		// 					lineHeightType = { { value: titleLineHeightType, label: 'titleLineHeightType' } }
		// 					lineHeight = { { value: titleLineHeight, label: 'titleLineHeight' } }
		// 					lineHeightMobile = { { value: titleLineHeightMobile, label: 'titleLineHeightMobile' } }
		// 					lineHeightTablet= { { value: titleLineHeightTablet, label: 'titleLineHeightTablet' } }
		// 				/>
		// 				<TypographyControl
		// 					label={ __( "Content", 'ultimate-addons-for-gutenberg' ) }
		// 					attributes = { attributes }
		// 					setAttributes = { setAttributes }
		// 					loadGoogleFonts = { { value: descLoadGoogleFonts, label: 'descLoadGoogleFonts' } }
		// 					fontFamily = { { value: descFontFamily, label: 'descFontFamily' } }
		// 					fontWeight = { { value: descFontWeight, label: 'descFontWeight' } }
		// 					fontSubset = { { value: descFontSubset, label: 'descFontSubset' } }
		// 					fontSizeType = { { value: descFontSizeType, label: 'descFontSizeType' } }
		// 					fontSize = { { value: descFontSize, label: 'descFontSize' } }
		// 					fontSizeMobile = { { value: descFontSizeMobile, label: 'descFontSizeMobile' } }
		// 					fontSizeTablet= { { value: descFontSizeTablet, label: 'descFontSizeTablet' } }
		// 					lineHeightType = { { value: descLineHeightType, label: 'descLineHeightType' } }
		// 					lineHeight = { { value: descLineHeight, label: 'descLineHeight' } }
		// 					lineHeightMobile = { { value: descLineHeightMobile, label: 'descLineHeightMobile' } }
		// 					lineHeightTablet= { { value: descLineHeightTablet, label: 'descLineHeightTablet' } }
		// 				/>
		// 				<hr className="uagb-editor__separator" />
		// 				<h2>{ __( "Title Padding (px)", 'ultimate-addons-for-gutenberg' ) }</h2>
		// 				<RangeControl
		// 					label={ UAGB_Block_Icons.vertical_spacing }
		// 					className={ "uagb-margin-control" }
		// 					value={ titleVrPadding }
		// 					onChange={ ( value ) => setAttributes( { titleVrPadding: value } ) }
		// 					min={ 0 }
		// 					max={ 50 }
		// 					allowReset
		// 				/>
		// 				<RangeControl
		// 					label={ UAGB_Block_Icons.horizontal_spacing }
		// 					className={ "uagb-margin-control" }
		// 					value={ titleHrPadding }
		// 					onChange={ ( value ) => setAttributes( { titleHrPadding: value } ) }
		// 					min={ 0 }
		// 					max={ 50 }
		// 					allowReset
		// 				/>
		// 				<hr className="uagb-editor__separator" />
		// 				<h2>{ __( "Content Padding (px)", 'ultimate-addons-for-gutenberg' ) }</h2>
		// 				<RangeControl
		// 					label={ UAGB_Block_Icons.vertical_spacing }
		// 					className={ "uagb-margin-control" }
		// 					value={ contentVrPadding }
		// 					onChange={ ( value ) => setAttributes( { contentVrPadding: value } ) }
		// 					min={ 0 }
		// 					max={ 50 }
		// 					allowReset
		// 				/>
		// 				<RangeControl
		// 					label={ UAGB_Block_Icons.horizontal_spacing }
		// 					className={ "uagb-margin-control" }
		// 					value={ contentHrPadding }
		// 					onChange={ ( value ) => setAttributes( { contentHrPadding: value } ) }
		// 					min={ 0 }
		// 					max={ 50 }
		// 					allowReset
		// 				/>
		// 		</PanelBody>
		// 	)
		// }
		
		return (
			<Fragment>
				<BlockControls key="controls">
					<AlignmentToolbar
						value={ noticeAlignment }
						onChange={ ( value ) =>
							setAttributes( { noticeAlignment: value } )
						}
					/>
				</BlockControls>
				<InspectorControls>
				{ inlineGeneralSettings() }
				</InspectorControls>
				<div className={ classnames(
					className,
					"uagb-inline_notice__outer-wrap",
					`${ noticeDismiss }`,
					`uagb-inline_notice__align-${ noticeAlignment }`,
					`uagb-block-${ block_id }`
					) }
				>
					{ image_icon_html }
					<RichText
						tagName={ headingTag }
						placeholder={ __( 'Notice Title', 'ultimate-addons-for-gutenberg' ) }
						keepPlaceholderOnFocus
						value={ noticeTitle }
						className='uagb-notice-title'
						onChange={ ( value ) =>
							setAttributes( { noticeTitle: value } )
						}
					/>
					<RichText
						tagName="div"
						multiline="p"
						placeholder={ __( 'Add notice text...', 'ultimate-addons-for-gutenberg' ) }
						value={ noticeContent }
						className='uagb-notice-text'
						onChange={ ( value ) =>
							setAttributes( { noticeContent: value } )
						}
					/>
				</div>
				{ loadTitleGoogleFonts }
				{ loadDescriptionGoogleFonts }
			</Fragment>
		)
	}
}

export default UAGBInlineNoticeEdit