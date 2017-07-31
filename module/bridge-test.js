const assert = require( "should" );

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @bridge:

describe( "<module>", ( ) => {

	const testBridge = path.resolve(__dirname, "bridge.html");
	const bridgeURL = "file://" + testBridge;

} );

//: @end-bridge
