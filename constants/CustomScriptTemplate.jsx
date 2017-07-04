const template = `function process(record, next, ctx, logger) {
  logger.log("This is a sample custom script";
  if (record != null) {
    if (record.containsField("data")) {
      var data = record.getField("data").getValueAsRecord();

      if (data.containsField("subscriptions")) {

        var log = new Record();
        log.addField("sourceApplication", "sourceApp");
        log.addField("actionDate", "2010-11-29T02:04:31.313Z");
        log.addField("action", "acceptance");

        var subscription = new Record();
        subscription.addField("acceptanceDate", "2017-04-28T02:04:31.313Z");
        subscription.addField("listID", "list02");
        subscription.addField("subscriptionSourceApplication", "newApp");
        subscription.addField("active", "true");
        subscription.addField("log", log, true);

        var subscriptions = data.getField("subscriptions").addValue(subscription);
      }
    }
  }
  next.accept(record);
}`;

export default template;
