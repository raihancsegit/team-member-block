/**
 * Internal dependencies
 */
import classnames from 'classnames';
import Inspector from './inspector';
import ProfileBox from './profile';
import SocialIcons from './social';
import AvatarColumn from './avatar';
import icons from './../../../utils/components/icons';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;

const {
	RichText,
	AlignmentToolbar,
	BlockControls,
	MediaUpload,
} = wp.blockEditor;

const { Button, Dashicon } = wp.components;

const ALLOWED_MEDIA_TYPES = [ 'image' ];

import Theme1_4 from './EditTheme/theme1-4';
import Theme5 from './EditTheme/theme5';
import Theme6 from './EditTheme/theme6';

export default class Edit extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		const {
			attributes: {
				blockTheme,
				profileAlignment
			},
			setAttributes,
		} = this.props;

		return (
			/* Show the block alignment controls on focus */
			<Fragment>
				<BlockControls key="controls">
					<AlignmentToolbar
						value    = { profileAlignment }
						onChange = { ( value ) =>
							setAttributes( { profileAlignment: value } )
						}
					/>
				</BlockControls>

				<Inspector key={ 'tm-author-profile-inspector-' + this.props.clientId } { ...{ setAttributes, ...this.props } } />

						{blockTheme === 'theme1' && (
							<Theme1_4 {...this.props}/>
						)}

						{blockTheme === 'theme2' && (
							<Theme1_4 {...this.props}/>
						)}

						{blockTheme === 'theme3' && (
							<Theme1_4 {...this.props}/>
						)}

						{blockTheme === 'theme4' && (
							<Theme1_4 {...this.props}/>
						)}


						{blockTheme === 'theme5' && (
							<Theme5 {...this.props}/>
						)}

						{blockTheme === 'theme6' && (
							<Theme6 {...this.props}/>
						)}
				

			</Fragment>
		);
	}
}
