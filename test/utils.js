const Afip = require("../src/Afip");

module.exports = {
  testAfip: () => {
    return new Afip({
      CUIT: 20402490803,
      res_folder: "test/__tests__/certs/",
      ta_folder: "test/__tests__/tokens/",
      cert: "test.pem",
      key: "test.key",
    });
  },
  testReceipt: (receiptNumber) => {
    const date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .split("T")[0];

    return {
      CantReg: 1,
      PtoVta: 1,
      CbteTipo: 6,
      Concepto: 1,
      DocTipo: 99,
      DocNro: 0,
      CbteDesde: receiptNumber,
      CbteHasta: receiptNumber,
      CbteFch: parseInt(date.replace(/-/g, "")),
      ImpTotal: 121.0,
      ImpTotConc: 0,
      ImpNeto: 100,
      ImpOpEx: 0,
      ImpIVA: 21.0,
      ImpTrib: 0,
      FchServDesde: null,
      FchServHasta: null,
      FchVtoPago: null,
      MonId: "PES",
      MonCotiz: 1,
    //   CbtesAsoc: [
    //     {
    //       Tipo: 6,
    //       PtoVta: 1,
    //       Nro: 1,
    //       Cuit: 20111111112,
    //     },
    //   ],
    //   Tributos: [
    //     {
    //       Id: 99,
    //       Desc: "Ingresos Brutos",
    //       BaseImp: 150,
    //       Alic: 5.2,
    //       Importe: 7.8,
    //     },
    //   ],
      Iva: [
        {
          Id: 5,
          BaseImp: 100,
          Importe: 21,
        },
      ],
      //   Opcionales: [
      //     {
      //       Id: 17,
      //       Valor: 2,
      //     },
      //   ],
      //   Compradores: [
      //     {
      //       DocTipo: 80,
      //       DocNro: 20111111112,
      //       Porcentaje: 100,
      //     },
      //   ],
    };
  },
};
