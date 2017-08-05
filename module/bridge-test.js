const assert = require( "should" );

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @bridge:

describe( "<module>", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`<test>`", ( ) => {
		it( "<message>", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return <test>;
				}

			).value;

			assert.equal( result, <expected> );

		} );
	} );

} );

//: @end-bridge
