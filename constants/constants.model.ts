export interface ConstantsModel {
  awsAppId: string;
  awsAccount: string;
  awsRegion: string;
  awsSSLCertArn: string;
  awsRoute53: {
    hostedZoneId: string;
    zoneName: string;
    subdomain: string;
  }
}
