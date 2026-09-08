'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Faq.module.css';

export default function Faq() {
  const [faqOpen, setFaqOpen] = useState<string | null>(null);

  return (
      <section className={styles.faqS}>
        <div className={styles.r1}>
          <div className={styles.r2}>
            <div className={styles.dektop}>
              <div className={styles.tag} data-border="true">
                <div className={styles.icon}>
                  <div className={styles.r6}>
                    <Image className={styles.r7} src="/assets/media/n806fLLfwVbcz99FKpeYvQPlYU.svg" alt="Icon" width={21} height={20} />
                  </div>
                </div>
                <div className={styles.text}>
                  <p className={styles.r9}>
                    FAQ’s
                  </p>
                </div>
              </div>
              <div className={styles.textContainer}>
                <div className={styles.heading}>
                  <h2 className={styles.r12}>
                    Questions? We Have Answers
                  </h2>
                </div>
                <div className={styles.paragraph}>
                  <p className={styles.r14}>
                    Still have questions? Send us a message on WhatsApp or email hello@chattopay.example
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.r1}>
            <div className={styles.r16}>
              <div className={styles.big} data-border="true">
                <div className={styles.subContainer2} data-border="true">
                  <div className={styles.heading2}>
                    <p className={styles.r20}>
                      Getting Paid in Chats
                    </p>
                  </div>
                </div>
                <div className={styles.container}>
                  <div className={styles.r22}>
                    <div className={styles.bigClosed}>
                      <div className={styles.container2}>
                        <div
                          className={`${styles.question} ${styles.faqRow}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={faqOpen === 'How do I get paid for my orders?'}
                          onClick={() => setFaqOpen(faqOpen === 'How do I get paid for my orders?' ? null : 'How do I get paid for my orders?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'How do I get paid for my orders?' ? null : 'How do I get paid for my orders?');
                            }
                          }}
                        >
                          <div className={styles.r26}>
                            <h3 className={styles.r27}>
                              How do I get paid for my orders?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'How do I get paid for my orders?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'How do I get paid for my orders?' && (
                          <p className={styles.faqAnswer}>
                            {'When a customer pays on your hosted checkout, the payment is captured and settled to your account. You can track your payouts and settlement from the dashboard as orders move from Pending to Paid.'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.r33}>
                    <div className={styles.bigClosed2}>
                      <div className={styles.container3}>
                        <div
                          className={`${styles.question2} ${styles.faqRow}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={faqOpen === 'Is my checkout PCI compliant and secure?'}
                          onClick={() => setFaqOpen(faqOpen === 'Is my checkout PCI compliant and secure?' ? null : 'Is my checkout PCI compliant and secure?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'Is my checkout PCI compliant and secure?' ? null : 'Is my checkout PCI compliant and secure?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              Is my checkout PCI compliant and secure?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'Is my checkout PCI compliant and secure?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'Is my checkout PCI compliant and secure?' && (
                          <p className={styles.faqAnswer}>
                            {'Yes. We use a PCI-compliant hosted checkout, so card details are handled securely and never touch your devices or systems. Your customers can pay with confidence on a hosted page.'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.r33}>
                    <div className={styles.bigClosed2}>
                      <div className={styles.container3}>
                        <div
                          className={`${styles.question2} ${styles.faqRow}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={faqOpen === 'Does my customer need to install anything to pay?'}
                          onClick={() => setFaqOpen(faqOpen === 'Does my customer need to install anything to pay?' ? null : 'Does my customer need to install anything to pay?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'Does my customer need to install anything to pay?' ? null : 'Does my customer need to install anything to pay?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              Does my customer need to install anything to pay?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'Does my customer need to install anything to pay?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'Does my customer need to install anything to pay?' && (
                          <p className={styles.faqAnswer}>
                            {'No. Your customer simply opens the secure checkout link you send in chat and pays by card or Apple Pay. There is no app to install and no account for them to create.'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.r22}>
                    <div className={styles.bigClosed}>
                      <div className={styles.container2}>
                        <div
                          className={`${styles.question} ${styles.faqRow}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={faqOpen === 'How long does setup take?'}
                          onClick={() => setFaqOpen(faqOpen === 'How long does setup take?' ? null : 'How long does setup take?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'How long does setup take?' ? null : 'How long does setup take?');
                            }
                          }}
                        >
                          <div className={styles.r26}>
                            <h3 className={styles.r27}>
                              How long does setup take?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'How long does setup take?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'How long does setup take?' && (
                          <p className={styles.faqAnswer}>
                            {'Setup takes about 30 minutes. You connect your WhatsApp number, add your products, and you are ready to send checkout links. No coding is required and you do not need a website.'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.r33}>
                    <div className={styles.bigClosed2}>
                      <div className={styles.container3}>
                        <div
                          className={`${styles.question2} ${styles.faqRow}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={faqOpen === 'Do I need a website to use Chat to Pay?'}
                          onClick={() => setFaqOpen(faqOpen === 'Do I need a website to use Chat to Pay?' ? null : 'Do I need a website to use Chat to Pay?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'Do I need a website to use Chat to Pay?' ? null : 'Do I need a website to use Chat to Pay?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              Do I need a website to use Chat to Pay?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'Do I need a website to use Chat to Pay?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'Do I need a website to use Chat to Pay?' && (
                          <p className={styles.faqAnswer}>
                            {'No. Chat to Pay works directly in WhatsApp. You turn a chat into a paid order by sending a hosted checkout link, so you can start selling without a website or any technical setup.'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.r1}>
            <div className={styles.r39}>
              <div className={styles.big2} data-border="true">
                <div className={styles.subContainer2} data-border="true">
                  <div className={styles.heading2}>
                    <p className={styles.r20}>
                      Orders & Payouts
                    </p>
                  </div>
                </div>
                <div className={styles.container4}>
                  <div className={styles.r33}>
                    <div className={styles.bigClosed2}>
                      <div className={styles.container3}>
                        <div
                          className={`${styles.question2} ${styles.faqRow}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={faqOpen === 'What payment methods are supported?'}
                          onClick={() => setFaqOpen(faqOpen === 'What payment methods are supported?' ? null : 'What payment methods are supported?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'What payment methods are supported?' ? null : 'What payment methods are supported?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              What payment methods are supported?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'What payment methods are supported?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'What payment methods are supported?' && (
                          <p className={styles.faqAnswer}>
                            {'Your checkout supports Visa, Mastercard, Amex, Discover, and Apple Pay. Customers pay securely on the hosted page, and you can confirm each order as it is paid.'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.r33}>
                    <div className={styles.bigClosed2}>
                      <div className={styles.container3}>
                        <div
                          className={`${styles.question2} ${styles.faqRow}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={faqOpen === 'Can I refund an order?'}
                          onClick={() => setFaqOpen(faqOpen === 'Can I refund an order?' ? null : 'Can I refund an order?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'Can I refund an order?' ? null : 'Can I refund an order?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              Can I refund an order?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'Can I refund an order?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'Can I refund an order?' && (
                          <p className={styles.faqAnswer}>
                            {'Yes. You can manage refunds from your dashboard. Orders can be tracked as All, Pending, Paid, or Failed, and you can handle a refund for a paid order when needed.'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.r33}>
                    <div className={styles.bigClosed2}>
                      <div className={styles.container3}>
                        <div
                          className={`${styles.question2} ${styles.faqRow}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={faqOpen === 'How do I manage products and orders?'}
                          onClick={() => setFaqOpen(faqOpen === 'How do I manage products and orders?' ? null : 'How do I manage products and orders?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'How do I manage products and orders?' ? null : 'How do I manage products and orders?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              How do I manage products and orders?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'How do I manage products and orders?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'How do I manage products and orders?' && (
                          <p className={styles.faqAnswer}>
                            {'Everything lives in your simple dashboard. You add and update products, then see your orders in the orders table so you can track, find, and act on every sale.'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.r33}>
                    <div className={styles.bigClosed2}>
                      <div className={styles.container3}>
                        <div
                          className={`${styles.question2} ${styles.faqRow}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={faqOpen === 'What are the fees to use Chat to Pay?'}
                          onClick={() => setFaqOpen(faqOpen === 'What are the fees to use Chat to Pay?' ? null : 'What are the fees to use Chat to Pay?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'What are the fees to use Chat to Pay?' ? null : 'What are the fees to use Chat to Pay?');
                            }
                          }}
                        >
                          <div className={styles.r42}>
                            <h3 className={styles.r43}>
                              What are the fees to use Chat to Pay?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'What are the fees to use Chat to Pay?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'What are the fees to use Chat to Pay?' && (
                          <p className={styles.faqAnswer}>
                            {'There are no fees to sign up and no monthly commitment. You only pay when you are paid, making it easy to start accepting payments without upfront costs.'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.r33}>
                    <div className={styles.bigClosed2}>
                      <div className={styles.container3}>
                        <div
                          className={`${styles.question2} ${styles.faqRow}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={faqOpen === 'Can I contact support via WhatsApp?'}
                          onClick={() => setFaqOpen(faqOpen === 'Can I contact support via WhatsApp?' ? null : 'Can I contact support via WhatsApp?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'Can I contact support via WhatsApp?' ? null : 'Can I contact support via WhatsApp?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              Can I contact support via WhatsApp?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'Can I contact support via WhatsApp?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'Can I contact support via WhatsApp?' && (
                          <p className={styles.faqAnswer}>
                            {'Yes. Our support team is available over WhatsApp, so you can get help right where you run your business without leaving the channel.'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
