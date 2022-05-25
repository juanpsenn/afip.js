const utils = require("../utils");

test("Get last voucher and expect to be an actual number", async () => {
  return utils
    .testAfip()
    .ElectronicBilling.getLastVoucher(1, 6)
    .then((lastVoucher) => {
      expect(typeof lastVoucher).toBe("number");
    });
});

test("Register a new receipt", async () => {
  const client = utils.testAfip().ElectronicBilling;
  return client.getLastVoucher(1, 6).then((lastVoucher) => {
    client.createVoucher(utils.testReceipt(lastVoucher + 1)).then((res) => {
      expect(res["CAE"].length).toBe(14);
    });
  });
});
