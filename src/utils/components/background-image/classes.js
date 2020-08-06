import { dimRatioToClass } from './shared';

/**
 * Background image classes.
 *
 * @param {Object} attributes
 */
function BackgroundImageClasses( attributes ) {
	return [
		attributes.backgroundDimRatio !== undefined &&
		100 !== attributes.backgroundDimRatio
			? 'tm-has-background-dim'
			: null,
		dimRatioToClass( attributes.backgroundDimRatio ),
		attributes.backgroundImgURL &&
		attributes.backgroundSize &&
		'no-repeat' === attributes.backgroundRepeat
			? 'tm-background-' + attributes.backgroundSize
			: null,
		attributes.backgroundImgURL && attributes.backgroundRepeat
			? 'tm-background-' + attributes.backgroundRepeat
			: null,
		attributes.hasParallax ? 'tm-has-parallax' : null,
	];
}

export default BackgroundImageClasses;
