/**
 * Background image inspector settings.
 */

const { __ } = wp.i18n;
const { Fragment, Component } = wp.element;
const {
	PanelBody,
	RangeControl,
	Button,
	ButtonGroup,
	FocalPointPicker,
	Icon,
	ToggleControl,
	SelectControl,
} = wp.components;
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;

class BackgroundImagePanel extends Component {
	render() {
		const { attributes, setAttributes } = this.props;

		const backgroundRepeatOptions = [
			{ value: 'no-repeat', label: __( 'No Repeat', 'team-blocks' ) },
			{ value: 'repeat', label: __( 'Repeat', 'team-blocks' ) },
			{
				value: 'repeat-x',
				label: __( 'Repeat Horizontally', 'team-blocks' ),
			},
			{
				value: 'repeat-y',
				label: __( 'Repeat Vertically', 'team-blocks' ),
			},
		];

		const backgroundSizeOptions = [
			{ value: 'auto', label: __( 'Auto', 'team-blocks' ) },
			{ value: 'cover', label: __( 'Cover', 'team-blocks' ) },
			{ value: 'contain', label: __( 'Contain', 'team-blocks' ) },
		];

		let backgroundSizeHelp;

		if ( 'cover' === attributes.backgroundSize ) {
			backgroundSizeHelp = __(
				'Scales the image as large as possible without stretching the image. Cropped either vertically or horizontally so that no empty space remains.',
				'team-blocks'
			);
		}
		if ( 'contain' === attributes.backgroundSize ) {
			backgroundSizeHelp = __(
				'Scales the image as large as possible without cropping or stretching the image.',
				'team-blocks'
			);
		}
		if ( 'auto' === attributes.backgroundSize ) {
			backgroundSizeHelp = __(
				'Scales the background image in the corresponding direction such that its intrinsic proportions are maintained.',
				'team-blocks'
			);
		}

		return (
			<Fragment>
				<PanelBody
					title={ __( 'Background Image', 'team-blocks' ) }
					initialOpen={ false }
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( img ) => {
								setAttributes( {
									backgroundImgURL: img.url,
								} );
							} }
							type="image"
							value={ attributes.backgroundImgURL }
							render={ ( { open } ) => (
								<div>
									<ButtonGroup className="tm-background-button-group">
										<Button
											className="tm-inspector-icon-button tm-background-add-button is-button is-default"
											label={ __(
												'Edit image',
												'team-blocks'
											) }
											onClick={ open }
										>
											<Icon icon="format-image" />
											{ __(
												'Select Image',
												'team-blocks'
											) }
										</Button>

										{ attributes.backgroundImgURL && (
											<Button
												className="tm-inspector-icon-button tm-background-remove-button is-button is-default"
												label={ __(
													'Remove Image',
													'team-blocks'
												) }
												onClick={ () =>
													setAttributes( {
														backgroundImgURL: null,
													} )
												}
											>
												<Icon icon="dismiss" />
												{ __(
													'Remove',
													'team-blocks'
												) }
											</Button>
										) }
									</ButtonGroup>
								</div>
							) }
						></MediaUpload>
					</MediaUploadCheck>

					{ attributes.backgroundImgURL && (
						<Fragment>
							<FocalPointPicker
								label={ __( 'Focal Point', 'team-blocks' ) }
								url={ attributes.backgroundImgURL }
								value={ attributes.focalPoint }
								onChange={ ( value ) =>
									setAttributes( { focalPoint: value } )
								}
							/>

							<RangeControl
								label={ __( 'Image Opacity', 'team-blocks' ) }
								value={ attributes.backgroundDimRatio }
								onChange={ ( value ) =>
									this.props.setAttributes( {
										backgroundDimRatio: value,
									} )
								}
								min={ 0 }
								max={ 100 }
								step={ 10 }
							/>

							<ToggleControl
								label={ __(
									'Fixed Background',
									'team-blocks'
								) }
								checked={ attributes.hasParallax }
								onChange={ () => {
									setAttributes( {
										hasParallax: ! attributes.hasParallax,
										...( ! attributes.hasParallax
											? { focalPoint: undefined }
											: {} ),
									} );
								} }
							/>

							<SelectControl
								className="tm-inspector-help-text"
								label={ __( 'Image Display', 'team-blocks' ) }
								value={ attributes.backgroundSize }
								help={ backgroundSizeHelp }
								options={ backgroundSizeOptions }
								onChange={ ( value ) =>
									this.props.setAttributes( {
										backgroundSize: value,
									} )
								}
							/>

							{ 'cover' !== attributes.backgroundSize && (
								<SelectControl
									label={ __(
										'Image Repeat',
										'team-blocks'
									) }
									value={ attributes.backgroundRepeat }
									options={ backgroundRepeatOptions }
									onChange={ ( value ) =>
										this.props.setAttributes( {
											backgroundRepeat: value,
										} )
									}
								/>
							) }
						</Fragment>
					) }
				</PanelBody>
			</Fragment>
		);
	}
}

export default BackgroundImagePanel;
