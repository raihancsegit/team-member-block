import classnames from 'classnames';
import Inspector from '../inspector';
import ProfileBox from '../profile';
import SocialIcons from '../social';
import AvatarColumn from '../avatar';
import icons from '../../../../utils/components/icons';

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

export default class Theme1 extends Component {

    constructor() {
		super( ...arguments );
    }

	render() {
		const {
			attributes: {
				profileName,
				profileTitle,
				profileAlignment,
				profileImgURL,
				profileImgID,
				profileImgAlt,
				profileBackgroundColor,
				profileAvatarShape,
				paddingTop,
				paddingBottom,
				profileNameColor,
				profileNameSize,
				profileNameBottomSpace,
				profileDesignationsize,
				profileAvatarPosition,
				sectionWidth,
				blockTheme,
				imageWidth,
				imageHeight
			},
			setAttributes,
        } = this.props;

        return (
            <div>
                  <div className={classnames(
                        profileAvatarPosition,
                        //this.props.className,
                        blockTheme,
                    )}
                    style={{
                            backgroundColor: profileBackgroundColor,
                            paddingTop:paddingTop,
                            paddingBottom:paddingBottom,
                            textAlign:profileAlignment,
                          }}
                        >
                              <MediaUpload
                                        buttonProps={ {
                                            className: 'change-image',
                                        } }
                                        onSelect={ ( img ) =>
                                            setAttributes( {
                                                profileImgID: img.id,
                                                profileImgURL: img.url,
                                                profileImgAlt: img.alt,
                                            } )
                                        }
                                        allowed={ ALLOWED_MEDIA_TYPES }
                                        type="image"
                                        value={ profileImgID }
                                        render={ ( { open } ) => (
                                            <Fragment>
                                                <Button onClick={ open }>
                                                    { ! profileImgID ? (
                                                        icons.upload
                                                    ) : (
                                                        <img
                                                            className={ classnames(
                                                                'wp-image-' + profileImgID,
                                                                profileAvatarShape
                                                            ) }
                                                            src={ profileImgURL }
                                                            alt={ profileImgAlt }
                                                            style={{
                                                                width:imageWidth,
                                                                height:imageHeight,
                                                                }
                                                            }
                                                        />
                                                    ) }
                                                </Button>
                                                { profileImgID && (
                                                    <Button
                                                        className="tm-remove-image"
                                                        onClick={ () => {
                                                            setAttributes( {
                                                                profileImgID: null,
                                                                profileImgURL: null,
                                                                profileImgAlt: null,
                                                            } );
                                                        } }
                                                    >
                                                        <Dashicon icon={ 'dismiss' } />
                                                    </Button>
                                                ) }
                                            </Fragment>
                                        ) }
                                    ></MediaUpload>

                            {/* </AvatarColumn> */}

                            <div
                                className={ classnames(
                                    'tm-profile-column tm-profile-content-wrap'
                                ) }
                            >
                                <RichText
                                    tagName="h3"
                                    placeholder={ __( 'Add Name', 'team-blocks' ) }
                                    keepPlaceholderOnFocus
                                    value={ profileName }
                                    className="tm-profile-name"
                                    style={ {
                                        color: profileNameColor,

                                    } }
                                    onChange={ ( value ) =>
                                        setAttributes( { profileName: value } )
                                    }
                                />

                                <RichText
                                    tagName="span"
                                    placeholder={ __( 'Add Designation', 'team-blocks' ) }
                                    keepPlaceholderOnFocus
                                    value={ profileTitle }
                                    className="tm-profile-title"
                                    style={ {
                                        color: profileNameColor,
                                    } }
                                    onChange={ ( value ) =>
                                        setAttributes( { profileTitle: value } )
                                    }
                                />
                                <SocialIcons { ...this.props } />
                            </div>
                    </div>
                </div>

            );
        }
}
