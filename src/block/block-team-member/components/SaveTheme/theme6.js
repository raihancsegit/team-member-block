/**
 * Internal dependencies
 */
import classnames from 'classnames';
import ProfileBox from '../profile';
import SocialIcons from '../social';
import AvatarColumn from '../avatar';

/**
 * WordPress dependencies
 */
const { Component ,Fragment} = wp.element;
const { RichText } = wp.blockEditor;
export default class Theme6 extends Component {
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
				
				<div className={classnames(
					profileAvatarPosition,
					//this.props.className,
					blockTheme
				)}

				style={ {
					backgroundColor: profileBackgroundColor,
					paddingTop:paddingTop,
					paddingBottom:paddingBottom,
					textAlign:profileAlignment,
					
				} }
				>
				<div className="member-img">
					{ profileImgURL && (
							<figure className="tm-profile-image-square">
								<img
									className={ classnames(
										'tm-profile-avatar',
										'wp-image-' + profileImgID,
										profileAvatarShape
									) }
									src={ profileImgURL }
									alt={ profileImgAlt }
									style={{
										width:imageWidth,
										height:imageHeight,
									}}
								/>
							</figure>
					) }
					</div>

					<div
						className={ classnames(
							'tm-profile-column tm-profile-content-wrap member-profile'
						) }
					>
						{ profileName && (
							<RichText.Content
								tagName="h4"
								className="tm-profile-name"
								style={ {
									color: profileNameColor,
								} }
								value={ profileName }
							/>
						) }

						{ profileTitle && (
							<RichText.Content
								tagName="span"
								className="tm-profile-title"
								style={ {
									color: profileNameColor,
									
								} }
								value={ profileTitle }
							/>
						) }

						<SocialIcons { ...this.props } />
					</div>
			</div>
		</Fragment>
		);
	}
}
