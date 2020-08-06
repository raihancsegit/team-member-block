/**
 * BLOCK: Atomic Blocks Profile Box
 */

/**
 * Internal dependencies
 */
import Edit from './components/edit';
import Save from './components/save';
import './styles/style.scss';
import './styles/editor.scss';
import Deprecated from './deprecated/deprecated';
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const blockAttributes = {
	profileName: {
		type: 'array',
		source: 'children',
		selector: '.tm-profile-name',
	},
	profileTitle: {
		type: 'array',
		source: 'children',
		selector: '.tm-profile-title',
	},
	profileAlignment: {
		type: 'string',
		default:'center'
	},
	profileImgURL: {
		type: 'string',
		source: 'attribute',
		attribute: 'src',
		selector: 'img',
	},
	profileImgAlt: {
		type: 'string',
		source: 'attribute',
		selector: 'figure img',
		attribute: 'alt',
		default: '',
	},
	profileImgID: {
		type: 'number',
	},
	profileBackgroundColor: {
		type: 'string',
	},

	profileNameColor:{
		type: 'string',
	},
	profileLinkColor: {
		type: 'string',
	},
	profileNameSize: {
		type: 'number',
	},
	profileAvatarShape: {
		type: 'string',
		default: 'round',
	},
	profileAvatarPosition: {
		type: 'string',
		default: 'top',
	},
	twitter: {
		type: 'url',
		default: '#',
	},
	facebook: {
		type: 'url',
		default: '#',
	},
	instagram: {
		type: 'url',
		default: '#',
	},
	pinterest: {
		type: 'url',
	},
	google: {
		type: 'url',
	},
	youtube: {
		type: 'url',
	},
	github: {
		type: 'url',
	},
	linkedin: {
		type: 'url',
	},
	email: {
		type: 'url',
	},
	wordpress: {
		type: 'url',
	},
	website: {
		type: 'url',
	},
	paddingTop:{
		type: 'number',
	},
	paddingBottom:{
		type: 'number',
	},
	profileNameBottomSpace:{
		type: 'number',
	},
	profileDesignationsize:{
		type: 'number',
	},
	sectionWidth:{
		type: 'number',
	},
	blockTheme:{
		type: 'string',
		default: 'theme1',
	},
	socialBgColor: {
		type: 'string',
	},

	imageWidth:{
		type: 'number',
	},
	imageHeight:{
		type: 'number',
	},

};

/**
 * Register the block
 */
registerBlockType( 'team-member-block/block-team-member', {
	title: __( 'Team Member', 'team-blocks' ),
	description: __(
		'Add a profile box with bio info and social media links.',
		'team-blocks'
	),
	icon: 'admin-users',
	category: 'common',
	keywords: [
		__( 'author', 'team-blocks' ),
		__( 'profile', 'team-blocks' ),
		__( 'team', 'team-blocks' ),
	],

	/* Setup the block attributes */
	attributes: blockAttributes,

	/* Render the block in the editor. */
	edit: ( props ) => {
		return <Edit { ...props } />;
	},

	/* Save the block markup. */
	save: ( props ) => {
		return <Save { ...props } />;
	},

	deprecated: Deprecated,
} );
