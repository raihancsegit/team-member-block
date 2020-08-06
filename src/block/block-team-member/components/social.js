/**
 * Social Media Icons
 */
const { __ } = wp.i18n;
const { Component } = wp.element;

/**
 * Create an SocialIcons wrapper Component
 */
export default class SocialIcons extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {
		const {
			attributes: {
				blockTheme,
				socialBgColor
			},
			setAttributes,
		} = this.props;
		//const socialBg = (blockTheme == 'theme3') ? socialBgColor : 'inherit';
		return (
			<div className="team-icon"
				style = {{
					background:socialBgColor,
				}}
			>
					{ this.props.attributes.website &&
						!! this.props.attributes.website.length && (

								<a
									href={ this.props.attributes.website }
									target="_blank"
									rel="noopener noreferrer"
									style={ {
										color: this.props.attributes
											.profileLinkColor,
									} }
								>
									{ __( 'Website', 'team-blocks' ) }{ ' ' }
									<i

										className="fa fa-link"
									></i>
								</a>
						) }

					{ this.props.attributes.twitter &&
						!! this.props.attributes.twitter.length && (

								<a
									href={ this.props.attributes.twitter }
									target="_blank"
									rel="noopener noreferrer"
									style={ {
										color: this.props.attributes
											.profileLinkColor,
									} }
								>

									<i

										className="fab fa-twitter"
									></i>
								</a>

						) }

					{ this.props.attributes.facebook &&
						!! this.props.attributes.facebook.length && (

								<a
									href={ this.props.attributes.facebook }
									target="_blank"
									rel="noopener noreferrer"
									style={ {
										color: this.props.attributes
											.profileLinkColor,
									} }
								>
									<i

										className="fab fa-facebook-f"
									></i>
								</a>

						) }

					{ this.props.attributes.instagram &&
						!! this.props.attributes.instagram.length && (

								<a
									href={ this.props.attributes.instagram }
									target="_blank"
									rel="noopener noreferrer"
									style={ {
										color: this.props.attributes
											.profileLinkColor,
									} }
								>
									<i

										className="fab fa-instagram"
									></i>
								</a>

						) }

					{ this.props.attributes.pinterest &&
						!! this.props.attributes.pinterest.length && (

								<a
									href={ this.props.attributes.pinterest }
									target="_blank"
									rel="noopener noreferrer"
									style={ {
										color: this.props.attributes
											.profileLinkColor,
									} }
								>
									<i

										className="fab fa-pinterest"
									></i>
								</a>

						) }

					{ this.props.attributes.google &&
						!! this.props.attributes.google.length && (

								<a
									href={ this.props.attributes.google }
									target="_blank"
									rel="noopener noreferrer"
									style={ {
										color: this.props.attributes
											.profileLinkColor,
									} }
								>
									<i

										className="fab fa-google"
									></i>
								</a>

						) }

					{ this.props.attributes.youtube &&
						!! this.props.attributes.youtube.length && (

								<a
									href={ this.props.attributes.youtube }
									target="_blank"
									rel="noopener noreferrer"
									style={ {
										color: this.props.attributes
											.profileLinkColor,
									} }
								>
									<i

										className="fab fa-youtube"
									></i>
								</a>

						) }

					{ this.props.attributes.linkedin &&
						!! this.props.attributes.linkedin.length && (

								<a
									href={ this.props.attributes.linkedin }
									target="_blank"
									rel="noopener noreferrer"
									style={ {
										color: this.props.attributes
											.profileLinkColor,
									} }
								>
									<i

										className="fab fa-linkedin"
									></i>
								</a>

						) }

					{ this.props.attributes.github &&
						!! this.props.attributes.github.length && (

								<a
									href={ this.props.attributes.github }
									target="_blank"
									rel="noopener noreferrer"
									style={ {
										color: this.props.attributes
											.profileLinkColor,
									} }
								>
									<i
										className="fab fa-github"
									></i>
								</a>

						) }

					{ this.props.attributes.wordpress &&
						!! this.props.attributes.wordpress.length && (

								<a
									href={ this.props.attributes.wordpress }
									target="_blank"
									rel="noopener noreferrer"
									style={ {
										color: this.props.attributes
											.profileLinkColor,
									} }
								>
									<i

										className="fab fa-wordpress-simple"
									></i>
								</a>

						) }

					{ this.props.attributes.email &&
						!! this.props.attributes.email.length && (

								<a
									href={ this.props.attributes.email }
									target="_blank"
									rel="noopener noreferrer"
									style={ {
										color: this.props.attributes
											.profileLinkColor,
									} }
								>
									<i

										className="far fa-envelope"
									></i>
								</a>

						) }

			</div>
		);
	}
}
