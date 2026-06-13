import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovEdistrictodishaspApi implements ICredentialType {
        name = 'N8nDevApisetuGovEdistrictodishaspApi';

        displayName = 'Apisetu Gov Edistrictodishasp API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovEdistrictodishasp/apisetu-gov-edistrictodishasp.svg', dark: 'file:../nodes/ApisetuGovEdistrictodishasp/apisetu-gov-edistrictodishasp.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/edistrictodishasp/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/edistrictodishasp/v3',
                        description: 'The base URL of your Apisetu Gov Edistrictodishasp API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
