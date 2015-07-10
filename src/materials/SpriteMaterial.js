import { THREE } from '../Three';
import { THREE$Material } from './Material';
import { THREE$Color } from '../math/Color';

/**
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *  map: new THREE.Texture( <Image> ),
 *
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *	uvOffset: new THREE.Vector2(),
 *	uvScale: new THREE.Vector2(),
 *
 *  fog: <bool>
 * }
 */

function THREE$SpriteMaterial ( parameters ) {

	THREE$Material.call( this );

	this.type = 'SpriteMaterial';

	this.color = new THREE$Color( 0xffffff );
	this.map = null;

	this.rotation = 0;

	this.fog = false;

	// set parameters

	this.setValues( parameters );

};

THREE$SpriteMaterial.prototype = Object.create( THREE$Material.prototype );
THREE$SpriteMaterial.prototype.constructor = THREE$SpriteMaterial;

THREE$SpriteMaterial.prototype.clone = function () {

	var material = new THREE$SpriteMaterial();

	THREE$Material.prototype.clone.call( this, material );

	material.color.copy( this.color );
	material.map = this.map;

	material.rotation = this.rotation;

	material.fog = this.fog;

	return material;

};


export { THREE$SpriteMaterial };