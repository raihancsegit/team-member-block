/**
 * Internal dependencies
 */
import classnames from 'classnames';
import ProfileBox from './profile';
import SocialIcons from './social';
import AvatarColumn from './avatar';

import Theme1_4 from './SaveTheme/theme1-4'
import Theme5 from './SaveTheme/theme5'
import Theme6 from './SaveTheme/theme6'
/**
 * WordPress dependencies
 */
const { Component ,Fragment} = wp.element;
const { RichText } = wp.blockEditor;

export default class Save extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		const {
			profileName,
			profileTitle,
			profileContent,
			profileImgURL,
			profileImgAlt,
			profileImgID,
			profileNameColor,
			profileBackgroundColor,
			profileAvatarShape,
			paddingTop,
			paddingBottom,
			profileNameSize,
			profileAvatarPosition,
			profileAlignment,
			sectionWidth,
			blockTheme,
			imageWidth,
			imageHeight
		} = this.props.attributes;

		return (
			<Fragment>
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
