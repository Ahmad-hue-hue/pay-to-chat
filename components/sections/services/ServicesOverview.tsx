import Image from 'next/image';
import Link from 'next/link';
import styles from './ServicesOverview.module.css';

export default function ServicesOverview() {
  return (
      <section className={styles.servicesOverview}>
        <div className={styles.r1}>
          <div className={styles.r2}>
            <div className={styles.dektop}>
              <div className={styles.tag} data-border="true">
                <div className={styles.icon}>
                  <div className={styles.r6}>
                    <Image className={styles.r7} src="/assets/media/mTtmYC1N1XY1BvndJqnJoEo3s.svg" alt="Icon" width={20} height={20} />
                  </div>
                </div>
                <div className={styles.text}>
                  <p className={styles.r9}>
                    Service Overview
                  </p>
                </div>
              </div>
              <div className={styles.textContainer}>
                <div className={styles.heading}>
                  <h2 className={styles.r12}>
                    How We Get You Paid
                  </h2>
                </div>
                <div className={styles.paragraph}>
                  <p className={styles.r14}>
                    Everything from checkout to payouts in one place. Send a link in chat, collect card or Apple Pay payments, and settle your funds faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.container} data-border="true">
            <div className={styles.card} data-border="true">
              <div className={styles.container2}>
                <div className={styles.subContainer2}>
                  <div className={styles.icon2}>
                    <div className={styles.r21}>
                      <Image className={styles.r22} src="/assets/media/AjRSp79fx1LPv4e4B1KlsLtdEZc.svg" alt="Icon" width={24} height={24} />
                    </div>
                  </div>
                  <div className={styles.heading2}>
                    <h3 className={styles.r24}>
                      Hosted Checkout
                    </h3>
                  </div>
                </div>
                <div className={styles.paragraph2}>
                  <p className={styles.r26}>
                    A PCI-compliant checkout page that loads instantly from any link. Buyers pay with cards or Apple Pay and get instant confirmation.
                  </p>
                </div>
              </div>
              <div className={styles.r1}>
                <div className={styles.r27}>
                  <Link className={styles.hoverArrow} data-border="true" href="/login">
                    <div className={styles.text2}>
                      <p className={styles.r30}>
                        Create Your Store
                      </p>
                    </div>
                    <div className={styles.iconRight}>
                      <div className={styles.icon}>
                        <div className={styles.r6}>
                          <Image className={styles.r32} src="/assets/media/lJSvGFGPhRLFfxcyPg1nppxYdA.svg" alt="" width={20} height={20} aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.subContainer3}>
              <div className={styles.container3}>
                <div className={styles.card2}>
                  <div className={styles.iconContainer} data-border="true">
                    <div className={styles.icon3}>
                      <div className={styles.r6}>
                        <Image className={styles.r38} src="/assets/media/nTYAqEXN9C0me62zMoI2ff2yOTE.svg" alt="Icon" width={20} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.text3}>
                    <p className={styles.r40}>
                      PCI-compliant Checkout
                    </p>
                  </div>
                </div>
                <div className={styles.line} data-border="true" />
                <div className={styles.card3}>
                  <div className={styles.iconContainer} data-border="true">
                    <div className={styles.icon3}>
                      <div className={styles.r6}>
                        <Image className={styles.r43} src="/assets/media/gNOSDtyGW0RDasLw0wjZhN4zIZ0.svg" alt="Icon" width={21} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.text4}>
                    <p className={styles.r45}>
                      Fast Load Times
                    </p>
                  </div>
                </div>
                <div className={styles.line} data-border="true" />
                <div className={styles.card4}>
                  <div className={styles.iconContainer} data-border="true">
                    <div className={styles.icon3}>
                      <div className={styles.r6}>
                        <Image className={styles.r43} src="/assets/media/zDempxsSq60mkq0dMapR6P5EzBo.svg" alt="Icon" width={21} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.text5}>
                    <p className={styles.r48}>
                      Card & Apple Pay
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.line2} data-border="true" />
              <div className={styles.container4}>
                <div className={styles.card2}>
                  <div className={styles.iconContainer} data-border="true">
                    <div className={styles.icon3}>
                      <div className={styles.r6}>
                        <Image className={styles.r38} src="/assets/media/SCJ6J98oOFdoHymkYICgdZkM7E.svg" alt="Icon" width={20} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.text3}>
                    <p className={styles.r40}>
                      Order Overview
                    </p>
                  </div>
                </div>
                <div className={styles.line} data-border="true" />
                <div className={styles.card3}>
                  <div className={styles.iconContainer} data-border="true">
                    <div className={styles.icon3}>
                      <div className={styles.r6}>
                        <Image className={styles.r43} src="/assets/media/ydIz3M4mCTEOuLxZxwJ7lovZtTY.svg" alt="Icon" width={21} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.text4}>
                    <p className={styles.r45}>
                      Instant Confirmation
                    </p>
                  </div>
                </div>
                <div className={styles.line} data-border="true" />
                <div className={styles.card3}>
                  <div className={styles.iconContainer} data-border="true">
                    <div className={styles.icon3}>
                      <div className={styles.r6}>
                        <Image className={styles.r43} src="/assets/media/4gDtrSrlMvO59cIL21ZTNMgdtgU.svg" alt="Icon" width={21} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.text4}>
                    <p className={styles.r45}>
                      Payment Capture
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container5} data-border="true">
            <div className={styles.card} data-border="true">
              <div className={styles.container2}>
                <div className={styles.subContainer2}>
                  <div className={styles.icon2}>
                    <div className={styles.r21}>
                      <Image className={styles.r52} src="/assets/media/JTpykLKaHYU0B6cgqBPTa5MAoM.svg" alt="Icon" width={25} height={24} />
                    </div>
                  </div>
                  <div className={styles.heading2}>
                    <h3 className={styles.r24}>
                      Chat Pay Links
                    </h3>
                  </div>
                </div>
                <div className={styles.paragraph2}>
                  <p className={styles.r26}>
                    Turn any product into a pay-link in seconds, share it in WhatsApp, and the checkout handles the rest.
                  </p>
                </div>
              </div>
              <div className={styles.r1}>
                <div className={styles.r27}>
                  <Link className={styles.hoverArrow} data-border="true" href="/login">
                    <div className={styles.text2}>
                      <p className={styles.r30}>
                        Create Your Store
                      </p>
                    </div>
                    <div className={styles.iconRight}>
                      <div className={styles.icon}>
                        <div className={styles.r6}>
                          <Image className={styles.r32} src="/assets/media/lJSvGFGPhRLFfxcyPg1nppxYdA.svg" alt="" width={20} height={20} aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.subContainer4}>
              <div className={styles.container3}>
                <div className={styles.card5}>
                  <div className={styles.iconContainer} data-border="true">
                    <div className={styles.icon3}>
                      <div className={styles.r6}>
                        <Image className={styles.r38} src="/assets/media/1mlx3cOqytkIBWGvs9YPljlTbE.svg" alt="Icon" width={20} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.text6}>
                    <p className={styles.r56}>
                      Pay-Link Generation
                    </p>
                  </div>
                </div>
                <div className={styles.line} data-border="true" />
                <div className={styles.card3}>
                  <div className={styles.iconContainer} data-border="true">
                    <div className={styles.icon3}>
                      <div className={styles.r6}>
                        <Image className={styles.r43} src="/assets/media/EfgJ0MlDOhBAjKx26zL2ZdGTzE.svg" alt="Icon" width={21} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.text4}>
                    <p className={styles.r45}>
                      Catalog Sync
                    </p>
                  </div>
                </div>
                <div className={styles.line} data-border="true" />
                <div className={styles.card3}>
                  <div className={styles.iconContainer} data-border="true">
                    <div className={styles.icon3}>
                      <div className={styles.r6}>
                        <Image className={styles.r43} src="/assets/media/4HblmCmoovr4TKp3Yb5QovOsQ.svg" alt="Icon" width={21} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.text4}>
                    <p className={styles.r45}>
                      One-tap Payments
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.line3} data-border="true" />
              <div className={styles.container3}>
                <div className={styles.card5}>
                  <div className={styles.iconContainer} data-border="true">
                    <div className={styles.icon3}>
                      <div className={styles.r6}>
                        <Image className={styles.r38} src="/assets/media/p0ol2SMUR0ygmKZajUIarElaU.svg" alt="Icon" width={20} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.text6}>
                    <p className={styles.r56}>
                      Invoice Links
                    </p>
                  </div>
                </div>
                <div className={styles.line} data-border="true" />
                <div className={styles.card3}>
                  <div className={styles.iconContainer} data-border="true">
                    <div className={styles.icon3}>
                      <div className={styles.r6}>
                        <Image className={styles.r43} src="/assets/media/Jalmjnw0Y0kdnIoOOsfJqkXuzs.svg" alt="Icon" width={21} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.text4}>
                    <p className={styles.r45}>
                      WhatsApp-ready
                    </p>
                  </div>
                </div>
                <div className={styles.line} data-border="true" />
                <div className={styles.card3}>
                  <div className={styles.iconContainer} data-border="true">
                    <div className={styles.icon3}>
                      <div className={styles.r6}>
                        <Image className={styles.r43} src="/assets/media/toNbV6YSTqyjxMcAyanPIWdgHqA.svg" alt="Icon" width={21} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.text4}>
                    <p className={styles.r45}>
                      Order Tracking
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container} data-border="true">
            <div className={styles.card} data-border="true">
              <div className={styles.container2}>
                <div className={styles.subContainer5}>
                  <div className={styles.icon2}>
                    <div className={styles.r21}>
                      <Image className={styles.r52} src="/assets/media/2txGmcOBXehPQnYosck02lNP5DM.svg" alt="Icon" width={25} height={24} />
                    </div>
                  </div>
                  <div className={styles.heading2}>
                    <h3 className={styles.r24}>
                      Orders & Payouts
                    </h3>
                  </div>
                </div>
                <div className={styles.paragraph2}>
                  <p className={styles.r26}>
                    Track every sale and payout in a clear dashboard. Settlements land on schedule and reports are always up to date.
                  </p>
                </div>
              </div>
              <div className={styles.r1}>
                <div className={styles.r27}>
                  <Link className={styles.hoverArrow} data-border="true" href="/login">
                    <div className={styles.text2}>
                      <p className={styles.r30}>
                        Create Your Store
                      </p>
                    </div>
                    <div className={styles.iconRight}>
                      <div className={styles.icon}>
                        <div className={styles.r6}>
                          <Image className={styles.r32} src="/assets/media/lJSvGFGPhRLFfxcyPg1nppxYdA.svg" alt="" width={20} height={20} aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.subContainer3}>
              <div className={styles.container3}>
                <div className={styles.card5}>
                  <div className={styles.iconContainer} data-border="true">
                    <div className={styles.icon3}>
                      <div className={styles.r6}>
                        <Image className={styles.r38} src="/assets/media/pCjwKabrD3muBobibi2oESUUKO4.svg" alt="Icon" width={20} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.text6}>
                    <p className={styles.r56}>
                      Sales Analytics
                    </p>
                  </div>
                </div>
                <div className={styles.line} data-border="true" />
                <div className={styles.card3}>
                  <div className={styles.iconContainer} data-border="true">
                    <div className={styles.icon3}>
                      <div className={styles.r6}>
                        <Image className={styles.r43} src="/assets/media/D0xEkdihOgMmSjwFfL52dIB1ik.svg" alt="Icon" width={21} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.text4}>
                    <p className={styles.r45}>
                      Payout History
                    </p>
                  </div>
                </div>
                <div className={styles.line} data-border="true" />
                <div className={styles.card3}>
                  <div className={styles.iconContainer} data-border="true">
                    <div className={styles.icon3}>
                      <div className={styles.r6}>
                        <Image className={styles.r43} src="/assets/media/nVqPug6KxPO0ME4U541eGGNr57Q.svg" alt="Icon" width={21} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.text4}>
                    <p className={styles.r45}>
                      Fast Settlements
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.line2} data-border="true" />
              <div className={styles.container4}>
                <div className={styles.card2}>
                  <div className={styles.iconContainer} data-border="true">
                    <div className={styles.icon3}>
                      <div className={styles.r6}>
                        <Image className={styles.r38} src="/assets/media/12T3vhvPRSodqGltEzSPIjNJw.svg" alt="Icon" width={20} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.text3}>
                    <p className={styles.r40}>
                      Settlement Reports
                    </p>
                  </div>
                </div>
                <div className={styles.line} data-border="true" />
                <div className={styles.card3}>
                  <div className={styles.iconContainer} data-border="true">
                    <div className={styles.icon3}>
                      <div className={styles.r6}>
                        <Image className={styles.r43} src="/assets/media/g2iFX2xv6lpLxWoTs83959PV14.svg" alt="Icon" width={21} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.text4}>
                    <p className={styles.r45}>
                      Data Export
                    </p>
                  </div>
                </div>
                <div className={styles.line} data-border="true" />
                <div className={styles.card3}>
                  <div className={styles.iconContainer} data-border="true">
                    <div className={styles.icon3}>
                      <div className={styles.r6}>
                        <Image className={styles.r43} src="/assets/media/iC8hhEfX11Ow6AxT84wI21As0.svg" alt="Icon" width={21} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.text4}>
                    <p className={styles.r45}>
                      Transaction Logs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
