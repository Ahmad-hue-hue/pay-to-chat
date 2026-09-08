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
                    Got Questions? We have got Answers
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
                      Payments & Checkout Questions
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
                          aria-expanded={faqOpen === 'How does Chat to Pay work?'}
                          onClick={() => setFaqOpen(faqOpen === 'How does Chat to Pay work?' ? null : 'How does Chat to Pay work?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'How does Chat to Pay work?' ? null : 'How does Chat to Pay work?');
                            }
                          }}
                        >
                          <div className={styles.r26}>
                            <h3 className={styles.r27}>
                              How does Chat to Pay work?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'How does Chat to Pay work?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'How does Chat to Pay work?' && (
                          <p className={styles.faqAnswer}>
                            {'When a customer asks to buy in your WhatsApp chat, you share a checkout link for the item. They pay by card or Apple Pay on the hosted checkout page, and the order is confirmed instantly.'}
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
                          aria-expanded={faqOpen === 'Do my customers need to install anything?'}
                          onClick={() => setFaqOpen(faqOpen === 'Do my customers need to install anything?' ? null : 'Do my customers need to install anything?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'Do my customers need to install anything?' ? null : 'Do my customers need to install anything?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              Do my customers need to install anything?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'Do my customers need to install anything?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'Do my customers need to install anything?' && (
                          <p className={styles.faqAnswer}>
                            {'No. The checkout opens in your customer\'s browser from the link you share in the chat. They never leave WhatsApp for more than the payment step — no app, no account.'}
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
                          aria-expanded={faqOpen === 'Is the checkout PCI compliant and secure?'}
                          onClick={() => setFaqOpen(faqOpen === 'Is the checkout PCI compliant and secure?' ? null : 'Is the checkout PCI compliant and secure?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'Is the checkout PCI compliant and secure?' ? null : 'Is the checkout PCI compliant and secure?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              Is the checkout PCI compliant and secure?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'Is the checkout PCI compliant and secure?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'Is the checkout PCI compliant and secure?' && (
                          <p className={styles.faqAnswer}>
                            {'Yes. Payments run on a PCI-compliant hosted checkout and card details never touch your phone or the chat. Confirmed orders and payments appear in your dashboard.'}
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
                          aria-expanded={faqOpen === 'Do I need a website to use Chat to Pay?'}
                          onClick={() => setFaqOpen(faqOpen === 'Do I need a website to use Chat to Pay?' ? null : 'Do I need a website to use Chat to Pay?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'Do I need a website to use Chat to Pay?' ? null : 'Do I need a website to use Chat to Pay?');
                            }
                          }}
                        >
                          <div className={styles.r26}>
                            <h3 className={styles.r27}>
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
                            {'No website required. Add your products in the dashboard and we generate the checkout links you share directly in your conversations.'}
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
                          aria-expanded={faqOpen === 'Which payment methods can I accept?'}
                          onClick={() => setFaqOpen(faqOpen === 'Which payment methods can I accept?' ? null : 'Which payment methods can I accept?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'Which payment methods can I accept?' ? null : 'Which payment methods can I accept?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              Which payment methods can I accept?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'Which payment methods can I accept?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'Which payment methods can I accept?' && (
                          <p className={styles.faqAnswer}>
                            {'Cards — Visa, Mastercard, American Express and Discover — plus Apple Pay, so shoppers pay the way they already prefer.'}
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
                      Orders & Settlement Questions
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
                          aria-expanded={faqOpen === 'What happens after a customer pays?'}
                          onClick={() => setFaqOpen(faqOpen === 'What happens after a customer pays?' ? null : 'What happens after a customer pays?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'What happens after a customer pays?' ? null : 'What happens after a customer pays?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              What happens after a customer pays?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'What happens after a customer pays?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'What happens after a customer pays?' && (
                          <p className={styles.faqAnswer}>
                            {'The order moves to Paid in your dashboard and you get a notification, so you know exactly what to fulfil and ship.'}
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
                          aria-expanded={faqOpen === 'How do I manage my products?'}
                          onClick={() => setFaqOpen(faqOpen === 'How do I manage my products?' ? null : 'How do I manage my products?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'How do I manage my products?' ? null : 'How do I manage my products?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              How do I manage my products?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'How do I manage my products?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'How do I manage my products?' && (
                          <p className={styles.faqAnswer}>
                            {'From the Products screen in your dashboard — add, edit or pause items, set prices and stock, and they are immediately reflected in the checkout links you share.'}
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
                          aria-expanded={faqOpen === 'What if an order fails or is cancelled?'}
                          onClick={() => setFaqOpen(faqOpen === 'What if an order fails or is cancelled?' ? null : 'What if an order fails or is cancelled?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'What if an order fails or is cancelled?' ? null : 'What if an order fails or is cancelled?');
                            }
                          }}
                        >
                          <div className={styles.r42}>
                            <h3 className={styles.r43}>
                              What if an order fails or is cancelled?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'What if an order fails or is cancelled?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'What if an order fails or is cancelled?' && (
                          <p className={styles.faqAnswer}>
                            {'Failed and cancelled orders are flagged in the Orders screen, so you can see exactly which payments did not complete and can follow up in the chat.'}
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
                          aria-expanded={faqOpen === 'How long does setup take?'}
                          onClick={() => setFaqOpen(faqOpen === 'How long does setup take?' ? null : 'How long does setup take?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'How long does setup take?' ? null : 'How long does setup take?');
                            }
                          }}
                        >
                          <div className={styles.r42}>
                            <h3 className={styles.r43}>
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
                            {'Around 30 minutes. Connect your WhatsApp number, add your first products, and you are ready to send checkout links to customers.'}
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
                          aria-expanded={faqOpen === 'Where do my payouts go?'}
                          onClick={() => setFaqOpen(faqOpen === 'Where do my payouts go?' ? null : 'Where do my payouts go?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'Where do my payouts go?' ? null : 'Where do my payouts go?');
                            }
                          }}
                        >
                          <div className={styles.r42}>
                            <h3 className={styles.r43}>
                              Where do my payouts go?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'Where do my payouts go?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'Where do my payouts go?' && (
                          <p className={styles.faqAnswer}>
                            {'Settlements go to the bank account you connect during onboarding, on the payout schedule set when you create your store.'}
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
