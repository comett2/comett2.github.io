import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';

export function getAuthServiceConfigs() {
	const config = new AuthServiceConfig([{
		id: GoogleLoginProvider.PROVIDER_ID,
		provider: new GoogleLoginProvider('1022190242028-r7tefk73ke3n25ou6f0ei2na6hs0fich.apps.googleusercontent.com')
	}]);

	return config;
}
