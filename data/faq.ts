/**
 * FAQ content.
 *
 * The original renders answers only while an item is expanded, so they do not
 * exist in a static capture. These were recovered by driving the accordion in a
 * real browser; the text is verbatim from the original.
 *
 * Each page's list is keyed separately because the three FAQ sections differ.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const homeFaq: FaqItem[] = [
  {
    question: 'How do I get paid for my orders?',
    answer:
      'When a customer pays on your hosted checkout, the payment is captured and settled to your account. You can track your payouts and settlement from the dashboard as orders move from Pending to Paid.',
  },
  {
    question: 'Is my checkout PCI compliant and secure?',
    answer:
      'Yes. We use a PCI-compliant hosted checkout, so card details are handled securely and never touch your devices or systems. Your customers can pay with confidence on a hosted page.',
  },
  {
    question: 'Does my customer need to install anything to pay?',
    answer:
      'No. Your customer simply opens the secure checkout link you send in chat and pays by card or Apple Pay. There is no app to install and no account for them to create.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Setup takes about 30 minutes. You connect your WhatsApp number, add your products, and you are ready to send checkout links. No coding is required and you do not need a website.',
  },
  {
    question: 'Do I need a website to use Chat to Pay?',
    answer:
      'No. Chat to Pay works directly in WhatsApp. You turn a chat into a paid order by sending a hosted checkout link, so you can start selling without a website or any technical setup.',
  },
  {
    question: 'What payment methods are supported?',
    answer:
      'Your checkout supports Visa, Mastercard, Amex, Discover, and Apple Pay. Customers pay securely on the hosted page, and you can confirm each order as it is paid.',
  },
  {
    question: 'Can I refund an order?',
    answer:
      'Yes. You can manage refunds from your dashboard. Orders can be tracked as All, Pending, Paid, or Failed, and you can handle a refund for a paid order when needed.',
  },
  {
    question: 'How do I manage products and orders?',
    answer:
      'Everything lives in your simple dashboard. You add and update products, then see your orders in the orders table so you can track, find, and act on every sale.',
  },
  {
    question: 'What are the fees to use Chat to Pay?',
    answer:
      'There are no fees to sign up and no monthly commitment. You only pay when you are paid, making it easy to start accepting payments without upfront costs.',
  },
  {
    question: 'Can I contact support via WhatsApp?',
    answer:
      'Yes. Our support team is available over WhatsApp, so you can get help right where you run your business without leaving the channel.',
  },
];

export const servicesFaq: FaqItem[] = [
  {
    question: 'How do I get paid for my orders?',
    answer:
      'When a customer pays on your hosted checkout, the payment is captured and settled to your account. You can track your payouts and settlement from the dashboard as orders move from Pending to Paid.',
  },
  {
    question: 'Is my checkout PCI compliant and secure?',
    answer:
      'Yes. We use a PCI-compliant hosted checkout, so card details are handled securely and never touch your devices or systems. Your customers can pay with confidence on a hosted page.',
  },
  {
    question: 'Does my customer need to install anything to pay?',
    answer:
      'No. Your customer simply opens the secure checkout link you send in chat and pays by card or Apple Pay. There is no app to install and no account for them to create.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Setup takes about 30 minutes. You connect your WhatsApp number, add your products, and you are ready to send checkout links. No coding is required and you do not need a website.',
  },
  {
    question: 'Do I need a website to use Chat to Pay?',
    answer:
      'No. Chat to Pay works directly in WhatsApp. You turn a chat into a paid order by sending a hosted checkout link, so you can start selling without a website or any technical setup.',
  },
  {
    question: 'What payment methods are supported?',
    answer:
      'Your checkout supports Visa, Mastercard, Amex, Discover, and Apple Pay. Customers pay securely on the hosted page, and you can confirm each order as it is paid.',
  },
  {
    question: 'Can I refund an order?',
    answer:
      'Yes. You can manage refunds from your dashboard. Orders can be tracked as All, Pending, Paid, or Failed, and you can handle a refund for a paid order when needed.',
  },
  {
    question: 'How do I manage products and orders?',
    answer:
      'Everything lives in your simple dashboard. You add and update products, then see your orders in the orders table so you can track, find, and act on every sale.',
  },
  {
    question: 'What are the fees to use Chat to Pay?',
    answer:
      'There are no fees to sign up and no monthly commitment. You only pay when you are paid, making it easy to start accepting payments without upfront costs.',
  },
  {
    question: 'Can I contact support via WhatsApp?',
    answer:
      'Yes. Our support team is available over WhatsApp, so you can get help right where you run your business without leaving the channel.',
  },
];

export const contactFaq: FaqItem[] = [
  {
    question: 'How do I get paid for my orders?',
    answer:
      'When a customer pays on your hosted checkout, the payment is captured and settled to your account. You can track your payouts and settlement from the dashboard as orders move from Pending to Paid.',
  },
  {
    question: 'Is my checkout PCI compliant and secure?',
    answer:
      'Yes. We use a PCI-compliant hosted checkout, so card details are handled securely and never touch your devices or systems. Your customers can pay with confidence on a hosted page.',
  },
  {
    question: 'Does my customer need to install anything to pay?',
    answer:
      'No. Your customer simply opens the secure checkout link you send in chat and pays by card or Apple Pay. There is no app to install and no account for them to create.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Setup takes about 30 minutes. You connect your WhatsApp number, add your products, and you are ready to send checkout links. No coding is required and you do not need a website.',
  },
  {
    question: 'Do I need a website to use Chat to Pay?',
    answer:
      'No. Chat to Pay works directly in WhatsApp. You turn a chat into a paid order by sending a hosted checkout link, so you can start selling without a website or any technical setup.',
  },
  {
    question: 'What payment methods are supported?',
    answer:
      'Your checkout supports Visa, Mastercard, Amex, Discover, and Apple Pay. Customers pay securely on the hosted page, and you can confirm each order as it is paid.',
  },
  {
    question: 'Can I refund an order?',
    answer:
      'Yes. You can manage refunds from your dashboard. Orders can be tracked as All, Pending, Paid, or Failed, and you can handle a refund for a paid order when needed.',
  },
  {
    question: 'How do I manage products and orders?',
    answer:
      'Everything lives in your simple dashboard. You add and update products, then see your orders in the orders table so you can track, find, and act on every sale.',
  },
  {
    question: 'What are the fees to use Chat to Pay?',
    answer:
      'There are no fees to sign up and no monthly commitment. You only pay when you are paid, making it easy to start accepting payments without upfront costs.',
  },
  {
    question: 'Can I contact support via WhatsApp?',
    answer:
      'Yes. Our support team is available over WhatsApp, so you can get help right where you run your business without leaving the channel.',
  },
];
