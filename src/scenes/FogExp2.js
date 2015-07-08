import { THREE } from '../Three';
import { THREE$Color } from '../math/Color';

var THREE$FogExp2;

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

THREE$FogExp2 = function ( color, density ) {

	this.name = '';

	this.color = new THREE$Color( color );
	this.density = ( density !== undefined ) ? density : 0.00025;

};

THREE$FogExp2.prototype.clone = function () {

	return new THREE$FogExp2( this.color.getHex(), this.density );

};


export { THREE$FogExp2 };