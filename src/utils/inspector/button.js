/**
 * Internal dependencies.
 */
import RenderSettingControl from '../../utils/components/settings/renderSettingControl';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { SelectControl, ToggleControl } = wp.components;
const { PanelColorSettings } = wp.blockEditor;

export default function ButtonSettings( props ) {
	const {
		enableButtonBackgroundColor,
		buttonBackgroundColor,
		onChangeButtonColor = () => {},
		enableButtonTextColor,
		buttonTextColor,
		onChangeButtonTextColor = () => {},
		enableButtonSize,
		buttonSize,
		onChangeButtonSize = () => {},
		enableButtonShape,
		buttonShape,
		onChangeButtonShape = () => {},
		enableButtonTarget,
		buttonTarget,
		onChangeButtonTarget = () => {},
	} = props;

	// Button size values
	const buttonSizeOptions = [
		{
			value: 'tm-button-size-small',
			label: __( 'Small', 'team-blocks' ),
		},
		{
			value: 'tm-button-size-medium',
			label: __( 'Medium', 'team-blocks' ),
		},
		{
			value: 'tm-button-size-large',
			label: __( 'Large', 'team-blocks' ),
		},
		{
			value: 'tm-button-size-extralarge',
			label: __( 'Extra Large', 'team-blocks' ),
		},
	];

	// Button shape
	const buttonShapeOptions = [
		{
			value: 'tm-button-shape-square',
			label: __( 'Square', 'team-blocks' ),
		},
		{
			value: 'tm-button-shape-rounded',
			label: __( 'Rounded Square', 'team-blocks' ),
		},
		{
			value: 'tm-button-shape-circular',
			label: __( 'Circular', 'team-blocks' ),
		},
	];

	return (
		<Fragment>
			<RenderSettingControl id="ab_button_buttonOptions">
				{ false !== enableButtonTarget && (
					<ToggleControl
						label={ __(
							'Open link in new window',
							'team-blocks'
						) }
						checked={ buttonTarget }
						onChange={ onChangeButtonTarget }
					/>
				) }
				{ false !== enableButtonSize && (
					<SelectControl
						selected={ buttonSize }
						label={ __( 'Button Size', 'team-blocks' ) }
						value={ buttonSize }
						options={ buttonSizeOptions.map(
							( { value, label } ) => ( {
								value,
								label,
							} )
						) }
						onChange={ onChangeButtonSize }
					/>
				) }
				{ false !== enableButtonShape && (
					<SelectControl
						label={ __( 'Button Shape', 'team-blocks' ) }
						value={ buttonShape }
						options={ buttonShapeOptions.map(
							( { value, label } ) => ( {
								value,
								label,
							} )
						) }
						onChange={ onChangeButtonShape }
					/>
				) }
				{ false !== enableButtonBackgroundColor && (
					<PanelColorSettings
						title={ __( 'Button Color', 'team-blocks' ) }
						initialOpen={ false }
						colorSettings={ [
							{
								value: buttonBackgroundColor,
								onChange: onChangeButtonColor,
								label: __( 'Button Color', 'team-blocks' ),
							},
						] }
					></PanelColorSettings>
				) }
				{ false !== enableButtonTextColor && (
					<PanelColorSettings
						title={ __( 'Button Text Color', 'team-blocks' ) }
						initialOpen={ false }
						colorSettings={ [
							{
								value: buttonTextColor,
								onChange: onChangeButtonTextColor,
								label: __(
									'Button Text Color',
									'team-blocks'
								),
							},
						] }
					></PanelColorSettings>
				) }
			</RenderSettingControl>
		</Fragment>
	);
}
