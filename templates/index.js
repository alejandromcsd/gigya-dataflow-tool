import azureSas from './azureSas';
import bluekia from './bluekia';
import {
  inbound as inboundCampaingMonitor,
  outbound as outboundCampaingMonitor,
} from './campaingMonitor';

const templates = [
  azureSas,
  bluekia,
  inboundCampaingMonitor,
  outboundCampaingMonitor,
];

export default templates;
