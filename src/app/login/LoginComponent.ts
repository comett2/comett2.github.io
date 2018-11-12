import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';

@Component({
	selector: 'sp-login',
	templateUrl: `LoginComponent.html`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

	constructor(private socialAuthService: AuthService) {

	}

	ngOnInit() {

	}

	public signinWithGoogle () {
		let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

		this.socialAuthService.signIn(socialPlatformProvider).then(
			(userData) => { //on success
				//this will return user data from google. What you need is a user token which you will send it to the server
				this.sendToRestApiMethod(userData.idToken);
			}
		);
	}

	private sendToRestApiMethod(idToken: string) {
		console.log(idToken);
	}
}
