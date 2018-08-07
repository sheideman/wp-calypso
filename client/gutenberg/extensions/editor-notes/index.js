/** @format */
/**
 * External dependencies
 */
import wp from 'wp';
const { RichText } = wp.editor;
import Card from 'components/card';
import Ribbon from 'components/ribbon';

import './style.scss';

const attributes = {
	notes: {
		type: 'array',
	},
};

const edit = ( { attributes: { notes }, className, setAttributes } ) => (
	<Card highlight="error" className={ `${ className } ${ className }__box` }>
		<Ribbon>Hidden</Ribbon>
		<RichText
			tagName="p"
			className={ className }
			value={ notes }
			onChange={ newNotes => setAttributes( { notes: newNotes } ) }
		/>
	</Card>
);

const save = () => null;

wp.blocks.registerBlockType( 'a8c/editor-notes', {
	title: "Editor's Notes",
	icon: 'welcome-write-blog',
	category: 'common',
	attributes,
	edit,
	save,
} );
