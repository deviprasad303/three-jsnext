import { THREE } from '../../Three';
import { THREE$Object3D } from '../../core/Object3D';
import { THREE$Vector3 } from '../../math/Vector3';
import { THREE$Quaternion } from '../../math/Quaternion';

var THREE$AudioListener;

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE$AudioListener = function () {

	THREE$Object3D.call( this );

	this.type = 'AudioListener';

	this.context = new ( window.AudioContext || window.webkitAudioContext )();

};

THREE$AudioListener.prototype = Object.create( THREE$Object3D.prototype );
THREE$AudioListener.prototype.constructor = THREE$AudioListener;

THREE$AudioListener.prototype.updateMatrixWorld = ( function () {

	var position = new THREE$Vector3();
	var quaternion = new THREE$Quaternion();
	var scale = new THREE$Vector3();

	var orientation = new THREE$Vector3();
	var velocity = new THREE$Vector3();

	var positionPrev = new THREE$Vector3();

	return function ( force ) {

		THREE$Object3D.prototype.updateMatrixWorld.call( this, force );

		var listener = this.context.listener;
		var up = this.up;

		this.matrixWorld.decompose( position, quaternion, scale );

		orientation.set( 0, 0, -1 ).applyQuaternion( quaternion );
		velocity.subVectors( position, positionPrev );

		listener.setPosition( position.x, position.y, position.z );
		listener.setOrientation( orientation.x, orientation.y, orientation.z, up.x, up.y, up.z );
		listener.setVelocity( velocity.x, velocity.y, velocity.z );

		positionPrev.copy( position );

	};

} )();


export { THREE$AudioListener };