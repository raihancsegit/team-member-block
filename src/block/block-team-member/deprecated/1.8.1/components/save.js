/**
 * Internal dependencies
 */
import classnames from 'classnames';
import ProfileBox from '../../../components/profile';
import SocialIcons from '../../../components/social';
import AvatarColumn from '../../../components/avatar';

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { RichText } = wp.blockEditor;

export default class Save_1_8_1 extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		const {
			profileName,
			profileTitle,
			profileContent,
			profileImgURL,
			profileTextColor,
		} = this.props.attributes;

		return (
			/* Save the block markup for the front end */
			<ProfileBox { ...this.props }>
				{ profileImgURL && (
					<AvatarColumn { ...this.props }>
						<div className="tm-profile-image-square">
							<img
								className="tm-profile-avatar"
								src={ profileImgURL }
								alt="avatar"
							/>
						</div>
					</AvatarColumn>
				) }

				<div
					className={ classnames(
						'tm-profile-column tm-profile-content-wrap'
					) }
				>
					{ profileName && (
						<RichText.Content
							tagName="h2"
							className="tm-profile-name"
							style={ {
								color: profileTextColor,
							} }
							value={ profileName }
						/>
					) }

					{ profileTitle && (
						<RichText.Content
							tagName="p"
							className="tm-profile-title"
							style={ {
								color: profileTextColor,
							} }
							value={ profileTitle }
						/>
					) }

					{ profileContent && (
						<RichText.Content
							tagName="div"
							className="tm-profile-text"
							value={ profileContent }
						/>
					) }

					<SocialIcons { ...this.props } />
				</div>
			</ProfileBox>
		);
	}
}
