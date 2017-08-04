describe( "<module>", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`<test>`", ( ) => {
		it( <message>, ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){

				}

			).value;

			assert.equal( result, <expected> );

		} );
	} );

} );
