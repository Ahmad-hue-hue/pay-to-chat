import Image from 'next/image';
import Link from 'next/link';
import styles from './Expertise.module.css';

export default function Expertise() {
  return (
      <section className={styles.expertise}>
        <div className={styles.r1}>
          <div className={styles.r2}>
            <div className={styles.dektop}>
              <div className={styles.tag} data-border="true">
                <div className={styles.icon}>
                  <div className={styles.r6}>
                    <Image className={styles.r7} src="/assets/media/OFSj5DDE3LhTRNCB9IPMewMk4y8.svg" alt="Icon" width={20} height={20} />
                  </div>
                </div>
                <div className={styles.text}>
                  <p className={styles.r9}>
                    Expertise
                  </p>
                </div>
              </div>
              <div className={styles.textContainer}>
                <div className={styles.heading}>
                  <h2 className={styles.r12}>
                    Expertise in Payments
                  </h2>
                </div>
                <div className={styles.paragraph}>
                  <p className={styles.r14}>
                    Focused on one goal: turning chat conversations into paid orders. From hosted checkout to instant pay links, everything is built for sellers like you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.card} data-border="true">
            <div className={styles.container}>
              <div className={styles.subContainer2}>
                <div className={styles.r1}>
                  <div className={styles.icon2}>
                    <div className={styles.r20}>
                      <Image className={styles.r21} src="/assets/media/AjRSp79fx1LPv4e4B1KlsLtdEZc.svg" alt="Icon" width={24} height={24} />
                    </div>
                  </div>
                </div>
                <div className={styles.heading2}>
                  <h3 className={styles.r23}>
                    Hosted Checkout
                  </h3>
                </div>
              </div>
              <div className={styles.paragraph2}>
                <p className={styles.r25}>
                  A secure checkout page that loads fast from any link. Buyers pay with cards or Apple Pay, and you collect the cash right away.
                </p>
              </div>
            </div>
            <div className={styles.r1}>
              <div className={styles.r26}>
                <Link className={styles.hoverArrow} data-border="true" href="/contact">
                  <div className={styles.text2}>
                    <p className={styles.r29}>
                      Get in Touch
                    </p>
                  </div>
                  <div className={styles.iconRight}>
                    <div className={styles.icon}>
                      <div className={styles.r6}>
                        <Image className={styles.r31} src="/assets/media/lJSvGFGPhRLFfxcyPg1nppxYdA.svg" alt="" width={20} height={20} aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.card2} data-border="true">
            <div className={styles.container2}>
              <div className={styles.subContainer3}>
                <div className={styles.r1}>
                  <div className={styles.icon2}>
                    <div className={styles.r20}>
                      <Image className={styles.r35} src="/assets/media/JTpykLKaHYU0B6cgqBPTa5MAoM.svg" alt="Icon" width={25} height={24} />
                    </div>
                  </div>
                </div>
                <div className={styles.heading3}>
                  <h3 className={styles.r37}>
                    Chat Pay Links
                  </h3>
                </div>
              </div>
              <div className={styles.paragraph3}>
                <p className={styles.r39}>
                  Turn any product into a pay-link in seconds. Share it in WhatsApp and let the checkout handle cards, wallets, and instant confirmation.
                </p>
              </div>
            </div>
            <div className={styles.r1}>
              <div className={styles.r40}>
                <Link className={styles.hoverArrow2} data-border="true" href="/contact">
                  <div className={styles.text2}>
                    <p className={styles.r29}>
                      Get in Touch
                    </p>
                  </div>
                  <div className={styles.iconRight}>
                    <div className={styles.icon}>
                      <div className={styles.r6}>
                        <Image className={styles.r31} src="/assets/media/lJSvGFGPhRLFfxcyPg1nppxYdA.svg" alt="" width={20} height={20} aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.card} data-border="true">
            <div className={styles.container}>
              <div className={styles.subContainer4}>
                <div className={styles.icon2}>
                  <div className={styles.r20}>
                    <Image className={styles.r35} src="/assets/media/2txGmcOBXehPQnYosck02lNP5DM.svg" alt="Icon" width={25} height={24} />
                  </div>
                </div>
                <div className={styles.heading2}>
                  <h3 className={styles.r23}>
                    Order Dashboard
                  </h3>
                </div>
              </div>
              <div className={styles.paragraph2}>
                <p className={styles.r25}>
                  Keep every order and payout in one dashboard. Track sales, confirm payments, and settle funds without leaving your workflow.
                </p>
              </div>
            </div>
            <div className={styles.r1}>
              <div className={styles.r26}>
                <Link className={styles.hoverArrow} data-border="true" href="/contact">
                  <div className={styles.text2}>
                    <p className={styles.r29}>
                      Get in Touch
                    </p>
                  </div>
                  <div className={styles.iconRight}>
                    <div className={styles.icon}>
                      <div className={styles.r6}>
                        <Image className={styles.r31} src="/assets/media/lJSvGFGPhRLFfxcyPg1nppxYdA.svg" alt="" width={20} height={20} aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
