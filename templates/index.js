import azureSas from './azureSas';
import bluekia from './bluekia';
import {
  inbound as inboundCampaingMonitor,
  outbound as outboundCampaingMonitor,
} from './campaingMonitor';
import {
  inbound as inboundConstantContact,
  outbound as outboundConstantContact,
} from './constantContact';
import {
  fromGigyaToSFTP,
  adobeAudience,
  epsilon,
} from './exportToSFTP';
import outboundGameMechanics from './gameMechanics';
import inboundSFTP from './importFromSFTP';
import outboundKrux from './krux';
import {
  inbound as inboundMailchimp,
  outbound as outboundMailchimp,
} from './mailchimp';
import {
  inbound as inboundMarketo,
  outbound as outboundMarketo,
} from './marketo';
import {
  salesforce,
  marketingCloud,
} from './salesforce';
import {
  inbound as inboundSilverpop,
  outbound as outboundSilverpop,
} from './silverpop';

const templates = [
  azureSas,
  bluekia,
  inboundCampaingMonitor,
  outboundCampaingMonitor,
  inboundConstantContact,
  outboundConstantContact,
  fromGigyaToSFTP,
  adobeAudience,
  epsilon,
  outboundGameMechanics,
  inboundSFTP,
  outboundKrux,
  inboundMailchimp,
  outboundMailchimp,
  inboundMarketo,
  outboundMarketo,
  salesforce,
  marketingCloud,
  inboundSilverpop,
  outboundSilverpop,
];

export default templates;
