import Image from 'next/image';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
      <section className={styles.aboutSection}>
        <div className={styles.r1}>
          <div className={styles.r2}>
            <div className={styles.dektop}>
              <div className={styles.tag} data-border="true">
                <div className={styles.icon}>
                  <div className={styles.r6}>
                    <Image className={styles.r7} src="/assets/media/kXzKnSo8AYBBiRWPv9cmra68Z38.svg" alt="Icon" width={20} height={20} />
                  </div>
                </div>
                <div className={styles.text}>
                  <p className={styles.r9}>
                    About us
                  </p>
                </div>
              </div>
              <div className={styles.textContainer}>
                <div className={styles.heading}>
                  <h2 className={styles.r12}>
                    About Chat to Pay
                  </h2>
                </div>
                <div className={styles.paragraph}>
                  <p className={styles.r14}>
                    Chat to Pay is a payments product that lets small businesses accept card and Apple Pay payments straight from WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.container}>
            <div className={styles.r1}>
              <div className={styles.image}>
                <div className={styles.r18}>
                  <Image className={styles.r19} src="/assets/media/cLYzyomAKkuIY6hVgkscLfTmpQ.jpg" alt="About Us Image" width={545} height={363} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container2}>
            <div className={styles.subContainer2}>
              <div className={styles.card}>
                <div className={styles.textContainer2}>
                  <div className={styles.heading2}>
                    <h3 className={styles.r25}>
                      30 min
                    </h3>
                  </div>
                  <div className={styles.text2}>
                    <h4 className={styles.r27}>
                      Average Setup
                    </h4>
                  </div>
                </div>
                <div className={styles.line} />
                <div className={styles.paragraph2}>
                  <p className={styles.r30}>
                    About a 30-minute setup, from connecting your WhatsApp number to ready to sell.
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.textContainer2}>
                  <div className={styles.heading2}>
                    <h3 className={styles.r25}>
                      150k+
                    </h3>
                  </div>
                  <div className={styles.text2}>
                    <h4 className={styles.r27}>
                      Orders Placed
                    </h4>
                  </div>
                </div>
                <div className={styles.line} />
                <div className={styles.paragraph2}>
                  <p className={styles.r30}>
                    Merchants have placed 150,000+ orders with Chat to Pay across WhatsApp.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.subContainer2}>
              <div className={styles.card}>
                <div className={styles.textContainer2}>
                  <div className={styles.heading2}>
                    <h3 className={styles.r25}>
                      98%
                    </h3>
                  </div>
                  <div className={styles.text2}>
                    <h4 className={styles.r27}>
                      Payments Settled
                    </h4>
                  </div>
                </div>
                <div className={styles.line} />
                <div className={styles.paragraph2}>
                  <p className={styles.r30}>
                    With 98% of payments settling, merchants can rely on getting paid.
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.textContainer2}>
                  <div className={styles.heading2}>
                    <h3 className={styles.r25}>
                      2,400+
                    </h3>
                  </div>
                  <div className={styles.text2}>
                    <h4 className={styles.r27}>
                      Active Merchants
                    </h4>
                  </div>
                </div>
                <div className={styles.line} />
                <div className={styles.paragraph2}>
                  <p className={styles.r30}>
                    With 2,400+ active merchants, small businesses use Chat to Pay every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
