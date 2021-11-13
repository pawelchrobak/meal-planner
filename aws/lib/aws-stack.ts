import * as cdk from '@aws-cdk/core';
import { Bucket } from '@aws-cdk/aws-s3';
import { Distribution, ViewerProtocolPolicy } from '@aws-cdk/aws-cloudfront';
import { S3Origin } from '@aws-cdk/aws-cloudfront-origins';
import { ARecord, HostedZone, RecordTarget } from '@aws-cdk/aws-route53';
import { CloudFrontTarget } from '@aws-cdk/aws-route53-targets';
import { Certificate } from '@aws-cdk/aws-certificatemanager';
import { appConstants } from '../../constants/constants';

export class AwsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // fe-bucket-definition
    const feBucket = new Bucket(this, `${this.stackName}-s3-bucket`, {
      bucketName: `fe-${appConstants.awsAppId}`,
    });

    const domainName = `${appConstants.awsRoute53.subdomain}.${appConstants.awsRoute53.zoneName}`;

    // cloudfron discribution
    const distribution = new Distribution(
      this,
      `${this.stackName}-cloudfront-distribution`,
      {
        defaultBehavior: {
          origin: new S3Origin(feBucket),
          viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
        domainNames: [domainName],
        certificate: Certificate.fromCertificateArn(
          this,
          `${this.stackName}-ssl-certificate`,
          appConstants.awsSSLCertArn
        ),
        defaultRootObject: 'index.html',
      }
    );

    // route53 settings
    const route53Record = new ARecord(
      this,
      `${this.stackName}-route53-record`,
      {
        zone: HostedZone.fromHostedZoneAttributes(
          this,
          `${this.stackName}-hosted-zone`,
          {
            hostedZoneId: appConstants.awsRoute53.hostedZoneId,
            zoneName: appConstants.awsRoute53.zoneName,
          }
        ),
        target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
        recordName: domainName,
      }
    );
  }
}
