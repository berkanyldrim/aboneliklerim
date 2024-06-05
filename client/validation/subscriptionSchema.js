import * as yup from "yup";

export const schema = yup.object({
  subscribe: yup.object().shape({}).required("Abonelik Seçimi Zorunludur."),
  price: yup.string().required("Fiyat Zorunludur."),
  paymentDate: yup
    .date()
    .required("Ödeme Tarihi Zorunludur.")
    .typeError("Geçersiz Tarih !"),
  currency: yup.string().required("Para Birimi Zorunludur."),
  repetitionTime: yup
    .object()
    .shape({
      value: yup.string().required("Tekrarlama Zamanı Zorunludur."),
      unit: yup.string().required("Tekrarlama Zamanı Birimi Zorunludur."),
    })
    .required("Tekrarlama Zamanı Zorunludur."),
  autoRenewal: yup.boolean().required("Otomatik Yenileme Zorunludur."),
  note: yup.string().nullable(),
});

export const defaultValues = {
  subscribe: {},
  price: "",
  paymentDate: "",
  currency: "",
  repetitionTime: {
    value: "",
    unit: "",
  },
  autoRenewal: false,
  note: "",
};
