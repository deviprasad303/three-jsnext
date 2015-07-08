import { THREE, THREE$UVMapping, THREE$UnsignedByteType, THREE$RGBAFormat, THREE$LinearMipMapLinearFilter, THREE$LinearFilter, THREE$ClampToEdgeWrapping } from '../Three';
import { THREE$EventDispatcher } from '../core/EventDispatcher';
import { THREE$Vector2 } from '../math/Vector2';
import { THREE$Math } from '../math/Math';

var THREE$Texture;

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author szimek / https://github.com/szimek/
 */

THREE$Texture = function ( image, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy ) {

	Object.defineProperty( this, 'id', { value: THREE$TextureIdCount() } );

	this.uuid = THREE$Math.generateUUID();

	this.name = '';
	this.sourceFile = '';

	this.image = image !== undefined ? image : THREE$Texture.DEFAULT_IMAGE;
	this.mipmaps = [];

	this.mapping = mapping !== undefined ? mapping : THREE$Texture.DEFAULT_MAPPING;

	this.wrapS = wrapS !== undefined ? wrapS : THREE$ClampToEdgeWrapping;
	this.wrapT = wrapT !== undefined ? wrapT : THREE$ClampToEdgeWrapping;

	this.magFilter = magFilter !== undefined ? magFilter : THREE$LinearFilter;
	this.minFilter = minFilter !== undefined ? minFilter : THREE$LinearMipMapLinearFilter;

	this.anisotropy = anisotropy !== undefined ? anisotropy : 1;

	this.format = format !== undefined ? format : THREE$RGBAFormat;
	this.type = type !== undefined ? type : THREE$UnsignedByteType;

	this.offset = new THREE$Vector2( 0, 0 );
	this.repeat = new THREE$Vector2( 1, 1 );

	this.generateMipmaps = true;
	this.premultiplyAlpha = false;
	this.flipY = true;
	this.unpackAlignment = 4; // valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

	this._needsUpdate = false;
	this.onUpdate = null;

};

THREE$Texture.DEFAULT_IMAGE = undefined;
THREE$Texture.DEFAULT_MAPPING = THREE$UVMapping;

THREE$Texture.prototype = {

	constructor: THREE$Texture,

	get needsUpdate () {

		return this._needsUpdate;

	},

	set needsUpdate ( value ) {

		if ( value === true ) this.update();

		this._needsUpdate = value;

	},

	clone: function ( texture ) {

		if ( texture === undefined ) texture = new THREE$Texture();

		texture.image = this.image;
		texture.mipmaps = this.mipmaps.slice( 0 );

		texture.mapping = this.mapping;

		texture.wrapS = this.wrapS;
		texture.wrapT = this.wrapT;

		texture.magFilter = this.magFilter;
		texture.minFilter = this.minFilter;

		texture.anisotropy = this.anisotropy;

		texture.format = this.format;
		texture.type = this.type;

		texture.offset.copy( this.offset );
		texture.repeat.copy( this.repeat );

		texture.generateMipmaps = this.generateMipmaps;
		texture.premultiplyAlpha = this.premultiplyAlpha;
		texture.flipY = this.flipY;
		texture.unpackAlignment = this.unpackAlignment;

		return texture;

	},

	update: function () {

		this.dispatchEvent( { type: 'update' } );

	},

	dispose: function () {

		this.dispatchEvent( { type: 'dispose' } );

	}

};

THREE$EventDispatcher.prototype.apply( THREE$Texture.prototype );

var count = 0;
function THREE$TextureIdCount () { return count++; };


export { THREE$TextureIdCount, THREE$Texture };