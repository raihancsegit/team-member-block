/**
 * Inspector Controls.
 */

/**
 * Internal dependencies.
 */
import RenderSettingControl from '../../../utils/components/settings/renderSettingControl';



/* Setup the block. */
const { __ } = wp.i18n;
const { Component } = wp.element;

/* Import block components. */
const { InspectorControls, PanelColorSettings } = wp.blockEditor;

/* Import Inspector components. */
const { PanelBody, RangeControl, SelectControl, TextControl, RadioControl} = wp.components;
import { Radio,Tabs } from 'antd';
const { TabPane } = Tabs;

import { Avatar,Button} from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { AiOutlineAlignCenter } from 'react-icons/ai';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { AiOutlineAlignRight } from 'react-icons/ai';
import { FiCircle } from "react-icons/fi";
import { FiSquare } from "react-icons/fi";
//import image1 from '../img/image1.png';
//import image1 from '../img/1.svg'
/* Create an Inspector Controls wrapper Component. */
export default class Inspector extends Component {
	constructor( props ) {
		super( ...arguments );
	}

	render() {
		/* Setup the attributes. */
		const {
			profileNameSize,
			profileBackgroundColor,
			profileTextColor,
			profileLinkColor,
			twitter,
			facebook,
			instagram,
			pinterest,
			google,
			youtube,
			github,
			linkedin,
			wordpress,
			email,
			website,
			profileAvatarShape,
			profileAvatarPosition,
			paddingTop,
			paddingBottom,
			profileNameColor,
			profileNameBottomSpace,
			profileDesignationsize,
			profileAlignment,
			sectionWidth,
			blockTheme,
			socialBgColor,
			imageWidth,
			imageHeight
		} = this.props.attributes;
		const { setAttributes } = this.props;

		/* Avatar shape options. */
		const profileAvatarShapeOptions = [
			{ value: 'round', label: __( 'Round', 'team-blocks' ) },
			{ value: 'square', label: __( 'Square', 'team-blocks' ) },
		];

		const profileAvatarShapePosition = [
			{ value: 'top', label: __( 'Top', 'team-blocks' ) },
			{ value: 'left', label: __( 'Left', 'team-blocks' ) },
		];

		/* Update color values. */
		const onChangeBackgroundColor = ( value ) =>
			setAttributes( { profileBackgroundColor: value } );
		const onChangeProfileTextColor = ( value ) =>
			setAttributes( { profileTextColor: value } );
		const onChangeSocialLinkColor = ( value ) =>
			setAttributes( { profileLinkColor: value } );
		const onChangeSocialBgColor = ( value ) =>
			setAttributes( { socialBgColor: value } );
		const onChangeProfileNameColor = (value) => {
			setAttributes({ profileNameColor:value})
		}

		return (
			<div className="custom-control-section">
				<InspectorControls key="inspector">
					<RenderSettingControl id="team-section">
						<PanelBody
							title={ __( 'Team Section', 'team-blocks' ) }
							initialOpen={ true }
						>
							<RadioControl
								label={ __( 'Select Theme', 'gshare' ) }
								className="theme-preview-placehold"
								selected={ blockTheme }
								options={ [
									{ label: 'Theme 1', value: 'theme1' },
									{ label: 'Theme 3', value: 'theme3' },
									{ label: 'Theme 2', value: 'theme2' },
									{ label: 'Theme 4', value: 'theme4' },
									{ label: 'Theme 5', value: 'theme5' },
									{ label: 'Theme 6', value: 'theme6' },
								] }
								onChange={ ( value ) => {
									// if( value != 'theme2' && value != 'theme3' ){
										setAttributes( { blockTheme: value, modifiedTheme: false } )
									//}
								 } }
							/>

							{blockTheme == 'theme1' && (
								<div className="components-base-control avatar-shape">
									<label class="components-base-control__label" for="inspector-select-control">Avatar Shape</label>

										<Radio.Group
												value={ profileAvatarShape }
												onChange={ ( e ) =>
													this.props.setAttributes( {
														profileAvatarShape: e.target.value,
													} )
												}
											>
													<Radio.Button value="square"><FiSquare size='5rem'/></Radio.Button>
													<Radio.Button value="round"><FiCircle size='5rem'/></Radio.Button>

											</Radio.Group>
									</div>
							)}

							{blockTheme == 'theme2' && (
								<div className="components-base-control avatar-shape">
									<label class="components-base-control__label" for="inspector-select-control">Avatar Shape</label>

										<Radio.Group
												value={ profileAvatarShape }
												onChange={ ( e ) =>
													this.props.setAttributes( {
														profileAvatarShape: e.target.value,
													} )
												}
											>
													<Radio.Button value="square"><FiSquare size='5rem'/></Radio.Button>
													<Radio.Button value="round"><FiCircle size='5rem'/></Radio.Button>

											</Radio.Group>
									</div>
							)}
							{blockTheme == 'theme1' && (
								<div className="components-base-control">
									<label class="components-base-control__label" for="inspector-select-control-0">Alignment</label>
										<Radio.Group
											value={ profileAlignment }
											onChange={ ( e ) =>
												this.props.setAttributes( {
													profileAlignment: e.target.value,
												} )
											}
										>
												<Radio.Button value="left"><AiOutlineAlignLeft /></Radio.Button>
												<Radio.Button value="center"><AiOutlineAlignCenter /></Radio.Button>
												<Radio.Button value="right"><AiOutlineAlignRight /></Radio.Button>
										</Radio.Group>
								</div>
							)}
							{blockTheme == 'theme2' && (
								<div className="components-base-control">
									<label class="components-base-control__label" for="inspector-select-control-0">Alignment</label>
										<Radio.Group
											value={ profileAlignment }
											onChange={ ( e ) =>
												this.props.setAttributes( {
													profileAlignment: e.target.value,
												} )
											}
										>
												<Radio.Button value="left"><AiOutlineAlignLeft /></Radio.Button>
												<Radio.Button value="center"><AiOutlineAlignCenter /></Radio.Button>
												<Radio.Button value="right"><AiOutlineAlignRight /></Radio.Button>
										</Radio.Group>
								</div>
							)}

								<RangeControl
									label={ __( 'Padding Top', 'team-blocks' ) }
									value={ paddingTop }
									onChange={ ( value ) =>
										this.props.setAttributes( {
											paddingTop: value,
										} )
									}
									min={ 0 }
									max={ 100 }
									step={ 1 }
								/>

								<RangeControl
									label={ __( 'Padding Bottom', 'team-blocks' ) }
									value={ paddingBottom }
									onChange={ ( value ) =>
										this.props.setAttributes( {
											paddingBottom: value,
										} )
									}
									min={ 0 }
									max={ 100 }
									step={ 1 }
								/>

								<PanelColorSettings
									title={ __( 'Background Color', 'team-blocks' ) }
									colorSettings={ [
										{
											value: profileBackgroundColor,
											onChange: onChangeBackgroundColor,
											label: __(
												'Background Color',
												'team-blocks'
											),
										},
									] }
								>

								</PanelColorSettings>

								<PanelColorSettings
									title={ __( 'Text Color', 'team-blocks' ) }
									colorSettings={ [
										{
											value: profileNameColor,
											onChange: onChangeProfileNameColor,
											label: __( 'Name Color', 'team-blocks' ),
										},
									] }
								>

							</PanelColorSettings>

						</PanelBody>
					</RenderSettingControl>

					<RenderSettingControl id="tm_image_setting">
							<PanelBody
									title={ __( 'Image Setting', 'team-blocks' ) }
									initialOpen={ false }
								>

								<RangeControl
									label={ __( 'Image Width', 'team-blocks' ) }
									value={ imageWidth }
									onChange={ ( value ) =>
										this.props.setAttributes( {
											imageWidth: value,
										} )
									}
									min={ 30 }
									max={ 1000 }
									step={ 1 }
								/>

								<RangeControl
									label={ __( 'Image Height', 'team-blocks' ) }
									value={ imageHeight }
									onChange={ ( value ) =>
										this.props.setAttributes( {
											imageHeight: value,
										} )
									}
									min={ 30 }
									max={ 1000 }
									step={ 1 }
								/>
							</PanelBody>

					</RenderSettingControl>

					<RenderSettingControl id="ab_author_profile_socialLinks">
						<PanelBody
							title={ __( 'Social Links', 'team-blocks' ) }
							initialOpen={ false }
						>
							<p>
								{ __(
									'Add links to your social media site and they will appear in the bottom of the profile box.',
									'team-blocks'
								) }
							</p>

							<TextControl
								label={ __( 'Twitter URL', 'team-blocks' ) }
								type="url"
								value={ twitter }
								onChange={ ( value ) =>
									this.props.setAttributes( { twitter: value } )
								}
							/>

							<TextControl
								label={ __( 'Facebook URL', 'team-blocks' ) }
								type="url"
								value={ facebook }
								onChange={ ( value ) =>
									this.props.setAttributes( { facebook: value } )
								}
							/>

							<TextControl
								label={ __( 'Instagram URL', 'team-blocks' ) }
								type="url"
								value={ instagram }
								onChange={ ( value ) =>
									this.props.setAttributes( { instagram: value } )
								}
							/>

							<TextControl
								label={ __( 'Pinterest URL', 'team-blocks' ) }
								type="url"
								value={ pinterest }
								onChange={ ( value ) =>
									this.props.setAttributes( { pinterest: value } )
								}
							/>

							<TextControl
								label={ __( 'Google URL', 'team-blocks' ) }
								type="url"
								value={ google }
								onChange={ ( value ) =>
									this.props.setAttributes( { google: value } )
								}
							/>

							<TextControl
								label={ __( 'YouTube URL', 'team-blocks' ) }
								type="url"
								value={ youtube }
								onChange={ ( value ) =>
									this.props.setAttributes( { youtube: value } )
								}
							/>

							<TextControl
								label={ __( 'Github URL', 'team-blocks' ) }
								type="url"
								value={ github }
								onChange={ ( value ) =>
									this.props.setAttributes( { github: value } )
								}
							/>

							<TextControl
								label={ __( 'LinkedIn URL', 'team-blocks' ) }
								type="url"
								value={ linkedin }
								onChange={ ( value ) =>
									this.props.setAttributes( { linkedin: value } )
								}
							/>

							<TextControl
								label={ __(
									'WordPress Profile URL',
									'team-blocks'
								) }
								type="url"
								value={ wordpress }
								onChange={ ( value ) =>
									this.props.setAttributes( { wordpress: value } )
								}
							/>

							<TextControl
								label={ __( 'Email URL', 'team-blocks' ) }
								help={ __(
									'Supports a URL or an email link. Email links must be prefixed with "mailto:". Example: mailto:test@example.com',
									'team-blocks'
								) }
								type="url"
								value={ email }
								onChange={ ( value ) =>
									this.props.setAttributes( { email: value } )
								}
							/>

							<TextControl
								label={ __( 'Website URL', 'team-blocks' ) }
								type="url"
								value={ website }
								onChange={ ( value ) =>
									this.props.setAttributes( { website: value } )
								}
							/>
						</PanelBody>
					</RenderSettingControl>



						<RenderSettingControl id="ab_author_profile_profileLinkColor">
							<PanelBody
								title={ __( 'Social Links Color', 'team-blocks' ) }
								initialOpen={ false }
							>
								<PanelColorSettings
									title={ __( 'Social Link Color', 'team-blocks' ) }
									colorSettings={ [
										{
											value: profileLinkColor,
											onChange: onChangeSocialLinkColor,
											label: __(
												'Social Link Color',
												'team-blocks'
											),
										},
									] }
								></PanelColorSettings>

							{blockTheme == 'theme3' && (
								<PanelColorSettings
									title={ __( 'Social Link BG Color', 'team-blocks' ) }
									colorSettings={ [
										{
											value: socialBgColor,
											onChange: onChangeSocialBgColor,
											label: __(
												'Social Link Color',
												'team-blocks'
											),
										},
									] }
								></PanelColorSettings>
							)}

							</PanelBody>

							</RenderSettingControl>

				</InspectorControls>
			</div>
		);
	}
}
